import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { stock } from "@/content/images";
import { research } from "@/content/content";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Research" };

export default function Page() {
  return (
    <PageShell image={stock.savanna} title="Research" intro="TuraCare is building the continental evidence base on what menstrual products are doing to women's bodies, and the accountability to act on it.">
      {/* TODO: add concept note, citations and downloads once supplied by the founder */}
      <div className="space-y-8">
        {research.map((r) => (
          <div key={r.title} className="border-l-4 border-gold pl-5">
            <p className="text-xs font-bold uppercase tracking-wide">{r.status}</p>
            <h2 className="mt-1 text-2xl">{r.title}</h2>
            <p className="mt-2">{r.body}</p>
          </div>
        ))}
      </div>
      <p>Funders and institutional partners: we would like to hear from you at <a className="font-bold underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </PageShell>
  );
}
