export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="page-wrap flex flex-col gap-2 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-silk">
          © 2026 Joaquin Mezzano · Río Cuarto, Argentina
        </p>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-silk">
          designed, written &amp; built by hand — no template
        </p>
      </div>
    </footer>
  );
}
