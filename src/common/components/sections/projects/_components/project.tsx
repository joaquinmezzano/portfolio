import Image from 'next/image';

import { projectsData } from '@/common/lib/data';
import { cn } from '@/common/lib/utils';

type Project = (typeof projectsData)[number];

export default function Project({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const even = index % 2 === 1;

  return (
    <div className="grid gap-8 border-t border-rule pt-10 md:grid-cols-12 md:gap-10">
      <div className={cn('md:col-span-7', even && 'md:order-2')}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-silk">
          0{index + 1} · {project.role}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-lg leading-relaxed text-silk">
          {project.description}
        </p>

        <dl className="mt-8 max-w-lg font-mono text-sm">
          <div className="flex gap-4 border-t border-rule py-3">
            <dt className="shrink-0 text-silk">stack</dt>
            <dd className="text-ink">{project.stack.join(' · ')}</dd>
          </div>
          <div className="flex gap-4 border-b border-rule py-3">
            <dt className="shrink-0 text-silk">repo</dt>
            <dd>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
              >
                repository ↗
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className={cn('md:col-span-5', even && 'md:order-1')}>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group block border border-rule bg-wash"
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} interface`}
            sizes="(min-width: 768px) 42vw, 92vw"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </a>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-silk">
          scr. 0{index + 1} — {project.title.toLowerCase().replaceAll(' ', '-')}
        </p>
      </div>
    </div>
  );
}
