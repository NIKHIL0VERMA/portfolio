'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from './button';
import { Icons } from './icons';

import { profiles } from '@/lib/data';

export const SidebarMobile = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!open) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 10000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [open]);

  const handleScroll = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open, handleScroll]);

  return (
    <div className="fixed bottom-8 right-8 z-30 sm:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              width: 56,
              height: 56,
              opacity: 0,
              borderTopLeftRadius: 999,
            }}
            animate={{
              width: 180,
              height: 180,
              opacity: 1,
              borderTopLeftRadius: 180,
            }}
            exit={{
              width: 56,
              height: 56,
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="
                dark:bg-background/80 bg-background/20 absolute
                -bottom-7 -right-7 z-0
                border
                backdrop-blur-sm
            "
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open &&
          profiles.map(({ icon, link }, i) => {
            const angle = (Math.PI / 2 / (profiles.length - 1)) * i;
            const radius = 75;

            return (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  x: -Math.cos(angle) * radius,
                  y: -Math.sin(angle) * radius,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute"
              >
                <Link
                  href={link}
                  target="_blank"
                  key={link}
                  className="text-muted-foreground hover:text-foreground relative flex items-center justify-center rounded-full p-2 text-sm transition-all"
                >
                  {icon}
                </Link>
              </motion.div>
            );
          })}
      </AnimatePresence>

      <Button
        onClick={() => setOpen(!open)}
        variant="outline"
        size="icon"
        aria-label="social-contact"
        className="backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icons.social className="size-5" />
        </motion.div>
      </Button>
    </div>
  );
};
