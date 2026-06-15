import Link from "next/link";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/tools";

export default function Home() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-700">Free browser-based utilities</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            Small developer tools that get out of your way
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Generate IDs, encode data, format JSON, convert timestamps, and hash text. Fast, private, and free.
          </p>
          <Link href="/tools/" className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Browse all tools
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold text-slate-950">Popular developer tools</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 6).map((tool) => <ToolCard key={tool.id} tool={tool} />)}
        </div>
      </section>
    </main>
  );
}
