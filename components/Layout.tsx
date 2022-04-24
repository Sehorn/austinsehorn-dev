import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

import styles from '@styles/Home.module.css';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = 'Austin Sehorn',
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Austin Sehorn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Austin Sehorn" />
        <meta
          property="og:description"
          content="I'm a self-taught web developer with an interest in DevOps and Frontend development."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:site" content="@austin_sehorn" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="" />
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between" alignContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
