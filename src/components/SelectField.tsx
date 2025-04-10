// components/SelectField.tsx
"use client";

import { useField } from "formik";
import React from "react";

interface SelectFieldProps {
  name: string;
  options: string[];
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  placeholder,
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="w-full bg-adron-body rounded-full px-4">
      <select
        {...field}
        className={`w-full py-4 rounded ${
          hasError ? "border border-red-500" : ""
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt, idx) => (
          <option value={opt} key={idx}>
            {opt}
          </option>
        ))}
      </select>
      {hasError && <p className="text-red-500 text-xs mt-1">{meta.error}</p>}
    </div>
  );
};

export default SelectField;
