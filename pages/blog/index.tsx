import Head from 'next/head';

import { GetStaticPropsResult, NextPage } from 'next';
import { NotionAPI } from 'notion-client';

import { getPageInfo, Page, POSTS } from '@posts/notion';
import { Title, Container, Text } from '@components';

interface BlogProps {
  pages: Page[];
}

const Blog: NextPage<BlogProps> = ({}) => {
  return (
    <Container maxWidth={1200}>
      <Head>
        <title>Blog - Austin Sehorn</title>
        <meta property="og:title" content="Blog – Austin Sehorn" />
      </Head>
      <Container mb="3rem">
        <Title>Blog</Title>
        <Text textAlign="center"></Text>
      </Container>
    </Container>
  );
};

const notion = new NotionAPI();

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<BlogProps>
> => {
  const pages: Page[] = [];
  await Promise.all(
    Object.keys(POSTS).map(async (key) => {
      const { uri, date } = POSTS[key as keyof typeof POSTS];
      const page = await notion.getPage(uri);
      if (page) {
        const info = getPageInfo(page);
        if (info.title !== 'Blog') {
          pages.push({
            ...info,
            date,
            uri: `/blog/${key}`,
          });
        }
      }
    }),
  );

  return {
    props: {
      pages: pages.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    },
  };
};

export default Blog;
