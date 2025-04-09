"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "bg-transparent border border-gray-400 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        { "opacity-50 cursor-not-allowed": disabled || loading },
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
