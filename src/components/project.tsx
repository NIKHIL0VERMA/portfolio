import { motion } from 'framer-motion';

import { ProjectPopup } from './project-popup';

import { ProjectData } from '@/lib/types';

type TProps = {
  project: ProjectData;
};

export const Project = ({ project }: TProps) => {
  const { title, description, technologies } = project;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 shadow-sm transition-all duration-300 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <ProjectPopup {...project} />
      </div>

      <div className="flex grow flex-col">
        <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-secondary-foreground/10 bg-secondary/50 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm transition-colors group-hover:bg-secondary/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
