import React from "react";
import { getDoc, listDocSlugs } from "@/lib/docs";
import { getToc } from "@/lib/toc";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import type { Metadata } from "next";
import { notFound } from "next/navigation"; // 👈 import this
import TutorialDocsToc from "@/modules/TutorialModule/components/TutorialDocsToc";
// import TutorialBreadcrumb from "@/modules/TutorialModule/components/TutorialBreadcrumb";

// Pre-generate static routes
export async function generateStaticParams() {
  const slugs = await listDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Optional: SEO from frontmatter
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const doc = await getDoc(params.slug);
    return {
      title: doc?.data?.title ?? params.slug,
      description: doc?.data?.description ?? undefined,
    };
  } catch {
    notFound(); // 👈 render Next’s default 404 during metadata build
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  let doc: Awaited<ReturnType<typeof getDoc>>;
  try {
    doc = await getDoc(params.slug);
    if (!doc) notFound(); // in case getDoc returns null/undefined
  } catch {
    notFound(); // 👈 render Next’s default 404 if file missing/read failed
  }

  const toc = getToc(doc.content, { minDepth: 1, maxDepth: 4 });

  return (
    <div className="mx-auto flex min-h-screen gap-8 px-4 py-8">
      <div className="grow">
        {/* <TutorialBreadcrumb /> */}
        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypePrism,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "append" }],
            ]}
          >
            {doc.content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Right sidebar TOC (sticky on large screens) */}
      <aside className="hidden lg:block w-72">
        <div className="sticky top-40 border-l max-h-[calc(100vh-12rem)] border-slate-700 pl-8 overflow-auto no-scrollbar">
          <TutorialDocsToc items={toc} />
        </div>
      </aside>
    </div>
  );
}
