'use client';

import Image from 'next/image';

import portfolioImg from '@/../public/images/photo.jpg';
import Reveal from '@/common/components/shared/reveal';
import SectionHeader from '@/common/components/shared/section-header';
import { valuesData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('about', 0.35);

  return (
    <section id="about" ref={ref} className="page-section scroll-mt-20">
      <div className="page-wrap">
        <Reveal>
          <SectionHeader index="01" title="About" />
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-ink">
              <p>
                I&apos;m a backend-focused developer from Río Cuarto, Argentina.
                I finished my Computer Science Analyst degree at the Universidad
                Nacional de Río Cuarto in 2025, and I&apos;m in the final
                stretch of a B.Sc. in the same place. I work mainly with Java,
                SQL, and Python.
              </p>
              <p>
                Nearly everything I make is on GitHub instead of graded: a
                recipe engine that runs a vision model locally, a shopping
                optimizer powered by embeddings and a genetic algorithm, a
                compiler I wrote with Flex and Bison. Right now, RAG, LLMs, and
                computer vision are where I spend my curiosity.
              </p>
            </div>

            <ul className="mt-10 border-t border-rule">
              {valuesData.map((value) => (
                <li
                  key={value}
                  className="border-b border-rule py-3 font-mono text-sm text-ink"
                >
                  — {value}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <figure>
              <div className="overflow-hidden border border-rule bg-wash">
                <Image
                  src={portfolioImg}
                  alt="Portrait of Joaquin Mezzano"
                  priority
                  sizes="(min-width: 768px) 40vw, 92vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-silk">
                fig. 01 — río cuarto, argentina
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
