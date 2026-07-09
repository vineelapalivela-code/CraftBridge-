"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-black">

        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl max-w-xl w-full text-center">

          <h1 className="text-4xl font-bold text-orange-600">
            My Profile 👋
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300">
            This is a protected page.
            Only logged in users can access it.
          </p>

          <Link
            href="/dashboard"
            className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl"
          >
            Back to Dashboard
          </Link>

        </div>

      </main>
    </ProtectedRoute>
  );
}