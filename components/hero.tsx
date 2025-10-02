import type { ReactNode } from "react"

export function Hero({
  title,
  subtitle,
  actions,
}: {
  title: string
  subtitle?: string
  actions?: ReactNode
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h1 className="text-pretty text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 text-balance text-base/relaxed opacity-90 md:text-lg">{subtitle}</p> : null}
        {actions ? <div className="mt-6 flex justify-center">{actions}</div> : null}
      </div>
    </section>
  )
}
