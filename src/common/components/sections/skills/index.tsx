'use client';

import Reveal from '@/common/components/shared/reveal';
import SectionHeader from '@/common/components/shared/section-header';
import { skillsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

const groups = [
  { label: 'languages', items: skillsData.languages },
  { label: 'frameworks & runtimes', items: skillsData.frameworks },
  { label: 'data', items: skillsData.data },
  { label: 'ai & ml', items: skillsData.aiMl },
  { label: 'tools & workflow', items: skillsData.tools },
];

export default function Skills() {
  const { ref } = useSectionInView('skills');

  return (
    <section id="skills" ref={ref} className="page-section scroll-mt-20">
      <div className="page-wrap">
        <Reveal>
          <SectionHeader
            index="04"
            title="Stack"
            intro="The tools I reach for when I build — grouped by what I use them for."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="mt-16 border-t border-rule">
            {groups.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-silk md:col-span-3">
                  {group.label}
                </dt>
                <dd className="font-mono text-base text-ink md:col-span-9">
                  {group.items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
