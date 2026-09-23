type SectionHeaderProps = {
  index: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({
  index,
  title,
  intro,
}: SectionHeaderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
      <div className="md:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-silk">
          ## {index} · {title.toLowerCase()}
        </p>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-xl text-silk">{intro}</p>}
      </div>
    </div>
  );
}
