// components/FilterBar.tsx
"use client";

import { Formik, Form } from "formik";
import InputField from "./InputField";
import SelectField from "./SelectField";
import {
  FaBed,
  FaCheckCircle,
  FaFilter,
  FaHome,
  FaLocationArrow,
} from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";

export default function FilterBar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Formik
      initialValues={{
        location: "",
        propertyType: "",
        bedrooms: "",
        status: "",
        min: "",
        max: "",
      }}
      onSubmit={(values) => {
        console.log("Filter values:", values);
      }}
    >
      <>
        <Form className="hidden md:block">
          <div className="bg-white p-4 rounded-2xl mb-8 md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex gap-2 items-center">
                <FaLocationArrow /> Location
              </label>
              <InputField
                className="py-4"
                placeholder="What are you looking?"
                type="text"
                name="location"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex gap-2 items-center">
                <FaHome /> Property Type
              </label>

              <SelectField
                name="propertyType"
                placeholder="Property Type"
                options={["Bungalow", "Duplex", "Flat", "Land"]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex gap-2 items-center">
                <FaBed /> Number of Bedrooms
              </label>

              <SelectField
                name="bedrooms"
                placeholder="Bedrooms"
                options={["1", "2", "3", "4", "5+"]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex gap-2 items-center">
                <FaCheckCircle /> Avialability status
              </label>

              <SelectField
                name="status"
                placeholder="Status"
                options={["For Sale", "For Rent"]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="flex gap-2 items-center">
                <IoPricetag /> Price
              </label>
              <div className="flex justify-between gap-2">
                <InputField
                  className="py-4"
                  placeholder="Min"
                  type="number"
                  name="min"
                />
                <InputField
                  className="py-4"
                  placeholder="Max"
                  type="number"
                  name="max"
                />
              </div>
            </div>
          </div>
        </Form>
        <div className="flex w-full justify-end mb-4">
          <div
            className="flex md:hidden bg-white rounded-full w-fit items-center px-5 py-1 gap-2"
            onClick={() => setShowModal(true)}
          >
            Sort
            <FaFilter />
          </div>
        </div>

        <Form className="block md:hidden">
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h1>modal</h1>
          </Modal>
        </Form>
      </>
    </Formik>
  );
}
