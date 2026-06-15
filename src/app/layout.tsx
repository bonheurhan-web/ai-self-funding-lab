import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devtoolkit.cc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Micro Dev Tools - Fast, Free Developer Utilities",
    template: "%s | Micro Dev Tools",
  },
  description:
    "Free browser-based tools for encoding, formatting, IDs, hashes, and timestamps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-lg font-bold text-slate-950">
              Micro Dev Tools
            </Link>
            <Link href="/tools/" className="text-sm font-medium text-slate-600 hover:text-blue-700">
              All tools
            </Link>
          </nav>
        </header>
        {children}
        <footer className="mt-auto border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-slate-500">
            Fast, private developer utilities. Your input stays in your browser.
          </div>
        </footer>
      </body>
    </html>
  );
}
