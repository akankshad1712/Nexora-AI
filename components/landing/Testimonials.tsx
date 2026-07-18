"use client";

import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";

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
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-xs font-medium text-purple-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Loved by Business Owners
          </h2>

          <p className="mt-4 text-gray-500">
            See what our early users are saying.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-purple-500/30 hover:bg-white/[0.05]"
            >
              <IconQuote
                size={36}
                className="text-purple-500/20 transition group-hover:text-purple-500/40"
              />

              <p className="mt-4 text-gray-300 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-sm font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}