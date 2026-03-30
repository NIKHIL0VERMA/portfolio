'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { Button } from './button';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const RecentProjects = () => {
  const { ref } = useSectionInView('Projects');
  const router = useRouter();

  const openProjects = () => {
    router.push('/projects');
  };

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="Recent Projects"
          content="My recent projects. Click on image to view live hosted, github and other links"
        />
      </motion.div>
      <div className="grid gap-7 md:grid-cols-2">
        {projectsData.slice(0, 2).map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
        className="mt-10 flex justify-center"
      >
        <Button className="px-5 md:px-10" onClick={openProjects}>
          More Projects
        </Button>
      </motion.div>
    </section>
  );
};
