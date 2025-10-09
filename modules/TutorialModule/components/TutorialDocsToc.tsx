// components/docs-toc.tsx
"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { TocItem } from "@/lib/toc";

const TutorialDocsToc = ({ items }: { items: TocItem[] }) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nav = document.getElementById("site-nav");
    if (nav)
      document.documentElement.style.setProperty(
        "--nav-h",
        `${nav.offsetHeight}px`
      );

    if (!items.length) return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the first heading that intersects near top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px 0px 0px", threshold: [0, 1] }
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <div className="mb-2 font-medium">On this page</div>
      <ul className="space-y-1">
        {items.map(({ id, text, depth }) => (
          <li key={id} className={clsx(depth === 3 && "pl-3")}>
            <a
              href={`#${id}`}
              className={clsx(
                "block rounded px-2 py-1 hover:underline",
                active === id ? "bg-slate-200 text-slate-800" : "text-slate-600"
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TutorialDocsToc;
