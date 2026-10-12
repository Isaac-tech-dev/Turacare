import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FounderPhoto } from "@/components/FounderPhoto";
import { founder } from "@/content/content";

export const metadata: Metadata = { title: "Our story" };

export default function Page() {
  return (
    <>
      <PageShell title="Our story" intro="TuraCare is a social enterprise at the intersection of menstrual health, circular economy and gender justice.">
        <p>For decades, the conversation about menstrual health in Africa has been about access: who can afford a pad. That matters. But it is not the whole story. Even women who can buy menstrual products have too often been given products that were never designed with the health of the body wearing them in mind.</p>
        <p>So before designing anything, we asked. We surveyed 150 Nigerian women about what managing a period actually looked like. Not one of them used the word comfortable. Every decision since has been built from their answers.</p>
        <p>Our work runs across three connected workstreams: developing Tura EarthPant, running a continental research study, and advancing policy advocacy.</p>
      </PageShell>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 md:grid-cols-[1fr_1.5fr]">
        <FounderPhoto />
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-3xl">{founder.name}</h2>
          <p className="text-sm font-bold">{founder.role}</p>
          {founder.bio.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <blockquote className="border-l-4 border-gold pl-5 text-xl font-bold">“{founder.quote}”</blockquote>
        </div>
      </section>
    </>
  );
}
