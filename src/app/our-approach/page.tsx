import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { approach, pillars } from "@/content/content";

export const metadata: Metadata = { title: "Our approach" };

export default function Page() {
  return (
    <PageShell title="Our approach" intro="We build from evidence. We claim only what we can prove. We disclose what is in our product because women have the right to know what touches their bodies.">
      <h2 className="text-2xl">Designed with women</h2>
      <p>{pillars[0].body}</p>
      {approach.map((a) => (
        <div key={a.title}>
          <h2 className="text-2xl">{a.title}</h2>
          <p className="mt-2">{a.body}</p>
        </div>
      ))}
    </PageShell>
  );
}
