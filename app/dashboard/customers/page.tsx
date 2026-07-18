"use client";

import { useState } from "react";
import { IconSearch, IconPlus } from "@tabler/icons-react";
import { mockCustomers } from "@/lib/mockCustomers";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockCustomers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Customers</h1>
          <p className="mt-1 text-gray-400">Manage all your customers in one place.</p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700 transition">
          <IconPlus size={18} />
          Add Customer
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-4 py-2 w-full max-w-sm">
        <IconSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-gray-400">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Orders</th>
              <th className="px-6 py-4">Total Spent</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((customer) => (
              <tr
                key={customer.id}
                className="border-t border-white/10 hover:bg-slate-900/50 transition"
              >
                <td className="px-6 py-4 font-medium">{customer.name}</td>
                <td className="px-6 py-4 text-gray-400">{customer.email}</td>
                <td className="px-6 py-4 text-gray-400">{customer.phone}</td>
                <td className="px-6 py-4">{customer.totalOrders}</td>
                <td className="px-6 py-4">₹{customer.totalSpent.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      customer.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-gray-500/10 text-gray-400"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}