'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import { cn } from '@/lib/utils';

const PROJECTS_PER_PAGE = 4;

function getAllTechnologies(data: typeof projectsData): string[] {
  const techs = new Set<string>();
  data.forEach((project) => {
    project.technologies.forEach((tech) => techs.add(tech));
  });
  return Array.from(techs).sort();
}

export const Projects = () => {
  const [search, setSearch] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const allTechs = useMemo(() => getAllTechnologies(projectsData), []);

  const handleTechChipClick = (tech: string) => {
    setSelectedTechs((curr) =>
      curr.includes(tech) ? curr.filter((t) => t !== tech) : [...curr, tech]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleClearChips = () => {
    setSelectedTechs([]);
    setCurrentPage(1);
  };

  // Reset to first page when search changes is handled in the onChange for performance

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description?.toLowerCase().includes(search.toLowerCase());

      const matchesTechs =
        selectedTechs.length === 0 ||
        selectedTechs.every((t) => project.technologies.includes(t));

      return matchesSearch && matchesTechs;
    });
  }, [search, selectedTechs]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  return (
    <section
      id="projects"
      className="container mx-auto my-16 scroll-mt-28 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <SectionHeading
          heading="My Projects"
          content="A showcase of my work, ranging from digital queue management platforms to game automation and NPM packages."
        />
      </motion.div>

      <div className="mb-10 flex flex-col items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search projects..."
            className="w-full rounded-full border border-transparent bg-secondary/50 px-10 py-3 text-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('');
                setCurrentPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Tech Chips */}
        <div className="flex w-full flex-wrap justify-center gap-2">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTechChipClick(tech)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-300',
                selectedTechs.includes(tech)
                  ? 'scale-105 border-primary bg-primary text-primary-foreground shadow-md'
                  : 'border-transparent bg-secondary/30 text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
              )}
            >
              {tech}
            </button>
          ))}
          {selectedTechs.length > 0 && (
            <button
              onClick={handleClearChips}
              className="ml-2 text-xs font-semibold text-primary transition hover:underline"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative min-h-[600px]">
        <motion.div layout className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center text-muted-foreground"
              >
                <div className="mb-4 text-4xl">🔍</div>
                <p className="text-xl font-medium">
                  No projects found matching your criteria
                </p>
                <p className="mt-2">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            ) : (
              paginatedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: (index % 4) * 0.1 }}
                  layout
                >
                  <Project project={project} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex size-10 items-center justify-center rounded-full bg-secondary/50 transition hover:bg-secondary disabled:opacity-30"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'size-10 rounded-full text-sm font-medium transition-all duration-300',
                  currentPage === page
                    ? 'scale-110 bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary/30 hover:bg-secondary/50'
                )}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex size-10 items-center justify-center rounded-full bg-secondary/50 transition hover:bg-secondary disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
};
