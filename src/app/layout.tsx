import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: new URL(siteConfig.url),
    siteName: 'Nikhil Verma',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Verma Portfolio',
      },
      {
        url: '/og-dark.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Verma Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    site: siteConfig.twitter,
    description: siteConfig.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
