import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Terms" };

// DRAFT STRUCTURE ONLY. Have a lawyer review before launch (NDPR primary; GDPR for UK/international members).
export default function Page() {
  return (
    <PageShell title="Terms" intro="Draft: replace with reviewed text before launch.">
      <h2 className="text-xl">Use of this site</h2><p>Draft: add terms covering site use, community participation and beta testing.</p>
      <h2 className="text-xl">Product information</h2><p>Information on this site reflects a product in development and may change.</p>
    </PageShell>
  );
}
