"use client";

import { useState } from "react";
import { IconSearch, IconPlus } from "@tabler/icons-react";

interface Order {
  id: string;
  customer: string;
  date: string;
  items: number;
  total: number;
  status: "Pending" | "Completed" | "Cancelled";
}

const mockOrders: Order[] = [
  { id: "ORD-1042", customer: "Rohan Mehta", date: "18 Jul 2026", items: 3, total: 4599, status: "Completed" },
  { id: "ORD-1041", customer: "Priya Sharma", date: "17 Jul 2026", items: 1, total: 899, status: "Pending" },
  { id: "ORD-1040", customer: "Sneha Kulkarni", date: "16 Jul 2026", items: 5, total: 12400, status: "Completed" },
  { id: "ORD-1039", customer: "Arjun Nair", date: "15 Jul 2026", items: 2, total: 0, status: "Cancelled" },
];

const statusStyles: Record<Order["status"], string> = {
  Completed: "bg-green-500/10 text-green-400",
  Pending: "bg-yellow-500/10 text-yellow-400",
  Cancelled: "bg-red-500/10 text-red-400",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockOrders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Orders
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage all customer orders.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/25 transition hover:shadow-purple-600/40">
          <IconPlus size={18} />
          New Order
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 w-full max-w-sm backdrop-blur-xl">
        <IconSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by order ID or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-gray-400">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => (
              <tr
                key={order.id}
                className="border-t border-white/5 hover:bg-white/[0.03] transition"
              >
                <td className="px-6 py-4 font-medium text-purple-400">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4 text-gray-400">{order.date}</td>
                <td className="px-6 py-4 text-gray-400">{order.items}</td>
                <td className="px-6 py-4 font-medium">
                  {order.total > 0 ? `₹${order.total.toLocaleString()}` : "—"}
                </td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}