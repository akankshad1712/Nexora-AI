const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "100 Customers",
      "AI Chat",
      "Inventory",
      "Invoices",
    ],
  },
  {
    name: "Professional",
    price: "₹999/mo",
    features: [
      "Unlimited Customers",
      "Advanced AI",
      "Analytics",
      "Reports",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Everything",
      "Dedicated AI",
      "Custom Integrations",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Pricing
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Simple and transparent pricing.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? "border-purple-500 bg-purple-900/20"
                  : "border-white/10 bg-slate-900"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 rounded-full bg-purple-600 px-3 py-1 text-sm inline-block">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {plan.price}
              </p>

              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-purple-600 py-3 font-semibold hover:bg-purple-700">
                Get Started
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}