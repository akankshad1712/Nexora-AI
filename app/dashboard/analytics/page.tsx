"use client";

import {
  IconTrendingUp,
  IconTrendingDown,
  IconChartBar,
} from "@tabler/icons-react";

const metrics = [
  { label: "Total Revenue", value: "₹8,42,000", change: "+22.4%", up: true },
  { label: "Avg. Order Value", value: "₹1,240", change: "+4.1%", up: true },
  { label: "Conversion Rate", value: "3.8%", change: "-0.6%", up: false },
  { label: "Repeat Customers", value: "64%", change: "+9.2%", up: true },
];

const topProducts = [
  { name: "Wireless Mouse", sales: 342, revenue: 273258 },
  { name: "Bluetooth Speaker", sales: 128, revenue: 255872 },
  { name: "Yoga Mat", sales: 96, revenue: 124704 },
  { name: "Cotton T-Shirt", sales: 210, revenue: 104790 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Deep insights into your business performance.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <p className="text-sm text-gray-400">{m.label}</p>
            <p className="mt-2 text-2xl font-bold">{m.value}</p>
            <span
              className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${
                m.up ? "text-green-400" : "text-red-400"
              }`}
            >
              {m.up ? <IconTrendingUp size={14} /> : <IconTrendingDown size={14} />}
              {m.change}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Chart placeholder */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Revenue Trend</h2>
          <div className="mt-6 flex h-64 items-center justify-center rounded-xl border border-dashed border-white/10 text-gray-600">
            <div className="flex flex-col items-center gap-2">
              <IconChartBar size={32} />
              <p className="text-sm">Chart will render here once connected to real data</p>
            </div>
          </div>
        </div>

        {/* Top products */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <h2 className="text-lg font-semibold">Top Products</h2>
          <div className="mt-5 space-y-4">
            {topProducts.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.sales} sold</p>
                </div>
                <p className="text-sm font-semibold">₹{p.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}