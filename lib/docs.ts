// lib/docs.ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

export type Doc = {
  slug: string;
  content: string;
  data: Record<string, any>; // frontmatter
};

export async function listDocSlugs(): Promise<string[]> {
  const files = await fs.readdir(DOCS_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getDoc(slug: string): Promise<Doc> {
  const filePath = path.join(DOCS_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);
  return { slug, content, data };
}
