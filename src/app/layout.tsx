import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Ivan Martinez — Full Stack Developer',
  description:
    'Tech Lead & Full Stack Developer specialized in React, Next.js, Node.js, NestJS and production-grade SaaS platforms.',
  keywords: [
    'Ivan Martinez',
    'Full Stack Developer',
    'Tech Lead',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'AWS',
  ],
  authors: [{ name: 'Ivan Martinez' }],
  openGraph: {
    title: 'Ivan Martinez — Full Stack Developer',
    description:
      'Tech Lead & Full Stack Developer. 4+ years building production SaaS platforms.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
