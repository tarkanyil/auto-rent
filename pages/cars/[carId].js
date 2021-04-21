import styles from './Car.module.scss';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import Head from 'next/head';
import Layout from '../../src/components/layout/layout.comp';

import Divider from '@material-ui/core/Divider';

import { carData } from '../../src/utils/constants';

import Swiper from '../../src/components/swiper/swiper.comp';

// Section imports

const Car = ({ model, id, imgUrl, parameter }) => {


  return (
    <Layout suppressHydrationWarning={true}>
      <div className={styles.container}>
        <Head>
          <title>XiCars - {model}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className='wide'>
          <Swiper source={carData} />
        </div>

        {process.browser &&
        <div className='limitWidth'>
          <h1>{model}</h1>
          <br />
          Trip start
          <br />
          Trip end
          <br />
          <Divider />
          Disatance included
          <br />
          <Divider />
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
          <Divider />
          Cancellation policy
          <br />

          Extras
          <br />
          Ratings and reviews
          <br />
          Pickup location
          <br />
          Share on facebook, Twitter, Instagram, email, copy to clipboard
          <br />
          <Divider />
          Cancellation policy
          <br />

          Continue button:
          <div className={styles.floatingCard}>
            <div className={styles.leftSide}>
              <p className={styles.perday}>euro/day</p>
              <p className={styles.totalCost}>total cost</p>
            </div>
            <div className={styles.rightSide}>
              <Link href=''>
                <Button className={styles.button} variant='contained'>
                  Continue
                </Button>
              </Link>
            </div>
          </div>
          <br />
          Above: same info goes to navbar
        </div>
        }
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const parameter = context.params.carId;

  const actualCar = carData.find((car) => car.id === parameter);

  const model = actualCar.name;
  const id = actualCar.id;
  const imgUrl = actualCar.imgUrl;

  return {
    props: {
      model,
      id,
      imgUrl,
      parameter
    }
  };
};

export default Car;
