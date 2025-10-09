// lib/docs.ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

// Adjust fields to your needs
export type DocFrontmatter = {
  title?: string;
  description?: string;
  date?: string; // ISO date as string (e.g., "2025-10-09")
  updated?: string; // optional last-updated
  tags?: string[]; // ["nextjs", "markdown"]
  draft?: boolean; // hide from production
  order?: number; // for sidebar sorting
  author?: string;
  keywords?: string[];
};

export type Doc = {
  slug: string;
  content: string;
  data: DocFrontmatter; // ← no more any
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
  return { slug, content, data: data as DocFrontmatter };
}
