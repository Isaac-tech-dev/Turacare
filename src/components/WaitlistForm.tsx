"use client";
import { useState } from "react";

const interestOptions = [
  { value: "beta-testing", label: "I'm interested in beta testing" },
  { value: "research-surveys", label: "Research surveys and findings" },
  { value: "product-updates", label: "Product and building updates" },
];
type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);
    const payload = {
      name: f.get("name"), email: f.get("email"), country: f.get("country"), city: f.get("city"),
      interests: f.getAll("interests"), healthcareProfessional: f.get("healthcareProfessional") === "on",
      sensory: f.get("sensory"), consent: f.get("consent") === "on", company: f.get("company"),
    };
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return <p role="status" className="text-lg font-bold">You&apos;re on the list. Check your inbox for a welcome email.</p>;
  }

  const field = "mt-1 w-full rounded-lg border border-gable/20 bg-white px-3 py-2.5 text-gable focus-visible:outline-cream";
  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <label className="block text-sm font-bold">Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-bold">Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-bold">Country (optional)
          <input name="country" autoComplete="country-name" className={field} />
        </label>
        <label className="block text-sm font-bold">City (optional)
          <input name="city" autoComplete="address-level2" className={field} />
        </label>
      </div>
      <fieldset>
        <legend className="text-sm font-bold">What would you like to hear about?</legend>
        {interestOptions.map((o) => (
          <label key={o.value} className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" name="interests" value={o.value} className="accent-gold" /> {o.label}
          </label>
        ))}
      </fieldset>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="healthcareProfessional" className="accent-gold" /> I&apos;m a healthcare professional
      </label>
      <label className="block text-sm font-bold">Do you experience sensory processing differences or neurodivergence? (optional)
        <select name="sensory" defaultValue="prefer-not-to-say" className={field}>
          <option value="prefer-not-to-say">Prefer not to say</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <span className="mt-1 block text-xs font-medium opacity-80">
          Optional. We ask so we can include a range of experiences in testing. We handle this information with extra care.
        </span>
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" required className="mt-1 accent-gold" />
        I agree to receive emails from TuraCare and can unsubscribe at any time.
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && <p role="alert" className="text-sm font-bold text-cream underline">{message}</p>}
      <button disabled={status === "sending"} className="w-full rounded-full bg-cream px-6 py-3 font-bold text-gable hover:brightness-95 disabled:opacity-60">
        {status === "sending" ? "Joining…" : "Join the First 1000"}
      </button>
    </form>
  );
}
