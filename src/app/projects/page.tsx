'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Projects } from '@/components/projects';
import { Sidebar } from '@/components/sidebar';
import { SidebarMobile } from '@/components/sidebar-mobile';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation / Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'group gap-2 hover:bg-secondary/50'
            )}
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle className="relative right-0 top-0 flex size-9 items-center justify-center rounded-full border bg-background" />
          </div>
        </div>
      </header>

      <div className="pt-20">
        <div className="container mx-auto flex flex-col items-center">
          <Sidebar />
          <SidebarMobile />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Projects />
          </motion.div>

          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
