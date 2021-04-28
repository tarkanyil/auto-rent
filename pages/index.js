import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import dbConnect from '../src/utils/dbConnect';
import CarModel from '../src/models/Auto';

import styles from '../styles/Home.module.scss';

import Layout from '../src/components/layout/layout.comp';

// Section imports
import ImageSearch from '../src/sections/home-image-search/home-image-search.comp';
import OurCars from '../src/sections/home-our-cars/our-cars.comp';
import HowItWorks from '../src/sections/home-how-it-works/how-it-works.comp';
import About from '../src/sections/about/about.comp';

export default function Home({ cars }) {
  useEffect(() => {}, []);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hochzeitsauto Köln</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <ImageSearch />

        {/* <div style={{ height: '20px' }}></div> */}

        <div className='limitWidth'>
          <HowItWorks />
        </div>

        <div className='wide'>
          <div className='limitWidth'>
            <OurCars cars={cars} />
          </div>{' '}
        </div>

        <div className='limitWidth'>
          <About />
        </div>

        {/* <div style={{ height: '150px' }}></div> */}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  await dbConnect();

  // get the data of all cars
  const result = await CarModel.find({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('data retreived from getStaticProps on the index page');
    }
  }).lean();

  const cars = result.map((car) => {
    const actualCar = { path: car.path, image: car.images[0], brand: car.brand, model: car.model };
    return actualCar;
  });

  // console.log(cars);

  return {
    props: {
      cars
    }
  };
};
