"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import InputField from "@/components/InputField";
import { FaCheckCircle, FaMailBulk, FaPhone, FaUser } from "react-icons/fa";
import SelectField from "@/components/SelectField";
import Button from "@/components/Button";

const images = [
  "/images/house-pty.png",
  "/images/house-pty.png",
  "/images/house-pty.png",
  "/images/house-pty.png",
];

const PropertyImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider1 = useRef<Slider>(null);

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
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
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
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
    <div className="flex justify-between gap-10 px-10">
      <div className="w-full md:w-[70%] mx-auto">
        {/* Main slider */}
        <Slider
          {...mainSettings}
          ref={slider1}
          className="rounded-2xl overflow-hidden"
        >
          {images.map((img, i) => (
            <div key={i} className="relative h-[400px] w-full">
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
              className={`relative h-[80px] w-full rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                currentIndex === i ? "border-adron-green" : "border-transparent"
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
      </div>
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
              <h4 className="text-2xl md:text-3xl font-bold">Interest Form</h4>
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
            <div className="flex justify-between gap-5">
              <Button
                label="Submit"
                type="submit"
                className="bg-adron-green mt-8 py-4"
              />
              <Button label="Call" className="bg-black text-white mt-8 py-4" />
              <Button label="WhatSapp" className="bg-green-200 mt-8 py-4" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PropertyImageSlider;
