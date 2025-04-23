"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import InputField from "@/components/InputField";
import { FaHeart, FaMapMarker } from "react-icons/fa";
import SelectField from "@/components/SelectField";
import Button from "@/components/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { useParams, useSearchParams } from "next/navigation";
import { useGetPropertyByID } from "@/data/hooks";
import Loader from "@/components/Loader";

const PropertyImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider1 = useRef<Slider>(null);
  const params = useParams();
  const id = params?.id;

  const { data, isLoading, error } = useGetPropertyByID(id);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading property.</p>;
  const name = data?.data.properties[0].name;
  const price = data?.data.properties[0].price;
  const address = `${data?.data.properties[0].street_address}, ${data?.data.properties[0].lga}, ${data?.data.properties[0].state} ${data?.data.properties[0].country}`;
  const images = data?.data.properties[0].photos;

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(Number(price));

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
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: true,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-10 pb-32">
      <div className="w-[100%] flex flex-col md:flex-row justify-between md:items-center my-5">
        <div className="flex flex-col">
          <h1 className=" text-3xl md:text-6xl font-bold">
            {/* Treasure Parks and Gardens  */}
            {name}
          </h1>
          <p className="flex gap-2">
            <FaMapMarker />
            {/* <span>34, Shimawa, Ogun State, Nigeria</span> */}
            <span>{address}</span>
          </p>
        </div>
        <p className="text-xl md:text-4xl font-bold">
          {/* ₦56,000,000 */}
          {formattedPrice}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Property details */}

        {/* Main slider and thumbnails */}
        <div className="w-full md:w-[70%] mx-auto">
          {/* Main slider */}
          <Slider
            {...mainSettings}
            ref={slider1}
            className="rounded-2xl overflow-hidden"
          >
            {images.map((img, i) => (
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
          <div className="mt-5 grid grid-cols-4 gap-3">
            {images.map((img, i) => (
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
                <p className="text-md text-gray-500">Property Type</p>
                <p className="text-md text-black">Land</p>
              </div>
              <FaHeart />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-md">Overview</h4>
              <p className="text-xs text-gray-500">
                {data?.data.properties[0].overview}
                {/* Discover your dream home in 34, Shimawa, Ogun State, Nigeria!
                This stunning 4-bedroom, 3-bathroom modern home offers a perfect
                blend of comfort, elegance, and convenience. With breathtaking
                city views and a spacious backyard with a private pool, this
                property is designed to meet all your lifestyle needs. */}
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="font-bold text-md">Description</h4>
              <p className="text-xs text-gray-500">
                {data?.data.properties[0].description}
                {/* Step inside this beautifully designed home and experience an
                open-concept living space filled with natural light. The gourmet
                kitchen features high-end appliances, granite countertops and
                stainless-steel appliances, perfect for entertaining guests. The
                5 bedrooms offer ample space and walk-in closets, while the 3
                bathrooms boast luxurious spa-like finishes. Whether you're
                enjoying a quiet evening on the [outdoor feature, or exploring
                the vibrant local community, this home provides the ideal
                setting for modern living.{" "} */}
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-md">Features</h4>
              <ul className="text-xs list-disc ml-5 text-gray-500">
                {data?.data.properties[0].features?.map((list) => (
                  <li key={list}>{list}</li>
                ))}
                {/* <li>Spacious open-concept living area</li>
                <li>State-of-the-art kitchen with granite countertops</li>
                <li>Master suite with walk-in closet and en-suite bathroom</li>
                <li>Large backyard with a deck and fire pit</li>
                <li>Two-car garage and ample storage space</li> */}
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-md">Address</h4>
              <p className="text-xs text-gray-500">
                1234 Maple Street, Los Angeles, CA 90012{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Interest Form  */}
        <div className="w-full md:w-[30%]">
          <Formik
            initialValues={{
              name: "",
              emall: "",
              phone: "",
              interest: "",
              message: "",
            }}
            onSubmit={(values) => {
              console.log("Filter values:", values);
            }}
          >
            <Form className="bg-white rounded-4xl p-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl md:text-3xl font-bold">
                  Interest Form
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  Filled the interest form or send us a message on whatsapp.
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
                    name="message"
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
                    name="interest"
                    placeholder="Status"
                    options={["For Sale", "For Rent"]}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xs gap-1">
                <Button
                  label="Submit"
                  type="submit"
                  className="bg-adron-green mt-8 flex-1 py-1"
                />
                <Button
                  label="Call"
                  className="bg-black text-white flex-[0.5] mt-8 py-1"
                />
                <Button
                  label="WhatSapp"
                  icon={<IoLogoWhatsapp className="text-adron-green" />}
                  className="bg-green-200 text-[10px] !text-adron-green flex-1 mt-8 py-1"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PropertyImageSlider;
