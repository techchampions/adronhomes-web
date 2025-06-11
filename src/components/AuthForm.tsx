"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import InputField from "./InputField";
import Button from "./Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

type AuthFormProps = {
  isLogin?: boolean;
};

const AuthForm = ({ isLogin = false }: AuthFormProps) => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    ...(isLogin
      ? {
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        }
      : {
          fullName: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          phone: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        }),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-3 flex flex-col">
        <h1 className="font-bold text-3xl text-black text-center py-6">
          {isLogin ? "Login" : "Register"}
        </h1>
        {!isLogin && <InputField name="fullName" placeholder="Full Name" />}
        <InputField
          name="email"
          type="email"
          placeholder="Email Address"
          className="input"
        />
        {!isLogin && (
          <InputField
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="input"
          />
        )}

        <InputField
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="input"
          rightIcon={
            showPassword ? (
              <FaEyeSlash
                className="text-gray-500 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="text-gray-500 w-5 h-5 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )
          }
        />
        <div className="flex items-center space-x-2 text-sm px-6">
          <input type="checkbox" id="remember" className="text-adron-green" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Button
          type="submit"
          label={isLogin ? "Log In" : "Sign Up"}
          className="bg-adron-green text-white w-full py-2 rounded-full"
        />

        <p className="text-sm text-center">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-adron-green font-medium">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="text-adron-green font-medium">
                Sign In
              </Link>
            </>
          )}
        </p>
      </Form>
    </Formik>
  );
};

export default AuthForm;
