import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { earthpant } from "@/content/content";

export const metadata: Metadata = { title: "Tura EarthPant" };

export default function Page() {
  return (
    <PageShell title="Tura EarthPant" intro="A plant-based disposable menstrual pant, designed from the words of 150 Nigerian women. This page grows as the product does.">
      <h2 className="text-2xl">What we can say today</h2>
      <ul className="space-y-2">
        {earthpant.confirmed.map((c) => <li key={c} className="border-l-4 border-gold pl-4">{c}</li>)}
      </ul>
      <h2 className="pt-4 text-2xl">Still being confirmed</h2>
      <ul className="list-disc pl-5">{earthpant.stillConfirming.map((c) => <li key={c}>{c}</li>)}</ul>
      <p>{earthpant.stillConfirmingNote}</p>
      <Link href="/first-1000" className="inline-block rounded-full bg-gable px-6 py-3 font-bold text-cream">Join the First 1000</Link>
    </PageShell>
  );
}
