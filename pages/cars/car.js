import styles from './Car.module.scss';

import Head from 'next/head';
import Layout from '../../src/components/layout/layout.comp';

import Swiper from '../../src/components/swiper/swiper.comp';

// Section imports

export default function Car() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Car Page</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className='wide'>
          <Swiper />
        </div>

        <div className='limitWidth'>
          <br />
          Model name
          <br />
          Trip start
          <br />
          Trip end
          <br />
          Separator
          <br />
          Disatance included
          <br />
          Separator
          <br />
          Insurance and protection
          <br />
          Main features with cute icons
          <br />
          Car description
          <br />
          Features with cute icons
          <br />
          Extras
          <br />
          Ratings and reviews
          <br />
          Pickup location
          <br />
          Share on facebook, Twitter, Instagram, email, copy to clipboard
          <br />
          Separator
          <br />
          Cancellation policy
          <br />
          Continue button:
          <br />
          Up to 992px: floating card on the bottom of the page with Continue -
          up to 992px
          <br />
          Above: same info goes to navbar
        </div>
      </div>
    </Layout>
  );
}
