import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

import { Main } from '../components/layout/main';
import { config } from '../config/config';
import { getAllPages, getPage } from '../lib/pages';
import { Page } from '../types/types';

export type IndexProps = {
  page: Page;
};

export default function Index({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Main layout={page.mdxSource.frontmatter?.layout as any}>
      <NextSeo
        title={page.mdxSource.frontmatter?.title}
        description={page.mdxSource.frontmatter?.description}
      />
      <Prose>
        <MDXRemote {...page.mdxSource} scope={config.app} />
      </Prose>
    </Main>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({
  params,
}) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  let slug;
  if (typeof params.slug === 'string') {
    slug = params.slug;
  } else if (params.slug.length > 0) {
    slug = params.slug[0];
  }

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const page = await getPage(slug);

  return { props: { page }, revalidate: 10 };
};

export const getStaticPaths = async () => {
  const pages = await getAllPages();
  const paths = pages.map((page) => ({ params: { slug: page.slug } }));

  return { paths, fallback: false };
};
