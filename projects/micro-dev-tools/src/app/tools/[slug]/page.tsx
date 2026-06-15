import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolRunner } from "@/components/tool-runner";
import { toolById, tools, type ToolId } from "@/lib/tools";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devtoolkit.cc";

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = toolById[slug as ToolId];
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.id}/` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolById[slug as ToolId];
  if (!tool) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: `${siteUrl}/tools/${tool.id}/`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/tools/" className="hover:text-blue-700">Tools</Link> / {tool.category}
      </nav>
      <h1 className="text-4xl font-black tracking-tight text-slate-950">{tool.name}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{tool.description}</p>
      <div className="mt-8"><ToolRunner tool={tool} /></div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">How to use this tool</h2>
        <p className="mt-3 leading-7 text-slate-600">{tool.instructions}</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Examples</h2>
        <ul className="mt-4 grid gap-3">
          {tool.examples.map((example) => <li key={example} className="rounded-lg border border-slate-200 bg-white p-4 font-mono text-sm">{example}</li>)}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {tool.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
              <summary className="font-semibold">{item.question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Related tools</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {tool.related.map((id) => (
            <Link key={id} href={`/tools/${id}/`} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100">
              {toolById[id].name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
