"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type TocItem = { id: string; title: string }

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id)
          })
        },
        { rootMargin: "0px 0px -60% 0px", threshold: 0.1 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  return (
    <nav aria-label="Table of contents" className="sticky top-20">
      <h4 className="mb-3 text-xs font-semibold text-muted-foreground">On this page</h4>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.id}>
            <Link
              href={`#${it.id}`}
              className={cn(
                "block rounded px-2 py-1 text-sm hover:bg-muted",
                active === it.id ? "bg-accent text-accent-foreground" : "",
              )}
            >
              {it.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
