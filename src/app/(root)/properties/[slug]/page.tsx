"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { FaHeart, FaMapMarker } from "react-icons/fa";
import SelectField from "@/components/SelectField";
import Button from "@/components/Button";
import { IoIosCheckmarkCircleOutline, IoLogoWhatsapp } from "react-icons/io";
import { useParams } from "next/navigation";
import { useEnquireProperty, useGetPropertyByID } from "@/data/hooks";
import Loader from "@/components/Loader";
import { formatDate, formatPrice } from "@/utils/formater";
import {
  IoCarSportOutline,
  IoCheckmark,
  IoClose,
  IoConstructOutline,
} from "react-icons/io5";
import { LiaToiletSolid } from "react-icons/lia";
import { TbBed } from "react-icons/tb";
import { LuFence } from "react-icons/lu";
import { GiGate } from "react-icons/gi";
import { PiRoadHorizonDuotone } from "react-icons/pi";
import { MdOutlineLandscape } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import Link from "next/link";
import { MapPinned } from "lucide-react";

const PropertyImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setshowMap] = useState(false);
  const slider1 = useRef<Slider>(null);
  const params = useParams();
  const slug = String(params?.slug);
  const [requestSent, setRequestSent] = useState(false);
  const { data, isLoading, error } = useGetPropertyByID(slug);
  const { mutate: enquire, isPending } = useEnquireProperty();

  if (isLoading || !data) return <Loader />;
  if (error) return <p>Error loading property.</p>;
  const name = data?.data.properties[0].name;
  const price = data?.data.properties[0].price;
  const address = `${data?.data.properties[0].street_address}, ${data?.data.properties[0].state} ${data?.data.properties[0].country}`;
  const images = data?.data.properties[0].photos;
  const item = data?.data.properties[0];
  // Filter items by purpose

  const isRented =
    item?.purpose?.includes("rent") || item?.purpose?.includes("Rent") || false;
  const bungalows = item.details.filter(
    (item) => item.purpose.toLowerCase() == "bungalow"
  );
  const duplexes = item.details.filter(
    (item) => item.purpose.toLowerCase() == "duplex"
  );

  // Calculate totals
  const bungalowTotal = bungalows.reduce((sum, item) => sum + item.value, 0);
  const duplexTotal = duplexes.reduce((sum, item) => sum + item.value, 0);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    interest_option: Yup.string().required("Interest is required"),
    description: Yup.string().required("Message is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white/60 bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
        className="w-5 h-5 text-gray-800"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white/60 bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
        className="w-5 h-5 text-gray-800"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );

  const mainSettings = {
    arrows: images && images.length > 1, // Only show arrows if multiple images
    nextArrow: images && images.length > 1 ? <NextArrow /> : undefined,
    prevArrow: images && images.length > 1 ? <PrevArrow /> : undefined,
    infinite: images && images.length > 1, // Only enable infinite for multiple images
    slidesToShow: 1,
    swipeToSlide: images && images.length > 1, // Only allow swiping for multiple images
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };
  return (
    <div className="flex flex-col w-full px-4 md:px-10 pb-32">
      <div className="w-[100%] flex flex-col lg:flex-row justify-between md:items-center my-5">
        <div className="flex flex-col">
          <h1 className=" text-3xl md:text-6xl font-bold">
            {/* Treasure Parks and Gardens  */}
            {name}
          </h1>
          <p className="flex gap-2">
            <FaMapMarker />
            <span>{address}</span>
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-xl md:text-4xl font-bold">{formatPrice(price)}</p>
          <div className="flex gap-2">
            <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
              <FaHeart />
            </div>
            {isRented ? (
              <a href={data.data.properties[0].whatsapp_link}>
                <Button
                  label="Inquire on WhatsApp"
                  icon={<IoLogoWhatsapp size={18} />}
                  className="px-6 py-3 text-sm bg-adron-green"
                />
              </a>
            ) : (
              <Link
                href={`https://user.adronhomes.com/dashboard/properties/${item.id}`}
                className="bg-adron-green rounded-3xl h-10 flex items-center justify-center text-white flex-1 text-center text-sm"
              >
                SubScribe
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Property details */}

        {/* Main slider and thumbnails */}
        <div className="w-full md:w-[70%] mx-auto">
          {/* Main slider */}
          <Slider
            {...mainSettings}
            ref={slider1}
            className="rounded-2xl overflow-hidden"
          >
            {images?.map((img, i) => (
              <div key={i} className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src={img}
                  alt={`House ${i}`}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>

          {/* Thumbnails */}
          <div className="mt-5 grid grid-cols-5 gap-3">
            {images?.map((img, i) => (
              <div
                key={i}
                onClick={() => slider1.current?.slickGoTo(i)}
                className={`relative h-[75px] md:h-[150px] w-full rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                  currentIndex === i
                    ? "border-adron-green"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumb ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col my-5 gap-10">
            <div className="flex justify-between mb-5">
              <div className="flex flex-col">
                <p className="text-md text-black">Property Type</p>
                <p className="text-md text-gray-500">Land</p>
              </div>
              <div className="flex flex-col">
                <p className="text-md text-black">Size</p>
                <div className="flex items-center gap-1">
                  <Image src="/ruler.svg" width={14} height={14} alt="ruler" />

                  <span className="text-md text-gray-500">
                    {data?.data.properties[0].size} SqM
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {item?.category == "estate" ? (
                <div className="text-sm flex flex-wrap ml-5 divide-adron-gray-300 divide-x-1 py-1 mb-2 border-b-1 border-b-gray-300">
                  {item?.topography != null && (
                    <li className="flex items-center gap-2 px-2">
                      <MdOutlineLandscape />
                      <span>{item.topography}</span>
                    </li>
                  )}
                  {item?.road_access != null && (
                    <li className="flex items-center gap-2 px-2">
                      <PiRoadHorizonDuotone /> <span>{item?.road_access}</span>
                    </li>
                  )}
                  {item?.gated_estate != null && (
                    <li className="flex items-center gap-2 px-2">
                      <GiGate />{" "}
                      <span>
                        {item.gated_estate === "Yes" ? "Gated" : "No gates"}
                      </span>
                    </li>
                  )}
                  {item?.fencing != null && (
                    <li className="flex items-center gap-2 px-2">
                      <LuFence />{" "}
                      <span>
                        {item.fencing === "Yes" ? "Fenced" : "Not Fenced"}
                      </span>
                    </li>
                  )}
                </div>
              ) : (
                <div className="text-sm flex flex-wrap ml-5 divide-adron-gray-300 divide-x-1 py-1 mb-2 border-b-1 border-b-gray-300">
                  {item?.no_of_bedroom != null && (
                    <li className="flex items-center gap-2 px-2">
                      <TbBed />
                      <span>{item?.no_of_bedroom} Bedrooms</span>
                    </li>
                  )}
                  {item?.number_of_bathroom != null && (
                    <li className="flex items-center gap-2 px-2">
                      <LiaToiletSolid />
                      <span>{item?.number_of_bathroom} Bathroom</span>
                    </li>
                  )}
                  {item?.parking_space != null && (
                    <li className="flex items-center gap-2 px-2">
                      <IoCarSportOutline />
                      <span>{item?.parking_space} Vehicle Parking Space</span>
                    </li>
                  )}
                  {item?.year_built != null && (
                    <li className="flex items-center gap-2 px-2">
                      <IoConstructOutline />
                      <span>Built Year {formatDate(item?.year_built)}</span>
                    </li>
                  )}
                </div>
              )}

              <p className="text-md text-gray-500 ml-5">
                {data?.data.properties[0].overview}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-md">Description</h4>
              <p className="text-md text-gray-500 ml-5">
                {data?.data.properties[0].description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-md">Features</h4>
              <div className="text-md ml-5 grid grid-cols-1 md:grid-cols-3 text-gray-500 space-y-2">
                {data?.data.properties[0].features?.map((list) => (
                  <div key={list} className="flex gap-2 items-center">
                    <IoIosCheckmarkCircleOutline /> <div>{list}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-md">Address</h4>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="relative overflow-x-hidden">
                  <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <div>
                      <div className="p-3 flex justify-between gap-2 bg-white border-b border-gray-200">
                        <div className="font-medium text-gray-900 whitespace-nowrap truncate">
                          Country
                        </div>
                        <div className=" truncate ">
                          {data?.data.properties[0].country}
                        </div>
                      </div>

                      <div className="p-3 flex justify-between gap-2 bg-white border-b border-gray-200">
                        <div className=" font-medium text-gray-900 whitespace-nowrap ">
                          State
                        </div>
                        <div className="">{data?.data.properties[0].state}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-hidden">
                  <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <div>
                      <div className="p-3 flex justify-between gap-2 bg-white border-b border-gray-200">
                        <div className=" font-medium text-gray-900 whitespace-nowrap">
                          Nearby Landmark
                        </div>
                        <div className="">
                          {data?.data.properties[0].nearby_landmarks}
                        </div>
                      </div>

                      <div className="p-3 flex justify-between gap-2 bg-white border-b border-gray-200">
                        <div className=" font-medium text-gray-900 whitespace-nowrap">
                          Address
                        </div>
                        <div className=" line-clamp-1 truncate">
                          {data?.data.properties[0].street_address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-md">Property Document Type</h4>
              <div className="flex items-center gap-2 ml-5 text-gray-500">
                <GrDocumentUser />
                <span>{data.data.properties[0].title_document_type}</span>
              </div>
            </div>

            {/* New Additional details */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-md">Additional Details</h4>

              <div className="grid md:grid-cols-2 gap-2">
                {/* Split details in half for two tables */}
                {item?.details && item.details.length > 0 ? (
                  <>
                    <div className="bg-white font-extrabold p-3 border-b flex justify-between border-gray-200 min-w-0">
                      Bungalow
                    </div>
                    <div className="bg-white font-extrabold p-3 border-b flex justify-between border-gray-200 min-w-0">
                      Duplex
                    </div>
                    <div className="relative overflow-x-hidden">
                      <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                        {bungalows.length > 0 ? (
                          <>
                            {bungalows.map((detail) => (
                              <div
                                key={detail.id}
                                className="bg-white p-3 border-b flex justify-between border-gray-200 min-w-0"
                              >
                                <div className="">
                                  <div
                                    // scope="row"
                                    className="truncate font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    {detail.name.trim()}{" "}
                                    {detail.purpose && (
                                      <div className="text-xs text-gray-500">
                                        purpose: {detail.purpose}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <span className=" truncate ">
                                  {formatPrice(detail.value)}
                                </span>
                              </div>
                            ))}
                            <div className="bg-white p-3 border-b flex justify-between border-gray-200 min-w-0">
                              <div className="">
                                <div
                                  // scope="row"
                                  className="truncate font-bold text-gray-900 whitespace-nowrap"
                                >
                                  Total:{" "}
                                </div>
                              </div>
                              <span className=" truncate font-bold">
                                {formatPrice(bungalowTotal)}
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="">No Items Found...</div>
                        )}
                      </div>
                    </div>
                    <div className="relative overflow-x-hidden">
                      <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                        {duplexes.length > 0 ? (
                          <>
                            {duplexes.map((detail) => (
                              <div
                                key={detail.id}
                                className="bg-white p-3 border-b flex justify-between border-gray-200 min-w-0"
                              >
                                <div className="">
                                  <div
                                    // scope="row"
                                    className="truncate font-medium text-gray-900 whitespace-nowrap"
                                  >
                                    {detail.name.trim()}{" "}
                                    {detail.purpose && (
                                      <div className="text-xs text-gray-500">
                                        purpose: {detail.purpose}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <span className="">
                                  {formatPrice(detail.value)}
                                </span>
                              </div>
                            ))}
                            <div className="bg-white p-3 border-b flex justify-between border-gray-200 min-w-0">
                              <div className="">
                                <div
                                  // scope="row"
                                  className="truncate font-bold text-gray-900 whitespace-nowrap"
                                >
                                  Total:{" "}
                                </div>
                              </div>
                              <span className=" truncate font-bold">
                                {formatPrice(duplexTotal)}
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="">No Items found...</div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm col-span-2">
                    No additional details available.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interest Form  */}

        <div className="w-full md:w-[30%] space-y-3">
          <Formik
            initialValues={{
              name: "",
              emall: "",
              phone: "",
              interest_option: item?.type.name,
              property_id: item?.id,
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Request values:", values);
              if (values.description) {
                enquire(values, {
                  onSuccess() {
                    setRequestSent(true);
                  },
                  onError() {
                    setRequestSent(false);
                  },
                });
              } else {
                setRequestSent(false);
              }
            }}
          >
            <Form className="bg-white rounded-4xl p-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl md:text-3xl font-bold">
                  Interest Form
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  Fill the interest form or send us a message on whatsapp.
                </p>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="flex gap-1 items-center text-[10px] text-adron-gray-300"
                  >
                    Name
                  </label>
                  <InputField
                    className="py-3"
                    placeholder=""
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="flex gap-1 items-center text-[10px] text-adron-gray-300"
                  >
                    Email
                  </label>

                  <InputField
                    className="py-3"
                    placeholder=""
                    type="text"
                    name="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="flex gap-1 items-center text-[10px] text-adron-gray-300"
                  >
                    Phone No.
                  </label>

                  <InputField
                    className="py-3"
                    placeholder=""
                    type="text"
                    name="phone"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="flex gap-1 items-center text-[10px] text-adron-gray-300"
                  >
                    Message
                  </label>

                  <InputField
                    className="py-3 rounded-lg"
                    placeholder="I am interested in this property"
                    type="textarea"
                    name="description"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="location"
                    className="flex gap-1 items-center text-[10px] text-adron-gray-300"
                  >
                    Intrest
                  </label>

                  <SelectField
                    name="interest_option"
                    placeholder="Status"
                    options={["Land", "House"]}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xs gap-1 mt-8">
                {requestSent ? (
                  <Button
                    label="Request Sent!"
                    icon={<IoCheckmark />}
                    className="bg-adron-green flex-1 py-1"
                  />
                ) : (
                  <Button
                    label="Submit"
                    type="submit"
                    isLoading={isPending}
                    disabled={isPending || requestSent}
                    className="bg-adron-green flex-1 py-1"
                  />
                )}
                <a href={`tel:${item.contact_number}`} className="w-fit">
                  <Button
                    label="Call"
                    className="bg-black text-white flex-[0.5] py-1 px-5"
                  />
                </a>
                <a
                  href={data.data.properties[0].whatsapp_link}
                  className="w-fit"
                >
                  <Button
                    label="Chat on WhatsApp"
                    className="bg-green-500 px-3"
                    icon={<IoLogoWhatsapp size={18} />}
                  />
                </a>
              </div>
            </Form>
          </Formik>
          {data?.data.properties[0].video_link && (
            <div className="video-responsive w-full h-[250px] md:h-[150px] rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={data?.data.properties[0].video_link || ""}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {data?.data.properties[0].property_map && (
            <Button
              rightIcon={<MapPinned size={16} />}
              label="See Property on map"
              onClick={() => setshowMap(true)}
              className="bg-adron-green"
            />
          )}
        </div>
      </div>
      {showMap && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setshowMap(false)}
        >
          <div
            className="bg-white p-5 rounded-xl shadow-lg w-[98%] md:w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-3 text-gray-600 bg-white p-2 rounded-full hover:text-gray-900"
              onClick={() => setshowMap(false)}
              aria-label="Close"
            >
              <IoClose size={24} />
            </button>

            <div className="w-full md:w-[600px] h-[360px] rounded-lg overflow-hidden">
              {/* <StreetView lat={40.748817} lng={-73.985428} /> */}
              <iframe
                src={data?.data.properties[0].property_map || ""}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyImageSlider;
