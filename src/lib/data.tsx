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
    image: '/images/project-llm-confidence-calibration-benchmark.png',
    title: 'LLM Confidence Calibration Benchmark',
    description:
      'To analyze whether modern open-source LLMs are well-calibrated, and how calibration varies across different task types such as reasoning, common sense, binary decision making, and factual truthfulness.',
    technologies: [
      'Python',
      'HuggingFace',
      'Transformers',
      'Seaborn',
      'Jupyter Notebook',
      'Matplotlib',
      'Open Source',
    ],
    links: {
      preview:
        'https://medium.com/@nikhil2003verma/are-open-source-llms-as-confident-as-they-claim-cb177c4b96f2',
      github:
        'https://github.com/NIKHIL0VERMA/LLM-Confidence-Calibration-Benchmark',
      vscode:
        'https://github.dev/NIKHIL0VERMA/LLM-Confidence-Calibration-Benchmark',
    },
  },
  {
    image: '/images/project-dineline.png',
    title: 'DineLine – Digital Queue Management Platform',
    description:
      'A production-ready digital queue management system for restaurants with real-time waitlists, automated notifications, admin dashboards, and a RAG-powered assistant for operational insights. Designed for multi-restaurant scalability.',
    technologies: [
      'Next.js',
      'ExpressJs',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'RAG',
      'Tailwind',
      'Web',
    ],
    links: {
      preview: 'https://dine-line.vercel.app',
    },
  },
  {
    image: '/images/project-flixsrota-player.png',
    title: 'FlixSrota Player – Cross-Platform Video Player (NPM)',
    description:
      'An open-source, customizable video player published on NPM with support for React, React Native, and Expo. Designed for extensibility and clean API consumption.',
    technologies: [
      'NPM package',
      'Open Source',
      'TypeScript',
      'Node.js',
      'React',
      'React Native',
      'Expo',
    ],
    links: {
      npm: 'https://www.npmjs.com/package/@flixsrota/player',
      github: 'https://github.com/NIKHIL0VERMA/flixsrota-player',
      vscode: 'https://github.dev/NIKHIL0VERMA/flixsrota-player',
    },
  },
  {
    image: '/images/project-growthackr.png',
    title: 'Growthackr – Productivity Chrome Extension',
    description:
      'A Chrome extension to track and limit time spent on distracting websites, featuring configurable limits, UI dashboard, and performance-focused architecture.',
    technologies: [
      'TypeScript',
      'Node.js',
      'SolidJS',
      'Chrome Extension APIs',
      'Open Source',
      'Jest',
      'Vite',
      'web',
    ],
    links: {
      preview: 'https://nikhil0verma.github.io/Growthackr/',
      productHunt: 'https://www.producthunt.com/products/growthackr',
      github: 'https://github.com/NIKHIL0VERMA/Growthackr',
      vscode: 'https://github.dev/NIKHIL0VERMA/Growthackr',
    },
  },
  {
    image: '/images/project-darshan-doot.png',
    title: 'Darshan Doot',
    description:
      'Darshan Doot is an innovative multilingual chatbot-based ticketing system designed to enhance the visitor experience in museums by streamlining the ticket booking process. Recognizing the challenges traditional manual ticketing systems pose—such as long queues, inefficient operations, and human errors—our solution leverages advanced technology to create a seamless, efficient, and user-friendly platform.',
    technologies: [
      'Python',
      'Django',
      'Payments',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Nginx',
      'Web',
    ],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/Darshan_Doot',
      vscode: 'https://github.dev/NIKHIL0VERMA/Darshan_Doot',
    },
  },
  {
    image: '/images/project-learnocept.png',
    title: 'Learnocept – Video-Based Learning Platform',
    description:
      'An ed-tech platform with structured video learning, user progress tracking, and scalable backend services. Contributed across backend APIs, frontend integration, deployment, and production maintenance.',
    technologies: [
      'React',
      'ExpressJs',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Firebase',
      'Bull MQ',
      'Docker',
      'Nginx',
      'Mongoose',
      'Cloudflare',
      'Payments',
      'Web',
    ],
    links: {
      preview: 'https://learnocept.in',
    },
  },
  {
    image: '/images/project-mynirdeshak.png',
    title: 'Mynirdeshak – Scholarship assessment platform',
    description:
      'A full-stack scholarship assessment platform featuring randomized MCQs, anti-cheating monitoring, and secure REST APIs. Built robust backend workflows with async job queues using Bull MQ for scorecard creation, and integrated payments. Led the system design, deployment, and reliable production operations throughout my internship.',
    technologies: [
      'React',
      'ExpressJs',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'Firebase',
      'Bull MQ',
      'Docker',
      'Nginx',
      'Mongoose',
      'Cloudflare',
      'Payments',
      'Web',
    ],
    links: {
      preview: 'https://mynirdeshak.com',
      github: 'https://github.com/Anup-raj2001/mynirdeshak',
      vscode: 'https://github.dev/Anup-raj2001/mynirdeshak',
    },
  },
  {
    image: '/images/project-pick-palette.png',
    title: 'Pick Palette – Color Picker Chrome Extension',
    description:
      'A Chrome extension improving designer productivity by extracting and managing color palettes directly from webpages. Featured on Product Hunt via an open-source product.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension APIs'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/PickPalette-ChromeExtension',
      vscode: 'https://github.dev/NIKHIL0VERMA/PickPalette-ChromeExtension',
    },
  },

  {
    image: '/images/project-criteria-engine.png',
    title: 'Criteria Engine',
    description:
      'A dynamic rule-based eligibility determination application using FastAPI and MongoDB. It leverages an Abstract Syntax Tree (AST) for flexible rule creation, combination, and evaluation based on user attributes. The application features a Next.js frontend for rule management and evaluation, providing a robust framework for eligibility assessment.',
    technologies: [
      'Python',
      'FastAPI',
      'MongoDB',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'AST',
    ],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/CriteriaEngine',
      vscode: 'https://github.dev/NIKHIL0VERMA/CriteriaEngine',
    },
  },
  {
    image: '/images/project-pokvort.png',
    title: 'PokVort – Game automation',
    description:
      'It automates the training process of Pokémon on Pokémon Vortex, streamlining the process of gaining experience or completing battles against a chosen training account. PokVort provides a headless, self-contained package with its own browser (Firefox) and WebDriver, so you do not need to install Firefox or GeckoDriver separately.',
    technologies: [
      'Python',
      'Selenium',
      'Pickle',
      'Psutil',
      'Window App',
      'Automation',
    ],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/PokVort',
      vscode: 'https://github.dev/NIKHIL0VERMA/PokVort',
    },
  },
  {
    image: '/images/project-no-ui.png',
    title: 'SchedulerForInstagram',
    description:
      'An automation for scheduling post for instagram using selenium, webbot, AutoIT',
    technologies: ['Python', 'Selenium', 'webbot', 'AutoIT'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/SchedulerForInstagram',
      vscode: 'https://github.dev/NIKHIL0VERMA/SchedulerForInstagram',
    },
  },
  {
    image: '/images/project-machine-dashboard-intern-assessment.png',
    title: 'Machine Monitoring Dashboard',
    description:
      'Scitech Industries – SDE Intern Assessment project. A real-time Machine Monitoring Dashboard built with a Next.js frontend, a NestJS backend, and a worker service for data updates. Focuses on live visualization of industrial data streams, comprehensive metrics tracking, and reliability.',
    technologies: [
      'Nest.js',
      'Next.js',
      'Socker.io',
      'TypeScript',
      'Jest',
      'prisma',
      'Node.js',
      'Charts',
      'Tailwind',
      'Web',
    ],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/Machine-Monitoring-Dashboard',
      vscode: 'https://github.dev/NIKHIL0VERMA/Machine-Monitoring-Dashboard',
    },
  },

  {
    image: '/images/project-no-ui.png',
    title: 'Face Detection System',
    description:
      'A real-time face detection system using OpenCV with webcam integration, dataset handling, and ML-based recognition pipeline.',
    technologies: ['Python', 'OpenCV', 'Machine Learning'],
    links: {
      github: 'https://github.com/NIKHIL0VERMA/face-detection',
      vscode: 'https://github.dev/NIKHIL0VERMA/face-detection',
    },
  },

  {
    image: '/images/project-bakery.png',
    title: 'The Bakeryshop – Static Business Website',
    description:
      'A static bakery site, implement object click detection using pure css(no JavaScript)',
    technologies: ['HTML', 'CSS', 'Web'],
    links: {
      preview: 'https://thebakeryshop1.netlify.app/',
      github: 'https://github.com/NIKHIL0VERMA/TheBakeryshop',
      vscode: 'https://github.dev/NIKHIL0VERMA/TheBakeryshop',
    },
  },
] satisfies readonly ProjectData[];

export const experiencesData = [
  {
    title: 'SDE Intern (Remote)',
    company: 'PerceptEye Inc.',
    description: (
      <>
        Designed and implemented an algorithm to generate{' '}
        <strong>93 million</strong> unique, human-readable simulation names,
        eliminating manual input and improving AI training workflow
        traceability. Identified a security vulnerability caused by an unsecured
        Redis connection and implemented TLS-based secure communication between
        backend services, <strong>mitigating MITM risks</strong>. Fixed theme
        inconsistency and improved responsiveness by making dashboard components
        fully mobile-friendly.
      </>
    ),
    period: 'Jan 2026 – Jan 2026',
    technologies: [
      'React',
      'TypeScript',
      'MongoDB',
      'Redis',
      'Tailwind',
      'REST APIs',
      'TLS',
      'Security',
    ],
  },
  {
    title: 'Fullstack Developer Intern (Hybrid)',
    company: 'Digimoga Re-innovations LLP',
    description: (
      <>
        Architected, developed, and deployed full-stack production platforms
        including{' '}
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
    period: 'May 2025 – Dec 2025',
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
