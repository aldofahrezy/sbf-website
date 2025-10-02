import { tutorials } from "@/lib/tutorials"
import { TutorialCard } from "@/components/tutorial-card"

export default function TutorialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Tutorials</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Practical guides to help you and your classmates learn website building step by step.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((t) => (
          <TutorialCard key={t.slug} slug={t.slug} title={t.title} description={t.description} />
        ))}
      </div>
    </div>
  )
}
