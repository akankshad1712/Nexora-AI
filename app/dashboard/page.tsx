"use client";

import { motion } from "framer-motion";
import {
  IconCurrencyRupee,
  IconShoppingCart,
  IconUsers,
  IconTrendingUp,
  IconArrowUpRight,
  IconArrowDownRight,
} from "@tabler/icons-react";

const cards = [
  {
    label: "Revenue",
    value: "₹1,24,500",
    change: "+12.4%",
    up: true,
    icon: IconCurrencyRupee,
    glow: "from-green-500/20 to-emerald-500/5",
    iconColor: "text-green-400",
  },
  {
    label: "Orders",
    value: "342",
    change: "+8.1%",
    up: true,
    icon: IconShoppingCart,
    glow: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-400",
  },
  {
    label: "Customers",
    value: "1,208",
    change: "+3.2%",
    up: true,
    icon: IconUsers,
    glow: "from-purple-500/20 to-fuchsia-500/5",
    iconColor: "text-purple-400",
  },
  {
    label: "Growth",
    value: "18%",
    change: "-1.4%",
    up: false,
    icon: IconTrendingUp,
    glow: "from-orange-500/20 to-yellow-500/5",
    iconColor: "text-orange-400",
  },
];

const activity = [
  { text: "New order placed by Rohan Mehta", time: "2 minutes ago" },
  { text: "Invoice #1042 marked as paid", time: "18 minutes ago" },
  { text: "New customer Sneha Kulkarni signed up", time: "1 hour ago" },
  { text: "AI generated 3 marketing captions", time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Welcome back, Akanksha
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Here&apos;s what&apos;s happening with your business today.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${card.glow} bg-slate-900/60 p-6 backdrop-blur-xl transition hover:border-white/20`}
          >
            <div className="flex items-start justify-between">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${card.iconColor}`}>
                <card.icon size={22} />
              </div>

              <span
                className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                  card.up
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {card.up ? <IconArrowUpRight size={14} /> : <IconArrowDownRight size={14} />}
                {card.change}
              </span>
            </div>

            <h3 className="mt-5 text-sm text-gray-400">{card.label}</h3>
            <p className="mt-1 text-3xl font-bold tracking-tight">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="text-xs text-purple-400 hover:text-purple-300">View all</button>
          </div>

          <div className="mt-5 space-y-1">
            {activity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
                <span className="text-xs text-gray-600">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-blue-600/5 p-6 backdrop-blur-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-bold shadow-lg shadow-purple-500/30">
            AI
          </div>
          <h3 className="mt-4 text-lg font-semibold">Business Insight</h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Your revenue grew 12.4% this week, driven mostly by repeat customers. Consider running a loyalty offer to keep the momentum going.
          </p>
          <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-2.5 text-sm font-semibold shadow-lg shadow-purple-600/25 transition hover:shadow-purple-600/40">
            Ask AI Assistant
          </button>
        </div>
      </div>
    </div>
  );
}