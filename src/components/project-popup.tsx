import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { projectLinks } from '@/lib/data';
import { ProjectData } from '@/lib/types';

export const ProjectPopup = (project: ProjectData) => {
  const { image, links, title } = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          role="button"
          tabIndex={0}
          aria-label={`Open links for ${title}`}
          className="group relative flex cursor-pointer justify-center overflow-hidden rounded"
        >
          <Image
            src={image}
            alt={title}
            height={390}
            width={600}
            className="rounded object-cover object-center transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
            <span className="bg-background rounded-full px-3 py-1 text-sm">
              View links
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="
          w-[90%]
          rounded-xl
          sm:top-1/2
          sm:flex
          sm:max-w-sm
          sm:-translate-y-1/2
          sm:flex-col
          sm:items-center
          sm:[&>button]:hidden
        "
      >
        <DialogHeader>
          <DialogTitle className="text-md self-start font-medium">
            {title}
          </DialogTitle>
        </DialogHeader>
        <nav className="sm:text-muted-foreground sm:flex sm:flex-row sm:items-center sm:gap-4 sm:text-sm">
          {Object.entries(links ?? {}).map(([key, url]) => {
            if (!url) return null;

            const meta = projectLinks[key as keyof typeof projectLinks];
            if (!meta) return null;
            return (
              <Link
                key={key}
                href={url}
                target="_blank"
                aria-label={meta.label}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-2 rounded-lg p-2 text-sm capitalize transition"
              >
                {meta.icon}
                <span className="sm:hidden">{meta.label}</span>
              </Link>
            );
          })}
        </nav>
      </DialogContent>
    </Dialog>
  );
};
