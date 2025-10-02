export type TutorialSection = {
  heading: string
  body: string
}

export type Tutorial = {
  slug: string
  title: string
  description: string
  sections: TutorialSection[]
}

export const tutorials: Tutorial[] = [
  {
    slug: "getting-started",
    title: "Getting Started: Next.js + shadcn/ui",
    description: "Spin up a learning-ready Next.js project and understand the folder structure.",
    sections: [
      {
        heading: "Project Overview",
        body:
          "You are working in a Next.js App Router environment. Pages live in the app/ directory and components in components/. " +
          "This course uses shadcn/ui components, Tailwind CSS v4, and accessible patterns.",
      },
      {
        heading: "Create Your First Page",
        body: "Add a new file at app/hello/page.tsx exporting a React component. Use semantic HTML (main, header, footer) and the Button component.",
      },
      {
        heading: "Styling with Tokens",
        body: "Use design tokens like bg-primary and text-foreground instead of raw colors. Keep the palette small and consistent.",
      },
    ],
  },
  {
    slug: "routing-and-links",
    title: "Routing and Links",
    description: "Learn dynamic routes, navigation, and shared layouts.",
    sections: [
      {
        heading: "App Router Basics",
        body: "Each folder under app/ forms part of the URL. A page.tsx file makes the route public. Use layout.tsx for shared UI.",
      },
      {
        heading: "Dynamic Routes",
        body: "Create folders like app/tutorials/[slug]/page.tsx to read the slug param. Always validate and handle not-found states.",
      },
      {
        heading: "Accessible Navigation",
        body: "Use nav elements and aria-current to indicate the active page. Ensure sufficient color contrast in dark/light modes.",
      },
    ],
  },
  {
    slug: "deploying-on-vercel",
    title: "Deploying on Vercel",
    description: "Publish your site and share it with classmates.",
    sections: [
      {
        heading: "Preview and Share",
        body: "Use the Preview in v0 to iterate. When ready, click Publish to deploy to Vercel. You can also connect GitHub.",
      },
      {
        heading: "Environment Variables",
        body: "When adding integrations (e.g., Supabase), set env vars in Project Settings. Client keys must be prefixed with NEXT_PUBLIC.",
      },
    ],
  },
]

export function getTutorial(slug: string) {
  return tutorials.find((t) => t.slug === slug)
}

export function buildToc(sections: TutorialSection[]) {
  return sections.map((s) => ({
    id: s.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title: s.heading,
  }))
}
