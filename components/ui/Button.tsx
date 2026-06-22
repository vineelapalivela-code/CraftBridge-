import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
    const variantClasses = {
  primary:
    "bg-orange-600 text-white hover:bg-orange-700 shadow-md",

  secondary:
    "bg-stone-700 text-white hover:bg-stone-800 shadow-md",

  outline:
    "border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg w-full",
};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
   className={`
    rounded-xl
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
${variantClasses[variant]}
${sizeClasses[size]}
${disabled ? "opacity-50 cursor-not-allowed" : ""}
`}
    >
      {children}
    </button>
  );
}