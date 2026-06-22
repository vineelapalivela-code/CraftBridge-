"use client";

import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          color: "#444",
          borderRadius: "12px",
          border: "1px solid #fed7aa",
          padding: "14px 18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        },
        success: {
          style: {
            borderLeft: "5px solid #ea580c",
          },
        },
      }}
    />
  );
}