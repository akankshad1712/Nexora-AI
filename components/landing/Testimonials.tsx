const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Owner, Mehta Electronics",
    quote:
      "Nexora AI cut my invoicing time from an hour to five minutes. The AI chat handles most of my daily questions now.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Sharma Boutique",
    quote:
      "I finally have one place to see my sales, stock, and customers instead of juggling five different apps.",
  },
  {
    name: "Arjun Nair",
    role: "Manager, Nair Restaurant Group",
    quote:
      "The AI restock predictions alone have saved us from running out of key ingredients multiple times.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Loved by Business Owners
        </h2>

        <p className="mt-4 text-center text-gray-400">
          See what our early users are saying.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8"
            >
              <p className="text-gray-300 italic">"{t.quote}"</p>

              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}