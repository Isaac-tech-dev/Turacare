import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { stock } from "@/content/images";
import { problem } from "@/content/content";

export const metadata: Metadata = { title: "The problem" };

export default function Page() {
  return (
    <PageShell image={stock.baobabSunset} imagePosition="50% 60%" title={problem.title} intro={problem.intro}>
      <blockquote className="border-l-4 border-gold pl-5 text-xl font-bold">{problem.definition}</blockquote>
      <div className="space-y-8 pt-4">
        {problem.stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl font-bold">{s.value}</p>
            <p className="mt-1">{s.text}</p>
            <p className="mt-1 text-xs opacity-75">Source: {s.source}</p>
          </div>
        ))}
      </div>
      <p>Our research programme exists to measure this gap across Africa. <Link href="/research" className="font-bold underline">See our research</Link>.</p>
    </PageShell>
  );
}
