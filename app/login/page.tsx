"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // We'll connect this to the backend later
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-purple-500">Nexora AI</h1>
        <p className="mt-2 text-gray-400">Welcome back. Log in to continue.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 outline-none focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 outline-none focus:border-purple-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end text-sm">
            <Link href="/forgot-password" className="text-purple-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 font-semibold hover:bg-purple-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}