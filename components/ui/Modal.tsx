"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[420px]">

        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          {title}
        </h2>

        {children}

        <button
          onClick={onClose}
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-xl transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}