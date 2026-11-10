export default function Section({ id, title, children, band = false }: { id: string; title: string; children: React.ReactNode; band?: boolean }) {
  return (
    <section id={id} className={band ? "border-y border-line bg-surface/60" : ""}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[15rem_1fr] lg:gap-14 lg:py-28">
        <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:sticky lg:top-24 lg:self-start">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
