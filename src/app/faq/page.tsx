import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { stock } from "@/content/images";
import { faqs } from "@/content/content";

export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <PageShell image={stock.leavesSoft} imagePosition="50% 40%" title="Frequently asked questions">
      {faqs.map((f) => (
        <details key={f.q} className="border-b border-gable/20 pb-4">
          <summary className="cursor-pointer text-lg font-bold">{f.q}</summary>
          <p className="mt-2">{f.a}</p>
        </details>
      ))}
    </PageShell>
  );
}
