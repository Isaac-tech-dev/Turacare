import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WaitlistForm } from "@/components/WaitlistForm";
import { firstThousand } from "@/content/content";

export const metadata: Metadata = { title: "Join the First 1000" };

export default function Page() {
  return (
    <PageShell title="Join the First 1000" intro={firstThousand.intro}>
      <h2 className="text-2xl">What members get</h2>
      <ul className="space-y-2">{firstThousand.benefits.map((b) => <li key={b} className="border-l-4 border-gold pl-4">{b}</li>)}</ul>
      <h2 className="pt-2 text-2xl">What happens after you sign up</h2>
      <ul className="list-disc pl-5">{firstThousand.after.map((a) => <li key={a}>{a}</li>)}</ul>
      <div className="rounded-3xl bg-gable p-7 text-cream"><WaitlistForm /></div>
    </PageShell>
  );
}
