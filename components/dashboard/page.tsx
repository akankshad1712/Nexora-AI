import {
  IconCurrencyRupee,
  IconShoppingCart,
  IconUsers,
  IconTrendingUp,
} from "@tabler/icons-react";

const cards = [
  { label: "Revenue", value: "₹1,24,500", icon: IconCurrencyRupee, color: "text-green-500" },
  { label: "Orders", value: "342", icon: IconShoppingCart, color: "text-blue-500" },
  { label: "Customers", value: "1,208", icon: IconUsers, color: "text-purple-500" },
  { label: "Growth", value: "+18%", icon: IconTrendingUp, color: "text-orange-500" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome back, Akanksha 👋</h1>
      <p className="mt-2 text-gray-400">Here's what's happening with your business today.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <card.icon size={32} className={card.color} />
            <h3 className="mt-4 text-sm text-gray-400">{card.label}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <p className="mt-4 text-gray-400 text-sm">
          No recent activity yet — this will populate once your backend is connected.
        </p>
      </div>
    </div>
  );
}