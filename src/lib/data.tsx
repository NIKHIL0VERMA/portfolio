import Link from 'next/link';

import { ProjectData } from './types';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-dineline.png',
    title: 'DineLine – Digital Queue Management Platform',
    description:
      'A production-ready digital queue management system for restaurants with real-time waitlists, automated notifications, admin dashboards, and a RAG-powered assistant for operational insights. Designed for multi-restaurant scalability.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'RAG',
      'Tailwind',
    ],
    links: {
      preview: 'https://dine-line.vercel.app',
    },
  },

  {
    image: '/images/project-growthackr.png',
    title: 'Growthackr – Productivity Chrome Extension',
    description:
      'A Chrome extension to track and limit time spent on distracting websites, featuring configurable limits, UI dashboard, and performance-focused architecture.',
    technologies: ['TypeScript', 'SolidJS', 'Chrome Extension APIs', 'Vite'],
    links: {
      preview: 'https://nikhil0verma.github.io/Growthackr/',
      productHunt: 'https://www.producthunt.com/products/growthackr',
      github: 'https://github.com/NIKHIL0VERMA/Growthackr',
      vscode: 'https://github.dev/NIKHIL0VERMA/Growthackr',
    },
  },

  {
    image: '/images/project-dineline.png',
    title: 'FlixSrota Player – Cross-Platform Video Player (NPM)',
    description:
      'An open-source, customizable video player published on NPM with support for React, React Native, and Expo. Designed for extensibility and clean API consumption.',
    technologies: ['TypeScript', 'React', 'React Native', 'Expo', 'NPM'],
    links: {
      npm: 'https://www.npmjs.com/package/@flixsrota/player',
      github: 'https://github.com/NIKHIL0VERMA/flixsrota-player',
      vscode: 'https://github.dev/NIKHIL0VERMA/flixsrota-player',
    },
  },

  {
    image: '/images/project-growthackr.png',
    title: 'Mynirdeshak – Automated Report Generation Platform',
    description:
      'A full-stack platform for automated report generation with secure REST APIs, async background workers for PDF creation, Redis-based job queues, and payment integration. Designed, deployed, and maintained production infrastructure.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Docker',
      'Nginx',
      'Payments',
    ],
    links: {
      preview: 'https://mynirdeshak.com',
      github: 'https://github.com/Anup-raj2002/mynirdeshak',
      vscode: 'https://github.dev/Anup-raj2002/mynirdeshak',
    },
  },

  {
    image: '/images/project-dineline.png',
    title: 'Learnocept – Video-Based Learning Platform',
    description:
      'An ed-tech platform with structured video learning, user progress tracking, and scalable backend services. Contributed across backend APIs, frontend integration, deployment, and production maintenance.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Tailwind',
    ],
    links: {
      preview: 'https://learnocept.in',
    },
  },

  {
    image: '/images/project-growthackr.png',
    title: 'RupeeFunda – Financial Services Website',
    description:
      'A production financial services website where I handled cloud deployment, reverse proxy setup, CDN configuration, and long-term maintenance ensuring performance and uptime.',
    technologies: ['Next.js', 'Docker', 'Nginx', 'Cloudflare'],
    links: {
      preview: 'https://rupeefunda.com',
    },
  },

  {
    image: '/images/project-growthackr.png',
    title: 'PokVort – Pokémon Data Explorer',
    description:
      'A frontend-focused application consuming public APIs to explore Pokémon data with optimized fetching, state handling, and clean UI abstractions.',
    technologies: ['React', 'JavaScript', 'Public APIs', 'CSS'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/PokVort',
      vscode: 'https://github.dev/NIKHIL0VERMA/PokVort',
    },
  },

  {
    image: '/images/project-dineline.png',
    title: 'Machine Monitoring Dashboard',
    description:
      'A real-time monitoring dashboard for industrial machine data, focusing on visualization, metrics tracking, and system health indicators.',
    technologies: ['JavaScript', 'Charts', 'Dashboards'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/Machine-Monitoring-Dashboard',
      vscode: 'https://github.dev/NIKHIL0VERMA/Machine-Monitoring-Dashboard',
    },
  },

  {
    image: '/images/project-dineline.png',
    title: 'Pick Palette – Color Picker Chrome Extension',
    description:
      'A Chrome extension improving designer productivity by extracting and managing color palettes directly from webpages. Featured on Product Hunt via an open-source product.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension APIs'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/Pick-Palette',
      vscode: 'https://github.dev/NIKHIL0VERMA/Pick-Palette',
    },
  },

  {
    image: '/images/project-growthackr.png',
    title: 'Face Detection System (Python)',
    description:
      'A real-time face detection system using OpenCV with webcam integration, dataset handling, and ML-based recognition pipeline.',
    technologies: ['Python', 'OpenCV', 'Machine Learning'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/face-detection',
      vscode: 'https://github.dev/NIKHIL0VERMA/face-detection',
    },
  },

  {
    image: '/images/project-dineline.png',
    title: 'The Bakeryshop – Static Business Website',
    description:
      'A static bakery site, implement object click detection using pure css(no JavaScript)',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    links: {
      preview: 'https://thebakeryshop1.netlify.app/',
      github: 'https://github.com/NIKHIL0VERMA/TheBakeryshop',
      vscode: 'https://github.dev/NIKHIL0VERMA/TheBakeryshop',
    },
  },
] satisfies readonly ProjectData[];

export const experiencesData = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'DigiMoga Re-innovation LLP',
    description: (
      <>
        Designed, developed, deployed, and maintained multiple production
        platforms -{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://learnocept.in"
          target="_blank"
        >
          learnocept.in
        </Link>
        {', '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://mynirdeshak.com"
          target="_blank"
        >
          mynirdeshak.com
        </Link>
        {', and '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://rupeefunda.com"
          target="_blank"
        >
          rupeefunda.com
        </Link>
        .
        <br />
        <br />
        At <strong>RupeeFunda</strong>, I handled production deployment, server
        configuration, and ongoing maintenance to ensure reliability and uptime.
        For <strong>Mynirdeshak</strong>, I collaborated on frontend development
        while independently designing and implementing the complete backend
        architecture, including secure REST APIs, asynchronous background
        workers for PDF report generation, and end-to-end deployment. At{' '}
        <strong>Learnocept</strong>, I contributed across backend development,
        deployment, and frontend collaboration, working on video-based learning
        features, user progress tracking, and platform scalability.
      </>
    ),
    period: 'May 2024 – Jul 2024',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Docker',
      'Nginx',
      'Tailwind',
      'REST APIs',
      'Payment Integration',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.postgres className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.redis className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

export const profiles = [
  {
    icon: <Icons.playStore />,
    link: 'https://play.google.com/store/apps/dev?id=5011720043750659265',
  },
  {
    icon: <Icons.github />,
    link: 'https://github.com/NIKHIL0VERMA',
  },
  {
    icon: <Icons.leetcode />,
    link: 'https://leetcode.com/nikhil2003verma',
  },
  {
    icon: <Icons.linkedin />,
    link: 'https://linkedin.com/in/nikhil2003verma',
  },
] as const;

export const projectLinks = {
  preview: {
    icon: <Icons.preview />,
    label: 'Live Website',
  },
  github: {
    icon: <Icons.github />,
    label: 'View on GitHub',
  },
  npm: {
    icon: <Icons.npm />,
    label: 'View on NPM',
  },
  productHunt: {
    icon: <Icons.productHunt />,
    label: 'View on Product Hunt',
  },
  vscode: {
    icon: <Icons.vscode />,
    label: 'View in VS Code',
  },
} as const;
