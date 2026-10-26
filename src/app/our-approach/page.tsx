import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Photo } from "@/components/Photo";
import { stock } from "@/content/images";
import { approach, pillars } from "@/content/content";

export const metadata: Metadata = { title: "Our approach" };

export default function Page() {
  return (
    <PageShell image={stock.bambooPath} title="Our approach" intro="We build from evidence. We claim only what we can prove. We disclose what is in our product because women have the right to know what touches their bodies.">
      <h2 className="text-2xl">Designed with women</h2>
      <p>{pillars[0].body}</p>
      {approach.map((a) => (
        <div key={a.title}>
          <h2 className="text-2xl">{a.title}</h2>
          <p className="mt-2">{a.body}</p>
          {a.title === "Materials" && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Photo image={stock.bambooMacro} aspect="aspect-[4/3]" sizes="(min-width: 640px) 384px, 100vw" />
              <Photo image={stock.wovenWhite} aspect="aspect-[4/3]" sizes="(min-width: 640px) 384px, 100vw" />
            </div>
          )}
        </div>
      ))}
    </PageShell>
  );
}
