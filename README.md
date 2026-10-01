# Fetan Home Connect

Fetan Home Connect is a React-based marketplace landing page for connecting homeowners with trusted renovation and home-maintenance professionals. It presents service categories, featured experts, ratings, pricing, response times, and a simple explanation of how homeowners can find and work with professionals.

> **Project status:** The current repository is a frontend-focused showcase/prototype. Expert profiles and marketplace actions are represented with static UI data; authentication, messaging, quote requests, and live search are not yet wired to backend workflows.

## Features

- Hero section with calls to action for finding experts and getting started
- Home-service categories for browsing renovation and maintenance work
- Featured expert cards with:
  - Specialty and location
  - Ratings and review counts
  - Verification status
  - Starting hourly price
  - Completed jobs and response time
  - Professional badges
- “How it works” section describing the customer journey
- Responsive layout for desktop and mobile screens
- Reusable UI primitives based on shadcn/ui and Radix UI
- Supabase project configuration included for future backend integration

## Tech stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)
- [TanStack Query](https://tanstack.com/query/latest) for client-side data-fetching infrastructure
- [Supabase](https://supabase.com/) client dependency and project configuration
- [Lucide React](https://lucide.dev/) for icons
- React Hook Form and Zod for form handling and validation infrastructure

## Project structure

```text
.
├── public/                 Static public assets
├── src/
│   ├── assets/             Application images, including the hero image
│   ├── components/         Page sections and reusable UI components
│   │   └── ui/              shadcn/ui primitives
│   ├── hooks/               Shared React hooks
│   ├── integrations/       External-service integration code
│   ├── lib/                Shared utilities
│   ├── pages/              Route-level pages
│   │   ├── Index.tsx        Main landing page
│   │   └── NotFound.tsx     Fallback 404 page
│   ├── App.tsx              Providers and application routes
│   ├── main.tsx             Browser entry point
│   ├── App.css              App-level styles
│   └── index.css            Global styles and Tailwind layers
├── supabase/                Supabase local configuration
├── index.html               Vite HTML entry point
├── package.json              Scripts and dependencies
├── tailwind.config.ts       Tailwind theme configuration
├── vite.config.ts            Vite configuration
└── components.json           shadcn/ui configuration
```

The application starts in `src/main.tsx`, which mounts `App`. `src/App.tsx` provides TanStack Query, tooltip, toast, and browser-router providers, then maps `/` to `src/pages/Index.tsx`. The homepage composes the `Header`, `Hero`, `ServiceCategories`, `ExpertShowcase`, `HowItWorks`, and `Footer` components.

## Getting started

### Prerequisites

- Node.js 18 or newer recommended
- npm, or another compatible package manager

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview a production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Backend and environment configuration

The project includes the `@supabase/supabase-js` dependency and a `supabase/config.toml` file for future backend features. The currently visible homepage does not require Supabase credentials to render. When Supabase services are connected, add the required Vite environment variables to a local `.env` file and do not commit secrets:

```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Use the variable names expected by the Supabase client integration when implementing or enabling backend functionality.

## Development notes

- The main homepage composition is in `src/pages/Index.tsx`.
- Featured professionals are currently defined as static data in `src/components/ExpertShowcase.tsx`.
- The `Message`, `Get Quote`, `Find Experts`, and `Get Started` controls are presentational until application workflows are added.
- Add custom routes in `src/App.tsx` before the catch-all `*` route.
- Keep reusable design primitives in `src/components/ui/` and page-specific sections in `src/components/`.

## Deployment

This is a standard Vite application and can be deployed to any static hosting provider that supports client-side single-page applications. Configure the host to serve `index.html` for unknown routes so React Router can handle navigation. The project was initially generated through Lovable and can also be published from the associated Lovable project.

## License

No license has been specified for this repository yet.
