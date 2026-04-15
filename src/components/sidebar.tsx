'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { profiles } from '@/lib/data';

export const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="fixed left-5 top-1/3 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border bg-background/20 px-3 py-2 backdrop-blur-sm dark:bg-background/80 sm:flex"
    >
      <nav className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
        {profiles.map(({ icon, link }) => (
          <Link
            target="_blank"
            href={link}
            key={link}
            className={`relative flex items-center justify-center rounded-full p-2 transition-all hover:text-foreground`}
          >
            {icon}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};
