"use client";

import React from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">

     <label className="font-semibold text-inherit">
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
    w-full
    rounded-xl
    border
    border-stone-300
    bg-stone-50
    text-stone-900
    px-4
    py-3
    outline-none
    transition-all
    duration-300
    focus:border-orange-500
    focus:ring-2
    focus:ring-orange-200
    "
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

    </div>
  );
}