export default function AssignmentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Assignments</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        A placeholder space for weekly tasks and submission links. You can replace this with your course assignments.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-sm">
        <li>Setup Project — ensure your environment runs a Next.js App Router site and can publish previews.</li>
        <li>Build a Personal Landing Page — use semantic HTML and tokens. Include a responsive layout.</li>
        <li>Add a Blog Post — create a dynamic route and link it from your homepage.</li>
      </ul>
    </div>
  )
}
