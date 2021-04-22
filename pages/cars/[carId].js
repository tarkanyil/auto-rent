import { useState } from 'react';
import styles from './Car.module.scss';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import PlaceholderIcon from '@material-ui/icons/AssignmentTurnedIn';
import Divider from '@material-ui/core/Divider';

import Head from 'next/head';
import Layout from '../../src/components/layout/layout.comp';
import ShowHide from '../../src/components/show-hide/show-hide.comp';

import { carData } from '../../src/utils/constants';

import Swiper from '../../src/components/swiper/swiper.comp';

// Section imports

const Car = ({ model, id, imgUrl, parameter }) => {
  const showBtnText = 'Show more';
  const [isDescFull, setIsDescFull] = useState(false);
  const [descBtn, setDescBtn] = useState(showBtnText);

  const distanceFee = 0.5;
  const kmIncluded = 300;
  const doors = 4;
  const seats = 5;
  const fuelConsumption = 'n/a';
  const fuelType = 'Electric';
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus, quibusdam optio accusamus minima vero sit magnam beatae ducimus ratione natus molestias? Aut suscipit, porro ullam cupiditate eligendi sapiente dignissimos aliquam dolores distinctio autem laborum, vitae odio pariatur a atque.';
  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5'
  ];
  const extras = [
    {
      title: 'Extra 1',
      desc: 'Extra 1 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 20,
      pricePer: 'trip'
    },
    {
      title: 'Extra 2',
      desc: 'Extra 2 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 15,
      pricePer: 'day'
    },
    {
      title: 'Extra 3',
      desc: 'Extra 3 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 25,
      pricePer: 'day'
    }
  ];

  

  let showHide = styles.showHideCont;
  if (!isDescFull) {
    showHide = `${styles.showHideCont} ${styles.shrink}`;
  }

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
        <div className='limitWidth'>
          <h1>{model}</h1>
          <br />
          Trip start
          <br />
          Trip end
          <br />
          x+ day discount
          <br />
          <br />
          <Divider />
          <div className={styles.distance}>
            <div className={styles.leftSide}>
              <p className={styles.sectionBig}>Distance included</p>
              <p className={styles.sectionSmall}>
                {distanceFee}&euro;/km fee for additional kilometers driven
              </p>{' '}
            </div>
            <div className={styles.rightSide}>
              <p className={styles.sectionBig}>{kmIncluded} km</p>
            </div>
          </div>
          <Divider />
          <div className={styles.featPrev}>
            {fuelType != 'Electric' && (
              <p className={styles.featPrevItem}>
                <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                {fuelConsumption}
              </p>
            )}
            <p className={styles.featPrevItem}>
              <PlaceholderIcon className={styles.featPrevIcon} /> {fuelType}
            </p>
            <p className={styles.featPrevItem}>
              <PlaceholderIcon className={styles.featPrevIcon} /> {doors} doors
            </p>
            <p className={styles.featPrevItem}>
              <PlaceholderIcon className={styles.featPrevIcon} /> {seats} seats
            </p>
          </div>
          <section className={styles.aboutCar}>
            <div className={styles.aboutCont}>
              <h3 className={styles.aboutTitle}>Description</h3>
              <ShowHide>
                <p className={styles.sectionBig}>{description}</p>
              </ShowHide>
            </div>

            <div className={styles.featCont}>
              <h3 className={styles.aboutTitle}>Features</h3>
              <ShowHide>
                <div className={styles.featItems}>
                  {features.map((feature, idx) => (
                    <p key={idx} className={styles.featItem}>
                      <PlaceholderIcon className={styles.featPrevIcon} />
                      {feature}
                    </p>
                  ))}
                </div>
              </ShowHide>
            </div>

            <div className={styles.extrasCont}>
              <h3 className={styles.aboutTitle}>Extras ({extras.length})</h3>
              <ShowHide>
              <p className={styles.sectionBig}>
                Add optional Extras to your trip at checkout.
              </p>
              <div className={styles.extraItems}>
                {extras.map((extra, idx) => (
                  <div className={styles.extraItemCont}>
                    <h3 className={styles.extraTitle}>{extra.title}</h3>
                    <p className={styles.extraDesc}>{extra.desc}</p>
                    <p className={styles.extraPrice}>
                      &euro;{extra.price}/{extra.pricePer}
                    </p>
                    {idx != extras.length - 1 && (
                      <Divider className={styles.divider} />
                    )}
                  </div>
                ))}
              </div>
              </ShowHide>
            </div>

            <div className={styles.aboutCont}>
              <h3 className={styles.aboutTitle}>Guidelines</h3>
              <ShowHide>
                <p className={styles.sectionBig}>{description}</p>
              </ShowHide>
            </div>
          </section>
          
          <Button className={styles.favoritesButton} variant='outlined'>
            <HeartIcon className={styles.heartIcon} /> Add to favorites
          </Button>
          <Divider />
          {/* <Link href='/'> */}
          <p className={styles.cancel}>Cancellation Policy</p>
          {/* </Link> */}
          <br />
          <div className={styles.floatingCard}>
            <div className={styles.leftSide}>
              <p className={styles.perDay}>&euro;/day</p>
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
        </div>
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
