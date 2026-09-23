'use client';

import Reveal from '@/common/components/shared/reveal';
import { siteMeta } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

const manifestRows = [
  { label: 'name', value: siteMeta.name.toLowerCase() },
  { label: 'based', value: siteMeta.basedOn },
  { label: 'studying', value: siteMeta.studying },
  { label: 'languages', value: siteMeta.languages },
];

export default function Hero() {
  const { ref } = useSectionInView('home', 0.3);

  return (
    <section
      id="home"
      ref={ref}
      className="flex min-h-screen flex-col justify-center scroll-mt-24 py-24"
    >
      <div className="page-wrap">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal"></span>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-silk">
              status — {siteMeta.status}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-10 font-display text-[3.25rem] font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
            Joaquin
            <br />
            Mezzano.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-silk md:text-xl">
            Backend-focused developer and recent Computer Science Analyst
            (UNRC), finishing a B.Sc. I build with Java, SQL and Python — and I
            ship full-stack projects that talk to LLMs and computer vision
            models.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-14 border-t border-rule">
            {manifestRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[7rem_1fr] gap-4 border-b border-rule py-3 font-mono text-sm sm:grid-cols-[10rem_1fr]"
              >
                <dt className="text-silk">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
            <li>
              <a
                href={`mailto:${siteMeta.email}`}
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
              >
                email ↗
              </a>
            </li>
            <li>
              <a
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer"
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
              >
                github ↗
              </a>
            </li>
            <li>
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
              >
                linkedin ↗
              </a>
            </li>
            <li>
              <a
                href={siteMeta.cv}
                download
                className="text-silk underline decoration-silk/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                download cv ↓
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
