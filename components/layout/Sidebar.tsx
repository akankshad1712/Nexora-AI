"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconRobot,
  IconUsers,
  IconPackage,
  IconShoppingCart,
  IconReceipt,
  IconChartBar,
  IconSettings,
} from "@tabler/icons-react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard },
  { name: "AI Chat", href: "/dashboard/ai-chat", icon: IconRobot },
  { name: "Customers", href: "/dashboard/customers", icon: IconUsers },
  { name: "Products", href: "/dashboard/products", icon: IconPackage },
  { name: "Orders", href: "/dashboard/orders", icon: IconShoppingCart },
  { name: "Invoices", href: "/dashboard/invoices", icon: IconReceipt },
  { name: "Analytics", href: "/dashboard/analytics", icon: IconChartBar },
  { name: "Settings", href: "/dashboard/settings", icon: IconSettings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r border-white/10 bg-black">
      <div className="px-6 py-6">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          Nexora AI
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <link.icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-6 py-4 text-xs text-gray-500">
        © 2026 Nexora AI
      </div>
    </aside>
  );
}