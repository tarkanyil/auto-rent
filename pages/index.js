import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

import Layout from '../src/components/layout/layout.comp';
import ImageSearch from '../src/sections/home-image-search/home-image-search.comp';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hochzeitsauto Köln</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {/* <ImageSearch /> */}
      </div>
    </Layout>
  );
}
