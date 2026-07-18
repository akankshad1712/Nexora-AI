import {
  IconChartBar,
  IconUsers,
  IconShoppingCart,
  IconCurrencyRupee,
} from "@tabler/icons-react";

export default function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Business Dashboard
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything you need to grow your business with AI.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
            <IconCurrencyRupee size={36} className="text-green-500" />
            <h3 className="mt-4 text-lg text-gray-400">Revenue</h3>
            <p className="text-3xl font-bold">₹12,45,000</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
            <IconShoppingCart size={36} className="text-blue-500" />
            <h3 className="mt-4 text-lg text-gray-400">Orders</h3>
            <p className="text-3xl font-bold">3,248</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
            <IconUsers size={36} className="text-purple-500" />
            <h3 className="mt-4 text-lg text-gray-400">Customers</h3>
            <p className="text-3xl font-bold">8,921</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 border border-white/10">
            <IconChartBar size={36} className="text-orange-500" />
            <h3 className="mt-4 text-lg text-gray-400">Growth</h3>
            <p className="text-3xl font-bold">+32%</p>
          </div>

        </div>

      </div>
    </section>
  );
}