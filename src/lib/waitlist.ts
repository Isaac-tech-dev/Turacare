export type Signup = {
  name: string; email: string; country?: string; city?: string;
  interests: string[];            // beta-testing | research-surveys | product-updates
  healthcareProfessional: boolean;
  sensory: "yes" | "no" | "prefer-not-to-say"; // optional, sensitive: handle with care
};

export async function addToWaitlist(s: Signup): Promise<void> {
  const provider = process.env.WAITLIST_PROVIDER ?? "console";

  if (provider === "mailchimp") {
    const { MAILCHIMP_API_KEY: key, MAILCHIMP_SERVER_PREFIX: dc, MAILCHIMP_AUDIENCE_ID: list } = process.env;
    if (!key || !dc || !list) throw new Error("Mailchimp env vars missing");
    const tags = ["first-1000", ...s.interests];
    if (s.healthcareProfessional) tags.push("healthcare-professional");
    if (s.sensory === "yes") tags.push("sensory-differences"); // sensitive: restrict who can see this tag
    const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${list}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${key}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: s.email,
        status: "subscribed",
        merge_fields: { FNAME: s.name, COUNTRY: s.country ?? "", CITY: s.city ?? "" },
        tags,
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data?.title === "Member Exists") return;
      throw new Error(`Mailchimp error: ${res.status}`);
    }
    return;
  }

  console.log("[waitlist:dev]", s); // add MailerLite / Brevo / Supabase branches here
}
