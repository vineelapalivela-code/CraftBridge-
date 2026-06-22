"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-96">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email === "" ? "Email is required" : ""}
        />
      </div>
    </main>
  );
}