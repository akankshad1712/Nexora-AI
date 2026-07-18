"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          Nexora AI
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-purple-500 px-4 py-2 text-purple-400 hover:bg-purple-500 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}