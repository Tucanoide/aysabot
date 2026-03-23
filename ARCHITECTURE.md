# Architecture Documentation - AySA Bot

This document outlines the technical stack and architectural principles for the AySA Bot project.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v16.2.1) - App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.2.2) with `@tailwindcss/postcss`
- **Database / ORM**: [Prisma](https://www.prisma.io/) (v5.22.0) with [PostgreSQL](https://www.postgresql.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Hostinger Sites](https://www.hostinger.com/)

## Architectural Principles

### Performance & Hosting (Hostinger)
- **Process Limit**: Optimized for a limit of ~200 concurrent processes.
- **Server Components First**: Prioritize Server Components for data fetching to minimize the overhead of Server Actions, which count as separate processes.
- **Prisma Singleton**: The Prisma client MUST be imported from `@/lib/prisma.ts` to avoid multiple connection pools.
- **Data Caching**: Use `unstable_cache` for relatively static data (revalidate every 1 hour).
- **Environment**: ESM based (`"type": "module"`).

### Code Quality
- **Dead Code**: Clean unused imports and unreachable logic proactively.
- **Logic Consolidation**: Abstract repetitive logic into `@/lib` or custom hooks in `@/hooks`.
- **Testing**:
    - **Frontend**: Vitest + React Testing Library.
    - **Automation**: Jest.
    - **Philosophy**: Prefer testing user behavior over technical implementation. Mock external APIs (n8n, Qdrant).

## Integration
- **n8n**: External automation tool used for complex workflows.

## Documentation
- Technical guides and API setups are stored in the `docs/` directory.
