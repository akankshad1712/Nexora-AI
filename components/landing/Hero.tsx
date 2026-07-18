export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-6xl font-extrabold">
        One AI.
        <span className="text-purple-500"> Every Business.</span>
      </h1>

      <p className="mt-6 max-w-3xl text-xl text-gray-400">
        Automate sales, inventory, customers, invoices and business operations
        with one intelligent AI platform.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700">
          Start Free
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-4 hover:border-purple-500">
          Live Demo
        </button>
      </div>
    </section>
  );
}