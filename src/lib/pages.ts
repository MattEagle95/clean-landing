import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';

import { Page } from '../types/types';

const pagesDir = join(process.cwd(), 'data/pages');

export const getPageSlugs = async (): Promise<string[]> => {
  return await fs.readdir(pagesDir);
};

export const getAllPages = async (): Promise<Page[]> => {
  const pages = [];
  const slugs = await getPageSlugs();

  for await (const slug of slugs) {
    pages.push(await getPage(slug.replace('.mdx', '')));
  }

  return pages;
};

export const getPage = async (slug: string): Promise<Page> => {
  const fullPath = join(pagesDir, slug + '.mdx');
  const content = await fs.readFile(fullPath, 'utf8');
  const mdxSource = await serialize(content, { parseFrontmatter: true });

  return {
    slug,
    title: mdxSource.frontmatter?.title,
    description: mdxSource.frontmatter?.description,
    mdxSource,
  };
};
