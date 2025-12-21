'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { profiles } from '@/lib/data';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-8 text-center sm:mt-28"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded-lg border border-green-400 px-3 py-1 transition-all hover:bg-green-500 hover:text-white"
        >
          <span className="relative flex size-3">
            <span className="absolute size-full animate-ping rounded-full bg-green-400 opacity-50"></span>
            <span className="relative size-3 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Crafting{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          full-stack systems
        </span>{' '}
        that sense, serve, and scale.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mt-2 max-w-xl"
      >
        A generalist based in India. I build solutions across software,
        hardware, and automation without tech stack boundaries.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 flex flex-row flex-wrap justify-center gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/Resume_Nikhil_Verma.pdf" download>
            Download Resume <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={profiles[3].link} aria-label="Linkedin" target="_blank">
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href={profiles[1].link} aria-label="Github" target="_blank">
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
