'use client';

import Reveal from '@/common/components/shared/reveal';
import SectionHeader from '@/common/components/shared/section-header';
import { projectsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

import Project from './_components/project';

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25);

  return (
    <section id="projects" ref={ref} className="page-section scroll-mt-20">
      <div className="page-wrap">
        <Reveal>
          <SectionHeader
            index="02"
            title="Work"
            intro="Selected repositories — what they were for, what they run on, and where to read the code."
          />
        </Reveal>

        <div className="mt-16 space-y-14">
          {projectsData.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <Project project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
