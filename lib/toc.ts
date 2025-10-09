// lib/toc.ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import type { Root, Heading } from "mdast";

export type TocItem = {
  id: string;
  text: string;
  depth: 1 | 2 | 3 | 4 | 5 | 6;
};

export type TocOptions = {
  minDepth?: TocItem["depth"];
  maxDepth?: TocItem["depth"];
};

export function getToc(
  markdown: string,
  { minDepth = 2, maxDepth = 3 }: TocOptions = {}
): TocItem[] {
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(markdown) as Root;
  const slugger = new GithubSlugger(); // same algo as rehype-slug
  const toc: TocItem[] = [];

  visit(tree, "heading", (node: Heading) => {
    const depth = node.depth; // already 1|2|3|4|5|6 from mdast
    if (depth < minDepth || depth > maxDepth) return;

    const text = toString(node).trim();
    if (!text) return;

    const id = slugger.slug(text);
    toc.push({ id, text, depth });
  });

  return toc;
}
