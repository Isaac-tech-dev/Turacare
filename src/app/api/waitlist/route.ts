import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INTERESTS = ["beta-testing", "research-surveys", "product-updates"];
const SENSORY = ["yes", "no", "prefer-not-to-say"] as const;
const clean = (v: unknown, max = 100) => String(v ?? "").trim().slice(0, max) || undefined;

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  if (b.company) return NextResponse.json({ ok: true }); // honeypot

  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim().toLowerCase();
  if (!name || name.length > 100) return NextResponse.json({ error: "Enter your name." }, { status: 422 });
  if (!emailRe.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 422 });
  if (!b.consent) return NextResponse.json({ error: "Please agree to receive updates." }, { status: 422 });

  const sensory = SENSORY.includes(b.sensory) ? b.sensory : "prefer-not-to-say";

  try {
    await addToWaitlist({
      name, email,
      country: clean(b.country), city: clean(b.city),
      interests: Array.isArray(b.interests) ? b.interests.filter((i: string) => INTERESTS.includes(i)) : [],
      healthcareProfessional: Boolean(b.healthcareProfessional),
      sensory,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
