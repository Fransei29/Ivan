export const profile = {
  name: 'Ivan Martinez',
  alias: 'Elvis',
  title: 'Full Stack Developer · Tech Lead',
  location: 'Cochabamba, Bolivia',
  email: '',
  linkedin: 'https://www.linkedin.com/in/ivan-martinez',
  github: '',
  tagline: 'Building production-grade SaaS platforms end-to-end.',
  summary: [
    'Full Stack Developer with 4+ years building production-grade SaaS platforms, specializing in React, Node.js, Next.js, and NestJS.',
    'Currently Tech Lead at RedLizard, owning the end-to-end architecture of a multi-tenant document management platform built from scratch.',
    'I work across the full stack — from PostgreSQL schemas and NestJS microservices to React/Next.js frontends — and I\'m comfortable owning infrastructure: deployments on Linux, AWS (Amplify, Elastic Beanstalk), CI/CD pipelines, and third-party integrations.',
  ],
};

export const highlights = [
  {
    title: 'Real-time persistent chat',
    detail:
      'Built with Firestore, supporting conversation continuity across workflow stages (bid → contract → active work) on a complex multi-role platform.',
  },
  {
    title: 'Dynamic Stripe billing engine',
    detail:
      'Tier-based pricing algorithm for variable driver counts, deferred charge scheduling, and invoice snapshots in PostgreSQL.',
  },
  {
    title: 'Multi-stage email notification pipeline',
    detail:
      'Scheduler + queue + retry logic for a cross-border real estate platform (US & Canada), with country-specific identity verification & bank auth flows.',
  },
  {
    title: 'Replicated full AWS production for staging',
    detail:
      'From scratch: Amplify, Elastic Beanstalk, RDS, SSL, DNS routing.',
  },
];

