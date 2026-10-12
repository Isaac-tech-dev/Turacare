import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = { title: "Privacy policy" };

// DRAFT STRUCTURE ONLY. Have a lawyer review before launch (NDPR primary; GDPR for UK/international members).
export default function Page() {
  return (
    <PageShell title="Privacy policy" intro="Draft: replace with reviewed text before launch.">
      <h2 className="text-xl">What we collect</h2><p>Name, email and the optional details you choose to share (country, city, interests, profession, and an optional question about sensory processing differences or neurodivergence).</p>
      <h2 className="text-xl">Why we collect it</h2><p>To run the First 1000 community: updates, research invitations and beta testing selection.</p>
      <h2 className="text-xl">Sensitive information</h2><p>Optional answers that relate to health are collected only with your explicit consent and handled with extra care.</p>
      <h2 className="text-xl">Your rights</h2><p>Access, correct or delete your data and withdraw consent at any time by emailing us.</p>
      <h2 className="text-xl">Who processes your data</h2><p>List email provider and hosting here. Add retention period and international transfer details.</p>
    </PageShell>
  );
}
