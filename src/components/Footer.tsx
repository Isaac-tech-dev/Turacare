import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-gable text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div>
          <Image src="/brand/logo-horizontal-cream.png" alt="TuraCare" width={197} height={44} className="h-11 w-auto" />
          <a href={`mailto:${site.email}`} className="mt-4 inline-block text-sm underline">{site.email}</a>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {site.social.map((s) => (
            <li key={s.label}><a href={s.href} className="underline" rel="noopener noreferrer">{s.label}</a></li>
          ))}
          <li><Link href="/contact" className="underline">Contact</Link></li>
        </ul>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-1 px-6 pb-8 text-xs opacity-80">
        <span>© {new Date().getFullYear()} TuraCare</span>
        <Link href="/privacy" className="underline">Privacy policy</Link>
        <Link href="/terms" className="underline">Terms</Link>
      </div>
    </footer>
  );
}
