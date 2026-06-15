import type { Metadata } from "next";
import { ToolCard } from "@/components/tool-card";
import { categories, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Developer Tools",
  description: "Browse free developer tools for IDs, encoding, JSON, timestamps, and hashing.",
  alternates: { canonical: "/tools/" },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14">
      <h1 className="text-4xl font-black tracking-tight text-slate-950">All developer tools</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">Simple utilities that run locally in your browser.</p>
      {categories.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.filter((tool) => tool.category === category).map((tool) => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
