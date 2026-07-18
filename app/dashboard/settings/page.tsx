"use client";

import { useState } from "react";
import { IconUser, IconBell, IconLock, IconCreditCard } from "@tabler/icons-react";

export default function SettingsPage() {
  const [name, setName] = useState("Akanksha Deshmukh");
  const [email, setEmail] = useState("akanksha@example.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Settings
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Manage your account and business preferences.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Sidebar nav within settings */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl h-fit">
          <button className="flex w-full items-center gap-3 rounded-xl bg-purple-600/10 px-4 py-3 text-sm font-medium text-purple-400">
            <IconUser size={18} /> Profile
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/[0.03]">
            <IconBell size={18} /> Notifications
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/[0.03]">
            <IconLock size={18} /> Security
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/[0.03]">
            <IconCreditCard size={18} /> Billing
          </button>
        </div>

        {/* Profile form */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Profile Information</h2>
          <p className="mt-1 text-sm text-gray-500">
            Update your personal details.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-purple-500/60"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-purple-500/60"
              />
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div>
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive updates about orders and revenue.</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`h-6 w-11 rounded-full transition ${
                  notifications ? "bg-purple-600" : "bg-white/10"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition ${
                    notifications ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-600/25 transition hover:shadow-purple-600/40">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}