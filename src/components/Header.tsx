import Link from "next/link";
import Image from "next/image";
import { site, phaseCopy } from "@/config/site";

export function Header() {
  const cta = (
    <Link href="/first-1000" className="rounded-full bg-gable px-5 py-2.5 text-sm font-bold text-cream hover:bg-gable/90">
      {phaseCopy[site.phase].cta}
    </Link>
  );
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
      <Link href="/" aria-label="TuraCare home">
        <Image src="/brand/logo-horizontal.png" alt="TuraCare" width={197} height={44} priority className="h-11 w-auto" />
      </Link>
      <nav aria-label="Main" className="hidden items-center gap-5 text-sm lg:flex">
        {site.nav.map((n) => <Link key={n.href} href={n.href} className="hover:underline">{n.label}</Link>)}
        {cta}
      </nav>
      <details className="relative lg:hidden">
        <summary className="cursor-pointer list-none rounded-full border-2 border-gable px-4 py-2 text-sm font-bold">Menu</summary>
        <nav aria-label="Mobile" className="absolute right-0 z-10 mt-2 flex w-60 flex-col gap-3 rounded-2xl bg-cream p-5 text-base shadow-lg">
          {site.nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          {cta}
        </nav>
      </details>
    </header>
  );
}
