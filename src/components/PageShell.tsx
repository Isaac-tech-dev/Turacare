export function PageShell({ title, intro, children }: { title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-prose text-lg leading-relaxed">{intro}</p>}
      <div className="mt-10 space-y-6 leading-relaxed">{children}</div>
    </section>
  );
}
