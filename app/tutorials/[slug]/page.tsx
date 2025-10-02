import { notFound } from "next/navigation"
import { getTutorial, buildToc } from "@/lib/tutorials"
import { TableOfContents } from "@/components/toc"

export default function TutorialDetailPage({ params }: { params: { slug: string } }) {
  const tutorial = getTutorial(params.slug)
  if (!tutorial) return notFound()

  const toc = buildToc(tutorial.sections)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">{tutorial.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{tutorial.description}</p>
      </div>

      <div className="grid gap-10 md:grid-cols-[1fr_260px]">
        <article className="prose max-w-none prose-headings:scroll-mt-24">
          {tutorial.sections.map((s) => {
            const id = s.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")
            return (
              <section key={id} className="mb-8">
                <h2 id={id} className="text-xl font-semibold">
                  {s.heading}
                </h2>
                <p className="mt-2 leading-relaxed">{s.body}</p>
              </section>
            )
          })}
        </article>

        <aside className="hidden md:block">
          <TableOfContents items={toc} />
        </aside>
      </div>
    </div>
  )
}
