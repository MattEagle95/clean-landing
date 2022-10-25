import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Page = {
  slug: string;
  layout?: string;
  title?: string;
  description?: string;
  mdxSource: MDXRemoteSerializeResult;
};
