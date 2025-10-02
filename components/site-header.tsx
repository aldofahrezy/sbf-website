"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const pathname = usePathname()
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm rounded-md transition-colors",
        pathname === href ? "bg-accent text-accent-foreground" : "hover:bg-muted",
      )}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
    </Link>
  )
  return (
    <div className="border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-full bg-primary" aria-hidden />
          <span className="text-sm md:text-base">SBF Bismit 2025</span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Primary">
          <NavLink href="/tutorials" label="Tutorial" />
          <NavLink href="/assignments" label="Assignments" />
          <Button asChild size="sm" className="ml-1 bg-primary text-primary-foreground">
            <Link href="/tutorials">Start Learning</Link>
          </Button>
        </nav>
      </div>
    </div>
  )
}
