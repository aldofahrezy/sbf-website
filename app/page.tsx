import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"

export default function HomePage() {
  return (
    <>
      <Hero
        title="Biro Bisnis dan Kemitraan"
        subtitle="Sekolah BEM Fasilkom 2025"
        actions={
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="rounded-full bg-primary text-primary-foreground">
              <Link href="/tutorials" aria-label="Go to tutorials">
                Tutorial
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/assignments" aria-label="Go to assignments">
                Assignments
              </Link>
            </Button>
          </div>
        }
      />
      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <article className="text-center">
          <img
            src="/images/student-coding-desk.png"
            alt="Easy to use illustration"
            className="mx-auto"
            height={140}
            width={240}
          />
          <h3 className="mt-6 text-lg font-semibold">Easy to Use</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Get started quickly using clear, step‑by‑step tutorials. No complex setup required.
          </p>
        </article>
        <article className="text-center">
          <img
            src="/images/mountain-illustration.png"
            alt="Focus on what matters illustration"
            className="mx-auto"
            height={140}
            width={240}
          />
          <h3 className="mt-6 text-lg font-semibold">Focus on What Matters</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We handle the boilerplate so you can learn modern website building concepts faster.
          </p>
        </article>
        <article className="text-center">
          <img
            src="/images/powered-by-react-illustration.png"
            alt="Powered by React illustration"
            className="mx-auto"
            height={140}
            width={240}
          />
          <h3 className="mt-6 text-lg font-semibold">Powered by React</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Built with Next.js and shadcn/ui for accessibility, performance, and clean design.
          </p>
        </article>
      </section>
    </>
  )
}