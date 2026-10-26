import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { stock } from "@/content/images";

export const metadata: Metadata = { title: "Journal" };

export default function Page() {
  return (
    <PageShell image={stock.fern} title="Journal" intro="Placeholder: progress, testing and research updates will live here.">
      <p>Placeholder: replace with content from Zynora (or CMS).</p>
    </PageShell>
  );
}
