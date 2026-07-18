import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-bold">
          Ready to run your business smarter?
        </h2>

        <p className="mt-6 text-xl text-gray-400">
          Join thousands of businesses automating their daily work with Nexora AI.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700 transition"
          >
            Start Free
          </Link>

          <Link
            href="/pricing"
            className="rounded-xl border border-gray-700 px-8 py-4 hover:border-purple-500 transition"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}