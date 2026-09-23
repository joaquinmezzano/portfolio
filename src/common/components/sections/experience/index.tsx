'use client';

import Reveal from '@/common/components/shared/reveal';
import SectionHeader from '@/common/components/shared/section-header';
import { experiencesData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

export default function Experience() {
  const { ref } = useSectionInView('experience');

  return (
    <section id="experience" ref={ref} className="page-section scroll-mt-20">
      <div className="page-wrap">
        <Reveal>
          <SectionHeader
            index="03"
            title="Education"
            intro="The formal path: theory first, then the habit of building with it."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-16 border-t border-rule">
            {experiencesData.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-b border-rule py-7 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-silk md:col-span-2">
                  {item.date}
                </span>
                <div className="md:col-span-5">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-silk">{item.location}</p>
                </div>
                <p className="text-silk md:col-span-5">{item.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
