export default function Stats() {
  const stats = [
    {
      value: "50K+",
      label: "Businesses"
    },
    {
      value: "2M+",
      label: "Invoices Generated"
    },
    {
      value: "₹500Cr+",
      label: "Business Revenue Managed"
    },
    {
      value: "99.99%",
      label: "Uptime"
    },
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-purple-500">
                {item.value}
              </h2>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}