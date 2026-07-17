'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import Link from 'next/link';

export const About = () => {

  return (
    <motion.section
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="Nikhil Verma" />
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-6 flex flex-row flex-wrap justify-center gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <Link href={process.env.NEXT_PUBLIC_RESUME_LINK || '#'} aria-label='Resume' target='_blank'>
            View Resume <Icons.drive className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
      <Skills />
    </motion.section>
  );
};
