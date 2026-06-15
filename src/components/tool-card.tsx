import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.id}/`} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-700">{tool.category}</div>
      <h2 className="text-lg font-bold text-slate-950 group-hover:text-blue-700">{tool.name}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
    </Link>
  );
}
