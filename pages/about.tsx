import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiJavascript,
  SiVercel,
  SiArchlinux,
  SiFigma,
  SiWordpress,
} from 'react-icons/si';
import { getPosts, Post } from '@posts';

interface AboutProps {
  experiences: Post[];
}

const About = ({}: AboutProps): JSX.Element => {
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        Icon: SiTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiNextdotjs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },

      {
        Icon: SiGooglecloud,
        url: 'https://cloud.google.com/',
      },
      {
        Icon: SiTailwindcss,
        url: 'https://tailwindcss.com/',
      },
      {
        Icon: SiThreedotjs,
        url: 'https://threejs.org/',
      },
      {
        Icon: SiVercel,
        url: 'https://vercel.com/',
      },
      {
        Icon: SiArchlinux,
        url: 'https://archlinux.org/',
      },
      {
        Icon: SiFigma,
        url: 'https://www.figma.com/',
      },
      {
        Icon: SiWordpress,
        url: 'https://wordpress.org/',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          About
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>Hey, I&apos;m Austin!</Text>
          <Text>
            I recently made the move from the midwest to Seattle, WA. During my
            free time I love to work on my car, play video games, and learn new
            tech!
          </Text>
          <Text>
            I have enjoyed working in small business environments throughout my
            career and am now looking to make the jump into an enterprise
            environment. My personal and professional experiences have taught me
            that:
            <ul>
              <li>I can successfully lead and operate a small business</li>
              <li>I put the customer at the center of all that I do</li>
              <li>I educate, refine, and drive myself to be a better person</li>
              <li>I am constantly learning because I never settle</li>
              <li>I have a good gut instinct but seek data for my decisions</li>
            </ul>
            I would love to work with a group of like minded, forward thinking
            people, with the goal of truly making an impactful product. A
            best-fit would be a remote first team that values honesty, its
            people, and its purpose above all else. Internal growth is very
            important to me and the ability to learn and test new things while
            working is a huge bonus.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use
        </Title>
        <Grid
          gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      ></Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  experiences.sort((a, b) =>
    b.data.date.toString().localeCompare(a.data.date.toString()),
  );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
