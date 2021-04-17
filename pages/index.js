import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

import Layout from '../src/components/layout/layout.comp';

// Section imports
import ImageSearch from '../src/sections/home-image-search/home-image-search.comp';
import OurCars from '../src/sections/home-our-cars/our-cars.comp';
import HowItWorks from '../src/sections/home-how-it-works/how-it-works.comp';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hochzeitsauto Köln</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <ImageSearch />

        <div style={{ height: '20px' }}></div>

        <div className={styles.limitWidth}>
          <OurCars />

        </div>

        <div className={styles.wide}>
          <div className={styles.limitWidth}>
            <HowItWorks />
          </div>
        </div>

        <div style={{ height: '150px' }}></div>

      </div>
    </Layout>
  );
}
