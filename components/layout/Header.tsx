"use client";

import { IconBell, IconUserCircle } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-slate-950 px-6">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-72 rounded-lg border border-white/10 bg-slate-900 px-4 py-2 text-sm text-white outline-none focus:border-purple-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <IconBell size={22} className="text-gray-400 hover:text-white cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer">
          <IconUserCircle size={28} className="text-purple-500" />
          <span className="text-sm text-white">Akanksha</span>
        </div>
      </div>
    </header>
  );
}