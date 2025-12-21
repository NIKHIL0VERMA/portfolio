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
      className="dark:bg-background/80 bg-background/20 fixed left-5 top-1/3 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-sm sm:flex"
    >
      <nav className="text-muted-foreground flex flex-col items-center gap-4 text-sm">
        {profiles.map(({ icon, link }) => (
          <Link
            target="_blank"
            href={link}
            key={link}
            className={`hover:text-foreground relative flex items-center justify-center rounded-full p-2 transition-all`}
          >
            {icon}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};
