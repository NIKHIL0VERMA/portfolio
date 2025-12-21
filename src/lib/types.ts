import { links, projectLinks } from '@/lib/data';

export type SectionName = (typeof links)[number]['name'];

export type ProjectData = {
  image: string;
  title: string;
  description: string;
  technologies: readonly string[];
  links: AtLeastOne<Record<ProjectLinkName, string>>;
};

type AtLeastOne<T> = {
  readonly [K in keyof T]: Pick<T, K> & Partial<T>;
}[keyof T];

export type ProjectLinkName = keyof typeof projectLinks;
