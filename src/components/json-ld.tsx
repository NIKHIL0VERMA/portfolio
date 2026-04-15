import { faqs, profile, projectsData } from '@/lib/data';

export const JsonLd = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://nikhil2003verma.vercel.app/#person',
    name: 'Nikhil Verma',
    jobTitle: 'Software Engineer | AI & RAG Systems',
    url: 'https://nikhil2003verma.vercel.app/',
    description: profile.detailed,
    sameAs: [
      'https://github.com/NIKHIL0VERMA',
      'https://linkedin.com/in/nikhil2003verma',
      'https://leetcode.com/nikhil2003verma',
      'https://play.google.com/store/apps/dev?id=5011720043750659265',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Retrieval-Augmented Generation',
      'Agentic AI Systems',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Android Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'KCC Institute of Technology and Management',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      educationalLevel: 'Bachelor',
      name: 'BTech in CSE (AI&ML)',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projectsData.map((project, index) => {
      const platform = project.technologies?.includes('Android')
        ? 'Android'
        : project.technologies?.includes('React Native')
          ? 'Web, Android'
          : 'Web';

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          '@id': `https://nikhil2003verma.vercel.app/#project-${project.title
            .toLowerCase()
            .replace(/\s+/g, '-')}`,
          name: project.title,
          description: project.description,
          url:
            project.links?.preview ||
            project.links?.github ||
            project.links?.npm,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: platform,

          creator: {
            '@type': 'Person',
            name: 'Nikhil Verma',
            '@id': 'https://nikhil2003verma.vercel.app/#person',
          },
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </>
  );
};
