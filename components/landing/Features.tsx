import {
  IconRobot,
  IconChartBar,
  IconUsers,
  IconPackage,
  IconReceipt,
  IconBolt,
} from "@tabler/icons-react";

const features = [
  {
    title: "AI Business Assistant",
    description: "Manage your business with one intelligent AI.",
    icon: IconRobot,
  },
  {
    title: "Sales Analytics",
    description: "Real-time charts and business insights.",
    icon: IconChartBar,
  },
  {
    title: "Customer Management",
    description: "Store and manage all customers in one place.",
    icon: IconUsers,
  },
  {
    title: "Inventory",
    description: "Track stock with AI-powered predictions.",
    icon: IconPackage,
  },
  {
    title: "Smart Invoices",
    description: "Create invoices in seconds.",
    icon: IconReceipt,
  },
  {
    title: "Automation",
    description: "Automate repetitive business tasks.",
    icon: IconBolt,
  },
];

export default function Features() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold">
          Powerful Features
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Everything your business needs in one AI platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 transition hover:border-purple-500"
            >
              <feature.icon
                size={40}
                className="mb-4 text-purple-500"
              />

              <h3 className="mb-2 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}