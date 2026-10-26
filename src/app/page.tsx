import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import Image from "next/image";
import { FounderPhoto } from "@/components/FounderPhoto";
import { Photo, Texture } from "@/components/Photo";
import { mockups, stock } from "@/content/images";
import { site, phaseCopy } from "@/config/site";
import { problem, pillars, earthpant, journey, founder } from "@/content/content";

const pillarImages = [mockups.tshirt, stock.bambooMacro, stock.leavesBright];

export default function Home() {
  const hero = phaseCopy[site.phase];
  const pct = Math.min(100, (site.waitlistCount / site.waitlistGoal) * 100);
  const current = journey.findIndex((j) => j.phase === site.phase);

  return (
    <>
      <section className="relative isolate overflow-hidden text-cream">
        <Image src={stock.bambooDense.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-gable/95 via-gable/80 to-gable/45" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="lg:pt-6">
            <h1 className="text-5xl leading-[1.05] sm:text-7xl">{hero.hero}</h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed">{hero.sub}</p>
            {site.waitlistCount > 0 ? (
              <div className="mt-8 max-w-sm" aria-label="First 1000 progress">
                <div className="h-3 overflow-hidden rounded-full bg-cream/25"><div className="h-full bg-gold" style={{ width: `${pct}%` }} /></div>
                <p className="mt-2 text-sm font-bold">{site.waitlistCount} of {site.waitlistGoal} women have joined</p>
              </div>
            ) : (
              <p className="mt-8 text-sm font-bold">Be one of the first {site.waitlistGoal} women.</p>
            )}
          </div>
          <div id="join" className="rounded-3xl bg-gable p-7 text-cream shadow-2xl ring-1 ring-cream/15">
            <h2 className="text-2xl">Join the First 1000</h2>
            <div className="mt-5"><WaitlistForm /></div>
          </div>
        </div>
      </section>

      <section className="bg-gable text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl">{problem.title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed">{problem.definition}</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {problem.stats.map((s) => (
              <div key={s.value} className="border-t-4 border-gold pt-5">
                <p className="text-5xl font-bold">{s.value}</p>
                <p className="mt-3 leading-relaxed">{s.text}</p>
                <p className="mt-2 text-xs opacity-75">{s.source}</p>
              </div>
            ))}
          </div>
          <Link href="/the-problem" className="mt-10 inline-block font-bold underline">Read more about the problem</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl">How we work</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title}>
              <Photo image={pillarImages[i]} aspect="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" position={i === 0 ? "50% 35%" : undefined} />
              <div className="mt-5 border-l-4 border-gold pl-5">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate bg-cream">
        <Texture image={stock.fabricBeige} opacity="opacity-30" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl">Tura EarthPant</h2>
            <p className="mt-3 max-w-prose leading-relaxed">A plant-based disposable menstrual pant, built from the words of 150 Nigerian women. It is still in development, and we will share more as each detail is confirmed.</p>
            <ul className="mt-6 space-y-2">
              {earthpant.confirmed.map((c) => <li key={c} className="border-l-4 border-gold pl-4">{c}</li>)}
            </ul>
            <Link href="/tura-earthpant" className="mt-8 inline-block rounded-full bg-gable px-6 py-3 font-bold text-cream">See what we can say today</Link>
          </div>
          <Photo image={mockups.bedroom} aspect="aspect-[4/3]" position="70% 50%" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:items-center">
        <FounderPhoto />
        <div>
          <blockquote className="text-2xl font-bold leading-snug sm:text-3xl">“{founder.quote}”</blockquote>
          <p className="mt-5 font-bold">{founder.name}</p>
          <p className="text-sm">{founder.role}</p>
          <Link href="/our-story" className="mt-6 inline-block font-bold underline">Read our story</Link>
        </div>
      </section>

      <section className="bg-gable text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <Photo image={mockups.tote} aspect="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
          <div>
            <h2 className="text-3xl">Built with the women who will use it</h2>
            <p className="mt-4 max-w-prose leading-relaxed">The First 1000 are our beta testing pool, our research participants and our first customers. Join them and help shape what TuraCare becomes.</p>
            <Link href="/first-1000" className="mt-6 inline-block rounded-full bg-cream px-6 py-3 font-bold text-gable">{hero.cta}</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl">Where we are</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {journey.map((j, i) => (
            <li key={j.phase} className={`rounded-2xl border-2 p-5 ${i === current ? "border-gable bg-white" : "border-gable/20"}`}>
              <h3 className="text-xl">{j.title}{i === current && " (now)"}</h3>
              <p className="mt-2">{j.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
