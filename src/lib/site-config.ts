import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Nikhil Verma | Software Engineer | Generalist',
  description:
    'Portfolio of Nikhil Verma — fullstack, Android, and embedded systems developer. Showcasing web apps, mobile apps, AI projects, and open-source contributions.',
  keywords: [
    'Nikhil Verma',
    'Software Engineer Portfolio',
    'Generalist',
    'India',
    'Full Stack Developer',
    'Native Mobile Developer',
    'RAG developer',
    'Raspberry Pi',
    'Arduino',
  ],
  twitter: '@Nikhil0Verma',
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
