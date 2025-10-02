import Link from "next/link"

export function SiteFooter() {
  return (
    <div className="mt-16 border-t bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold">More</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/tutorials" className="hover:underline">
                Playground
              </Link>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-end md:justify-end">
          <p className="text-xs text-muted-foreground">Copyright © {new Date().getFullYear()} Bismit BEM Fasilkom UI.</p>
        </div>
      </div>
    </div>
  )
}
