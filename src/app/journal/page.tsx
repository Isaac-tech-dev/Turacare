import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Journal" };

export default function Page() {
  return (
    <PageShell title="Journal" intro="Placeholder: progress, testing and research updates will live here.">
      <p>Placeholder: replace with content from Zynora (or CMS).</p>
    </PageShell>
  );
}
