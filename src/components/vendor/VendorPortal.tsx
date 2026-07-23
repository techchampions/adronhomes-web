"use client";

import {
  PublicVendor,
  VendorGiftRequest,
} from "@/data/types/vendorTypes";
import {
  useCollectVendorGift,
  useVendorPortal,
} from "@/hooks/useVendorPortal";
import { useVendorPortalStore } from "@/store/vendorPortalStore";
import Modal from "@/components/Modal";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Gift,
  LoaderCircle,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

const statuses = ["all", "pending", "granted", "collected", "rejected"];

function messageFrom(error: unknown, fallback: string) {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response
  ) {
    const data = error.response.data as { message?: string };
    return data.message || fallback;
  }
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}

function formatDate(value?: string | null) {
  if (!value) return "Not set";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);
}

function StatusBadge({ status }: { status: string }) {
  const style =
    status.toLowerCase() === "collected"
      ? "bg-green-50 text-green-700"
      : ["pending", "granted"].includes(status.toLowerCase())
        ? "bg-orange-50 text-orange-700"
        : status.toLowerCase() === "rejected"
          ? "bg-red-50 text-red-700"
          : "bg-gray-100 text-gray-600";
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${style}`}>
      {status || "N/A"}
    </span>
  );
}

export default function VendorPortal({ link }: { link: string }) {
  const {
    accessCode,
    authorizedAccessCode,
    draftFilters,
    appliedFilters,
    setAccessCode,
    authorize,
    setDraftFilter,
    applyFilters,
    resetFilters,
    setPage,
    reset,
  } = useVendorPortalStore();
  const [accessError, setAccessError] = useState("");
  const [knownVendor, setKnownVendor] = useState<PublicVendor | null>(null);
  const [collectionError, setCollectionError] = useState("");
  const [collectionSuccess, setCollectionSuccess] = useState<{
    message: string;
    gift: string;
    customer: string;
  } | null>(null);
  const [requestToCollect, setRequestToCollect] =
    useState<VendorGiftRequest | null>(null);

  useEffect(() => {
    reset();
    setKnownVendor(null);
    return reset;
  }, [link, reset]);

  const queryParams = useMemo(
    () => ({
      link,
      access: authorizedAccessCode || undefined,
      ...appliedFilters,
    }),
    [link, authorizedAccessCode, appliedFilters],
  );
  const portal = useVendorPortal(queryParams);
  const collectGift = useCollectVendorGift(link);
  const data = portal.data?.data;
  const vendor = data?.vendor;
  const displayVendor = vendor || knownVendor;
  const requests = data?.list?.data ?? [];
  const authorized = Boolean(data?.list);
  const pagination = {
    current: data?.pagination?.current_page ?? data?.list?.current_page ?? 1,
    last: data?.pagination?.last_page ?? data?.list?.last_page ?? 1,
    total: data?.pagination?.total ?? data?.list?.total ?? 0,
  };

  useEffect(() => {
    if (vendor) setKnownVendor(vendor);
  }, [vendor]);

  function handleAccess(event: FormEvent) {
    event.preventDefault();
    const code = accessCode.trim();
    if (!code) {
      setAccessError("Please enter your access code.");
      return;
    }
    setAccessError("");
    if (code === authorizedAccessCode) {
      portal.refetch();
    } else {
      authorize(code);
    }
  }

  function handleFilters(event: FormEvent) {
    event.preventDefault();
    applyFilters();
  }

  async function confirmCollection() {
    if (!requestToCollect || !displayVendor) return;
    setCollectionError("");
    try {
      const result = await collectGift.mutateAsync({
        request_id: requestToCollect.id,
        vendor_id: displayVendor.id,
      });
      if (!result.success) throw new Error(result.message || "Collection failed");
      setCollectionSuccess({
        message: result.message || "Gift marked as collected successfully.",
        gift: requestToCollect.gift?.name || "Gift",
        customer:
          requestToCollect.user?.full_name ||
          `${requestToCollect.user?.first_name || ""} ${requestToCollect.user?.last_name || ""}`.trim() ||
          "Customer",
      });
      setRequestToCollect(null);
    } catch (error) {
      setCollectionError(
        messageFrom(error, "Unable to mark this gift as collected."),
      );
    }
  }

  const queryError = portal.isError
    ? messageFrom(
        portal.error,
        authorizedAccessCode
          ? "The access code is invalid or the requests could not be loaded."
          : "This vendor store could not be loaded.",
      )
    : "";

  return (
    <main className="min-h-screen bg-[#f4f6f1] px-4 py-4 text-[#272727] sm:py-6">
      <div className="mx-auto max-w-[1240px]">
        <header className="mb-5 overflow-hidden rounded-[24px] bg-[#79b833] p-5 text-white shadow-[0_16px_50px_rgba(121,184,51,.18)] sm:p-6">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#a9d76f]">
                <Gift size={15} /> Adron Homes Vendor Portal
              </p>
              <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
                {displayVendor?.name || (portal.isLoading ? "Loading vendor…" : "Vendor gift collection")}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                Securely verify customers and manage promotional gift pickups.
              </p>
            </div>
            {displayVendor && (
              <div className="grid gap-2 rounded-2xl bg-white/10 p-4 text-sm text-white/85 backdrop-blur sm:min-w-80">
                <span className="flex items-center gap-2"><Mail size={15} /> {displayVendor.email}</span>
                <span className="flex items-center gap-2"><Phone size={15} /> {displayVendor.phone}</span>
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 shrink-0" size={15} />
                  {displayVendor.address}, {displayVendor.lga}, {displayVendor.state}
                </span>
              </div>
            )}
          </div>
        </header>

        {portal.isLoading && !data ? (
          <div className="flex min-h-60 items-center justify-center rounded-[28px] bg-white">
            <LoaderCircle className="animate-spin text-[#79b833]" size={34} />
          </div>
        ) : queryError && !displayVendor ? (
          <div className="rounded-[28px] bg-white p-10 text-center shadow-sm">
            <CircleAlert className="mx-auto mb-4 text-[#d70e0e]" size={36} />
            <h2 className="text-2xl">Vendor store unavailable</h2>
            <p className="mt-2 text-sm text-[#767676]">{queryError}</p>
            <button onClick={() => portal.refetch()} className="mt-5 rounded-full bg-[#79b833] px-6 py-3 text-sm font-bold text-white">
              Try again
            </button>
          </div>
        ) : displayVendor && !authorized ? (
          <section className="mx-auto max-w-lg rounded-[28px] bg-white p-7 shadow-sm sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf6e4] text-[#5d9326]">
              <LockKeyhole size={23} />
            </div>
            <h2 className="text-3xl">Access your requests</h2>
            <p className="mt-2 text-sm leading-6 text-[#767676]">
              {data?.message || "Enter the access code supplied to your business."}
            </p>
            <form onSubmit={handleAccess} className="mt-6">
              <label htmlFor="access-code" className="mb-2 block text-sm font-semibold">
                Access code
              </label>
              <input
                id="access-code"
                type="password"
                autoComplete="current-password"
                value={accessCode}
                onChange={(event) => setAccessCode(event.target.value)}
                className="h-12 w-full rounded-xl border border-[#dedfd9] bg-[#fafbf8] px-4 outline-none transition focus:border-[#79b833] focus:ring-2 focus:ring-[#79b833]/20"
                placeholder="Enter access code"
              />
              {(accessError || queryError) && (
                <p role="alert" className="mt-2 text-sm text-[#d70e0e]">{accessError || queryError}</p>
              )}
              <button disabled={portal.isFetching} className="mt-5 h-12 w-full rounded-xl bg-[#79b833] font-bold text-white transition hover:bg-[#68a42c] disabled:opacity-60">
                {portal.isFetching ? "Checking…" : "View gift requests"}
              </button>
            </form>
          </section>
        ) : authorized ? (
          <section className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Total requests", data?.stats?.total ?? 0],
                ["Pending", data?.stats?.pending ?? 0],
                ["Collected", data?.stats?.collected ?? 0],
              ].map(([label, value]) => (
                <article key={String(label)} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-[#767676]">{label}</p>
                  <p className="mt-1 text-3xl font-semibold">{value}</p>
                </article>
              ))}
            </div>

            <form onSubmit={handleFilters} className="grid gap-4 rounded-[24px] bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.4fr_auto_auto] lg:items-end">
              <label className="text-sm font-semibold">From
                <input type="date" value={draftFilters.from} onChange={(e) => setDraftFilter("from", e.target.value)} className="mt-2 h-11 w-full rounded-xl bg-[#f5f5f2] px-3 font-normal outline-none focus:ring-2 focus:ring-[#79b833]/30" />
              </label>
              <label className="text-sm font-semibold">To
                <input type="date" value={draftFilters.to} onChange={(e) => setDraftFilter("to", e.target.value)} className="mt-2 h-11 w-full rounded-xl bg-[#f5f5f2] px-3 font-normal outline-none focus:ring-2 focus:ring-[#79b833]/30" />
              </label>
              <label className="text-sm font-semibold">Status
                <select value={draftFilters.status} onChange={(e) => setDraftFilter("status", e.target.value)} className="mt-2 h-11 w-full rounded-xl bg-[#f5f5f2] px-3 font-normal capitalize outline-none focus:ring-2 focus:ring-[#79b833]/30">
                  {statuses.map((status) => <option key={status}>{status}</option>)}
                </select>
              </label>
              <label className="text-sm font-semibold">Search
                <span className="relative mt-2 block">
                  <Search className="absolute left-3 top-3 text-[#767676]" size={17} />
                  <input value={draftFilters.search} onChange={(e) => setDraftFilter("search", e.target.value)} placeholder="Customer name, phone or email" className="h-11 w-full rounded-xl bg-[#f5f5f2] pl-10 pr-3 font-normal outline-none focus:ring-2 focus:ring-[#79b833]/30" />
                </span>
              </label>
              <button disabled={portal.isFetching} className="h-11 rounded-xl bg-[#79b833] px-6 text-sm font-bold text-white disabled:opacity-60">
                Apply
              </button>
              <button
                type="button"
                disabled={portal.isFetching}
                onClick={resetFilters}
                className="h-11 rounded-xl border border-[#d9ddd4] bg-white px-6 text-sm font-bold text-[#4f4f4f] transition hover:border-[#79b833] hover:text-[#5d9326] disabled:opacity-60"
              >
                Reset
              </button>
            </form>

            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#eceee9] px-5 py-5 sm:px-6">
                <div>
                  <h2 className="text-2xl">Gift requests</h2>
                  <p className="text-xs text-[#767676]">{pagination.total} request{pagination.total === 1 ? "" : "s"}</p>
                </div>
                {portal.isFetching && <LoaderCircle className="animate-spin text-[#79b833]" size={22} />}
              </div>
              {requests.length === 0 ? (
                <div className="px-5 py-14 text-center text-sm text-[#767676]">No gift requests match these filters.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[920px] text-left">
                    <thead className="bg-[#fafbf8] text-xs uppercase tracking-wide text-[#767676]">
                      <tr>{["Customer", "Gift", "Status", "Pickup", "Created", "Action"].map((head) => <th key={head} className="px-5 py-4 font-semibold">{head}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-[#eceee9]">
                      {requests.map((request) => {
                        const customer = request.user?.full_name || `${request.user?.first_name || ""} ${request.user?.last_name || ""}`.trim() || "N/A";
                        const isCollected = request.status?.toLowerCase() === "collected" || Boolean(request.collected_at);
                        return (
                          <tr key={request.id} className="text-sm">
                            <td className="px-5 py-4">
                              <p className="flex items-center gap-2 font-semibold"><UserRound size={15} className="text-[#79b833]" />{customer}</p>
                              <p className="mt-1 text-xs text-[#767676]">{request.user?.email || "No email"}</p>
                              <p className="mt-0.5 text-xs text-[#767676]">{request.user?.phone_number || "No phone"}</p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="flex items-center gap-2 font-semibold"><Gift size={15} className="text-[#79b833]" />{request.gift?.name || "N/A"}</p>
                              {request.user_note && <p title={request.user_note} className="mt-1 max-w-52 truncate text-xs text-[#767676]">{request.user_note}</p>}
                            </td>
                            <td className="px-5 py-4"><StatusBadge status={request.status} /></td>
                            <td className="px-5 py-4">{formatDate(request.pickup_date)}{request.collected_at && <p className="mt-1 text-xs text-[#767676]">Collected {formatDate(request.collected_at)}</p>}</td>
                            <td className="px-5 py-4">{formatDate(request.created_at)}</td>
                            <td className="px-5 py-4">
                              {isCollected ? <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700"><Check size={15} /> Collected</span> : (
                                <button onClick={() => setRequestToCollect(request)} className="rounded-full bg-[#79b833] px-4 py-2 text-xs font-bold text-white hover:bg-[#68a42c]">Mark collected</button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {pagination.last > 1 && (
                <nav aria-label="Gift requests pages" className="flex items-center justify-between border-t border-[#eceee9] px-5 py-4 text-sm">
                  <button disabled={pagination.current <= 1 || portal.isFetching} onClick={() => setPage(pagination.current - 1)} className="flex items-center gap-1 rounded-lg px-3 py-2 font-semibold disabled:opacity-30"><ChevronLeft size={17} /> Previous</button>
                  <span className="text-[#767676]">Page {pagination.current} of {pagination.last}</span>
                  <button disabled={pagination.current >= pagination.last || portal.isFetching} onClick={() => setPage(pagination.current + 1)} className="flex items-center gap-1 rounded-lg px-3 py-2 font-semibold disabled:opacity-30">Next <ChevronRight size={17} /></button>
                </nav>
              )}
            </div>
          </section>
        ) : null}
      </div>

      {requestToCollect && (
        <div role="dialog" aria-modal="true" aria-labelledby="collect-title" className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h2 id="collect-title" className="text-3xl">Confirm collection</h2>
                <p className="mt-2 text-sm leading-6 text-[#767676]">
                  Mark <strong className="text-[#272727]">{requestToCollect.gift?.name || "this gift"}</strong> for {requestToCollect.user?.full_name || requestToCollect.user?.first_name || "this customer"} as collected? This action should only be taken after handing over the gift.
                </p>
              </div>
              <button aria-label="Close" onClick={() => setRequestToCollect(null)} className="rounded-full p-2 hover:bg-gray-100"><X size={19} /></button>
            </div>
            {collectionError && <p role="alert" className="mt-4 text-sm text-[#d70e0e]">{collectionError}</p>}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button onClick={() => setRequestToCollect(null)} className="h-11 rounded-xl border border-[#dedfd9] text-sm font-bold">Cancel</button>
              <button disabled={collectGift.isPending} onClick={confirmCollection} className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#79b833] text-sm font-bold text-white disabled:opacity-60">
                {collectGift.isPending && <LoaderCircle className="animate-spin" size={17} />} Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        show={Boolean(collectionSuccess)}
        onClose={() => setCollectionSuccess(null)}
        closeButton={false}
        className="max-w-[440px] p-7 text-center sm:p-9"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#edf7e5]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#79b833] text-white shadow-[0_8px_24px_rgba(121,184,51,.3)]">
            <Check size={30} strokeWidth={3} />
          </div>
        </div>
        <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#79b833]">
          Collection successful
        </p>
        <h2 className="mt-2 text-4xl text-[#272727]">Gift handed over</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#767676]">
          <strong className="text-[#272727]">{collectionSuccess?.gift}</strong>{" "}
          has been recorded as collected by{" "}
          <strong className="text-[#272727]">
            {collectionSuccess?.customer}
          </strong>
          .
        </p>
        {collectionSuccess?.message && (
          <p className="mt-2 text-xs text-[#8f8f8f]">
            {collectionSuccess.message}
          </p>
        )}
        <button
          onClick={() => setCollectionSuccess(null)}
          className="mt-7 h-12 w-full rounded-xl bg-[#79b833] text-sm font-bold text-white transition hover:bg-[#68a42c]"
        >
          Continue
        </button>
      </Modal>
    </main>
  );
}
