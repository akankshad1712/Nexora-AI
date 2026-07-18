"use client";

import { useState } from "react";
import { IconSearch, IconPlus } from "@tabler/icons-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

const mockProducts: Product[] = [
  { id: "P-001", name: "Wireless Mouse", category: "Electronics", price: 799, stock: 42, status: "In Stock" },
  { id: "P-002", name: "Bluetooth Speaker", category: "Electronics", price: 1999, stock: 6, status: "Low Stock" },
  { id: "P-003", name: "Cotton T-Shirt", category: "Apparel", price: 499, stock: 0, status: "Out of Stock" },
  { id: "P-004", name: "Yoga Mat", category: "Fitness", price: 1299, stock: 25, status: "In Stock" },
];

const statusStyles: Record<Product["status"], string> = {
  "In Stock": "bg-green-500/10 text-green-400",
  "Low Stock": "bg-yellow-500/10 text-yellow-400",
  "Out of Stock": "bg-red-500/10 text-red-400",
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your product catalog and inventory levels.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/25 transition hover:shadow-purple-600/40">
          <IconPlus size={18} />
          Add Product
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 w-full max-w-sm backdrop-blur-xl">
        <IconSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-gray-400">
            <tr>
              <th className="px-6 py-4">Product ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr
                key={product.id}
                className="border-t border-white/5 hover:bg-white/[0.03] transition"
              >
                <td className="px-6 py-4 font-medium text-purple-400">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4 text-gray-400">{product.category}</td>
                <td className="px-6 py-4 font-medium">₹{product.price.toLocaleString()}</td>
                <td className="px-6 py-4 text-gray-400">{product.stock}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[product.status]}`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}