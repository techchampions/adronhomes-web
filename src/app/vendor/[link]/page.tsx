import VendorPortal from "@/components/vendor/VendorPortal";

export default async function VendorPage({
  params,
}: {
  params: Promise<{ link: string }>;
}) {
  const { link } = await params;
  return <VendorPortal link={link} />;
}
