'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { projectsData } from '@/lib/data';

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

  const allTechs = useMemo(() => getAllTechnologies(projectsData), []);

  const handleTechChipClick = (tech: string) => {
    setSelectedTechs((curr) =>
      curr.includes(tech) ? curr.filter((t) => t !== tech) : [...curr, tech]
    );
  };

  const handleClearChips = () => setSelectedTechs([]);

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

  return (
    <section id="projects" className="my-10 scroll-mt-28 md:mb-20">
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
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="mb-6 flex flex-col gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by project title or description..."
          className="focus:border-primary w-full rounded border px-3 py-2 focus:outline-none md:w-1/2"
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-muted-foreground text-sm font-medium">
            Filter by tech:
          </span>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTechChipClick(tech)}
              className={`
                rounded-full border px-3 py-1 text-sm transition
                ${
                  selectedTechs.includes(tech)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-muted'
                }
                `}
              style={{
                outline: selectedTechs.includes(tech)
                  ? '2px solid var(--primary)'
                  : undefined,
              }}
              type="button"
            >
              {tech}
            </button>
          ))}
          {selectedTechs.length > 0 && (
            <button
              onClick={handleClearChips}
              className="bg-muted text-muted-foreground hover:bg-foreground/10 ml-2 rounded-full px-3 py-1 text-xs transition"
              type="button"
            >
              Clear
            </button>
          )}
        </div>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        {filteredProjects.length === 0 ? (
          <div className="text-muted-foreground col-span-full text-center">
            No projects found.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  );
};
