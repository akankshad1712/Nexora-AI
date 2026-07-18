"use client";

import { useState } from "react";
import { IconSearch, IconAlertTriangle } from "@tabler/icons-react";

interface InventoryItem {
  id: string;
  name: string;
  warehouse: string;
  quantity: number;
  reorderLevel: number;
}

const mockInventory: InventoryItem[] = [
  { id: "INV-001", name: "Wireless Mouse", warehouse: "Mumbai Central", quantity: 42, reorderLevel: 20 },
  { id: "INV-002", name: "Bluetooth Speaker", warehouse: "Mumbai Central", quantity: 6, reorderLevel: 15 },
  { id: "INV-003", name: "Cotton T-Shirt", warehouse: "Pune Depot", quantity: 0, reorderLevel: 30 },
  { id: "INV-004", name: "Yoga Mat", warehouse: "Pune Depot", quantity: 25, reorderLevel: 10 },
];

export default function InventoryPage() {
  const [search, setSearch] = useState("");

  const filtered = mockInventory.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Inventory
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Track stock levels across all warehouses.
      </p>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 w-full max-w-sm backdrop-blur-xl">
        <IconSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-gray-400">
            <tr>
              <th className="px-6 py-4">Item ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Warehouse</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Reorder Level</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => {
              const low = item.quantity <= item.reorderLevel;
              return (
                <tr
                  key={item.id}
                  className="border-t border-white/5 hover:bg-white/[0.03] transition"
                >
                  <td className="px-6 py-4 font-medium text-purple-400">{item.id}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4 text-gray-400">{item.warehouse}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4 text-gray-400">{item.reorderLevel}</td>
                  <td className="px-6 py-4">
                    {low ? (
                      <span className="flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                        <IconAlertTriangle size={12} /> Reorder Needed
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        Healthy
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  No inventory items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}