export const stack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'TypeORM', category: 'Database' },
  { name: 'Prisma', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Firestore', category: 'Database' },
  { name: 'AWS', category: 'Infra' },
  { name: 'Docker', category: 'Infra' },
  { name: 'Linux', category: 'Infra' },
  { name: 'CI/CD', category: 'Infra' },
  { name: 'Cloudflare', category: 'Infra' },
  { name: 'Keycloak', category: 'Infra' },
  { name: 'Stripe', category: 'Integrations' },
  { name: 'Twilio', category: 'Integrations' },
  { name: 'Postmark', category: 'Integrations' },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  mode: string;
  description: string;
  projects?: {
    name: string;
    duration?: string;
    summary: string;
    bullets: string[];
    stack: string[];
  }[];
  bullets?: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Redlizard Studioz Inc.',
    role: 'Software Engineer — Tech Lead',
    period: 'Sep 2025 — Present',
    location: 'Canada · Remote',
    mode: 'Full-time',
    description:
      'Built a document management SaaS for heavy transport companies from scratch as Full Stack developer. Promoted to Tech Lead after 3 months, owning architecture, business logic, and production infrastructure.',
    bullets: [
      'Designed multi-tenant architecture with per-company subdomain isolation via Cloudflare, ensuring complete data segregation between tenants.',
      'Built a dynamic billing engine with Stripe Invoices: tier-based pricing algorithm based on active/new/archived driver counts, 3-day deferred charge scheduling, payment method management, and invoice snapshots in DB.',
      'Implemented SMS + email notification pipeline using Twilio and Postmark, queued and retried via Redis and scheduled jobs.',
      'Executed legacy data migration: analyzed denormalized legacy tables and mapped them to the new modular relational schema.',
      'Set up production deployment on a bare Linux server using pm2, and integrated Keycloak for identity and access management.',
    ],
    stack: [
      'React',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'Stripe',
      'Twilio',
      'Postmark',
      'Keycloak',
      'Cloudflare',
      'Linux',
      'CI/CD',
      'Docker',
      'PM2',
    ],
  },
  {
    company: 'Nacer Digital',
    role: 'Software Engineer',
    period: 'Feb 2025 — Jan 2026',
    location: 'Mexico · Remote',
    mode: 'Full-time',
    description: 'Worked on two products over an 11-month engagement.',
    projects: [
      {
        name: 'Freelance Marketplace Platform (Upwork-like)',
        duration: '~6 months',
        summary: 'Multi-role platform with complex workflows.',
        bullets: [
          'Built a real-time chat with Firestore supporting full conversation persistence across workflow stages (bid → contract → active work) for both projects and services in a multi-role system.',
          'Implemented a multi-role rating system (users can be both client and service provider): star distribution chart, weighted average, and last-5-reviews display, parity with Upwork\'s rating UX.',
          'Developed milestones, time logs, dispute resolution flows with an admin decision panel, and service provider profile pages.',
          'Triaged and resolved legacy bugs across a complex multi-role codebase.',
        ],
        stack: [
          'React',
          'Next.js',
          'NestJS',
          'PostgreSQL',
          'TypeORM',
          'BullMQ',
          'Firestore',
          'Stripe',
          'Google OAuth',
          'Docker',
          'Bitbucket Pipelines',
          'Linux',
          'CI/CD',
        ],
      },
      {
        name: 'Field Technician Management Platform',
        duration: '~4 months',
        summary: 'Operations platform with AWS-based infrastructure.',
        bullets: [
          'Implemented an event-queue table pattern: DB table used as a dynamic action store, polled on a schedule, executed, and cleared on success — a flexible side-effect pattern applicable to any domain event.',
          'Replicated full AWS production environment for staging: Amplify (frontend), Elastic Beanstalk (backend), RDS, SSL certificate registration, and DNS routing built from scratch.',
        ],
        stack: [
          'React',
          'Next.js',
          'NestJS',
          'PostgreSQL',
          'TypeORM',
          'BullMQ',
          'Stripe',
          'AWS (Amplify, Elastic Beanstalk)',
          'Docker',
          'Bitbucket Pipelines',
        ],
      },
    ],
  },
  {
    company: 'IVENTIVA',
    role: 'Software Engineer',
    period: 'Apr 2023 — Feb 2025',
    location: 'Cochabamba, Bolivia · On-site',
    mode: 'Full-time',
    description: 'Worked across two long-term product engagements.',
    projects: [
      {
        name: 'Real Estate Platform (US & Canada)',
        duration: '~16 months',
        summary:
          'SaaS platform for land and custom home sales built on microservice architecture with dual frontends (user + admin), deployed on Heroku.',
        bullets: [
          'Designed and built a multi-stage notification pipeline: 3 types × 3 retries = up to 9 scheduled emails per user — using schedulers, jobs, and queues — covering identity verification (country-specific providers for US/CA), bank authentication, and mortgage capacity flows.',
          'Used multiple third-party services for identity verification, bank data validation, and creditworthiness evaluation, handling different providers per country to implement features.',
          'Managed Heroku deployments, DB migrations, log monitoring, and production incident response.',
        ],
        stack: [
          'React',
          'Next.js',
          'Gatsby',
          'NestJS',
          'GraphQL',
          'PostgreSQL',
          'Sequelize',
          'Heroku',
        ],
      },
      {
        name: 'Charity Fundraising Platform (Ruby on Rails)',
        duration: '~7 months',
        summary:
          'Web application for goal-based charity campaigns with product catalogs and donor flows.',
        bullets: [
          'Reduced a critical query from 28s → 3.5s (~87% improvement) by redesigning table structure, replacing N+1 ORM calls with optimized queries, and implementing materialized/dynamic views.',
          'Modified Ruby gems to adapt third-party library behavior to specific business requirements.',
          'Handled UI improvements, business logic fixes, and Heroku production support.',
        ],
        stack: ['Ruby on Rails', 'PostgreSQL', 'ActiveRecord', 'Heroku'],
      },
    ],
  },
  {
    company: 'Fundación Jala',
    role: 'Full Stack Developer — Intern',
    period: 'Jan 2022 — Jan 2023',
    location: 'Cochabamba, Bolivia',
    mode: 'Apprenticeship',
    description:
      'Strengthened foundations in software engineering through real project work applying SOLID principles, design patterns, functional programming, and clean architecture in Agile/Scrum teams.',
    stack: [
      'JavaScript',
      'React',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
      'GitLab CI/CD',
    ],
  },
];

export const education = {
  institution: 'Universidad Mayor de San Simón',
  degree: 'Computer Science',
  period: '2017 — 2022',
};

export const metrics = [
  { value: '4+', label: 'Years shipping SaaS' },
  { value: '87%', label: 'Query time reduction (28s → 3.5s)' },
  { value: '9x', label: 'Staged retries in notification pipeline' },
  { value: '3mo', label: 'From dev to Tech Lead at RedLizard' },
];
