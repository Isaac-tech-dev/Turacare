import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <PageShell title="Contact" intro="Questions, press, research or partnerships? Get in touch.">
      <p><a className="font-bold underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <ul className="list-disc pl-5">
        {site.social.map((s) => <li key={s.label}><a className="underline" href={s.href}>{s.label}</a></li>)}
      </ul>
    </PageShell>
  );
}
