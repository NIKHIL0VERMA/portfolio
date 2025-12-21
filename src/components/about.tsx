'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Nikhil Verma, a software engineer from India passionate about
          building impactful software. I thrive on problem-solving and enjoy
          turning ideas into real-world applications. I&apos;ve worked on a
          range of projects, from Android apps and automation scripts to
          full-stack web platforms and open-source contributions, each helping
          me sharpen my skills and explore new technologies. My core stack
          includes Android (Java), React, Next.js, TypeScript, and I’m also
          familiar with Node.js, MongoDB, Firebase, and Prisma. I love
          experimenting with new tools and frameworks to create solutions that
          are both functional and user-friendly.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
