import React from "react";
import { getDoc, listDocSlugs } from "@/lib/docs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

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
  const doc = await getDoc(params.slug);
  return {
    title: doc.data.title ?? params.slug,
    description: doc.data.description ?? undefined,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDoc(params.slug);

  return (
    <article className="min-h-screen prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
    </article>
  );
}
