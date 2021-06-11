import { useState } from 'react';
import styles from './Car.module.scss';
import Link from 'next/link';

import dbConnect from '../../src/utils/dbConnect';
import CarModel from '../../src/models/Auto';
import Attribute from '../../src/models/Attribute';

import calcRentPrice from '../../src/utils/calcRentPrice';

// temp from here
// import addNewAttribute from '../../src/utils/addNewAttribute';
// import addNewCar from '../../src/utils/addNewCar';
// temp until here

import Button from '@material-ui/core/Button';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import PlaceholderIcon from '@material-ui/icons/AssignmentTurnedIn';
import Divider from '@material-ui/core/Divider';

import Head from 'next/head';
import Layout from '../../src/components/layout/layout.comp';
import ShowHide from '../../src/components/show-hide/show-hide.comp';
import Input from '../../src/components/input/input.comp';

import { carData } from '../../src/utils/constants';

import Swiper from '../../src/components/swiper/swiper.comp';

// div imports

const Car = ({ car, featuresMap, extrasMap }) => {
  const distanceFee = 0.5;
  const kmIncluded = 300;

  // map pre-defined feature names of the car to readable display names
  const feat = Object.entries(car.features);
  const featWithoutId = feat.filter((feat) => feat[0] != '_id');
  const features = featWithoutId.map((feat) => {
    const feature = featuresMap.find(({ name }) => name === feat[0]);
    return feature.displayName;
  });

  const additionalFeatures = car.additionalFeatures;

  // add descrption and display name to extra data stored on the car document
  const extras = car.extras.map((extra) => {
    // find the desciption record with the matching name
    const foundRecord = extrasMap.find(({ name }) => name === extra.name);
    const displayName = foundRecord.displayName;
    const description = foundRecord.description;
    const result = { ...extra, displayName, description };
    return result;
  });

  //calculate rent prices based on rental length
  const lengthRent = 14;
  const priceArray = car.prices;
  const rentPrice = calcRentPrice({ priceArray, lengthRent });
  console.log(rentPrice);

  const ReservationBox = ({ mobile }) => (
    <div>
      <div className={styles.dateTimeCont}>
        <Input mobile={mobile} />
      </div>
      <Link href=''>
        <Button className={styles.contButtonDesktop} variant='contained'>
          Continue
        </Button>
      </Link>
      {/* <br />
    x+ day discount */}
      <Divider />
      <div className={styles.distance}>
        <div>
          <p className={styles.sectionBig}>Distance included</p>
          <p className={styles.sectionSmall}>
            {distanceFee}&euro;/km fee for additional kilometers driven
          </p>{' '}
        </div>
        <div className={styles.rightSide}>
          <p className={styles.sectionBig}>{rentPrice.includedKm} km</p>
        </div>
      </div>
      <Divider />
    </div>
  );

  const Heading = () => (
    <>
      <h1>
        {car.brand} {car.model}
      </h1>
      <h3 className={styles.subtitle}>{car.subtitle}</h3>
    </>
  );

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>
            XiCars - {car.brand} {car.model}
          </title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className={`${styles.swiper} wide`}>
          <Swiper source={carData} />
        </div>

        <div className='limitWidth'>
          <div className={styles.mobTab}>
            <Heading />
          </div>

          <div className={styles.mobTab}>
            <ReservationBox />
          </div>

          <div className={styles.infoFavLinksBox}>
            <div className={styles.infoBox}>
              <div className={styles.infoBoxTopDesktop}>
                <div className={styles.Desktop}>
                  <Heading />
                </div>
                <div className={styles.featPrev}>
                  {car.featurePreview.fuelType != 'Electric' && (
                    <p className={styles.featPrevItem}>
                      <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                      {car.featurePreview.consumptionLiterPer100km} L/100km
                    </p>
                  )}
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                    {car.featurePreview.fuelType}
                  </p>
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                    {car.featurePreview.doors} doors
                  </p>
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                    {car.featurePreview.seats} seats
                  </p>
                </div>
              </div>

              <div className={styles.aboutCar}>
                <div className={styles.aboutCont}>
                  <h3 className={styles.aboutTitle}>Description</h3>

                  <div className={styles.showHide}>
                    <ShowHide height='L'>
                      <p className={styles.sectionBig}>{car.description}</p>
                    </ShowHide>
                  </div>
                </div>

                <div className={styles.featCont}>
                  <h3 className={styles.aboutTitle}>Features</h3>
                  <div className={styles.showHide}>
                    <ShowHide height='s'>
                      <div className={styles.featItems}>
                        {features.map((feature, idx) => (
                          <p key={idx} className={styles.featItem}>
                            <PlaceholderIcon className={styles.featPrevIcon} />
                            {feature}
                          </p>
                        ))}
                        {additionalFeatures.map((feature, idx) => (
                          <p key={idx} className={styles.featItem}>
                            <PlaceholderIcon className={styles.featPrevIcon} />
                            {feature}
                          </p>
                        ))}
                      </div>
                    </ShowHide>
                  </div>
                </div>

                <div className={styles.extrasCont}>
                  <h3 className={styles.aboutTitle}>
                    Extras ({extras.length})
                  </h3>
                  <div className={styles.showHide}>
                    <ShowHide height='s'>
                      <p className={styles.sectionBig}>
                        Add optional Extras to your trip at checkout.
                      </p>
                      <div className={styles.extraItems}>
                        {extras.map((extra, idx) => (
                          <div key={idx} className={styles.extraItemCont}>
                            <h3 className={styles.extraTitle}>
                              {extra.displayName}
                            </h3>
                            <p className={styles.extraDesc}>
                              {extra.description}
                            </p>
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
                </div>

                <div className={styles.aboutCont}>
                  <h3 className={styles.aboutTitle}>Guidelines</h3>
                  <div className={styles.showHide}>
                    <ShowHide height='s'>
                      <p className={styles.sectionBig}>{car.guidelines}</p>
                    </ShowHide>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.layoutRightSide}>
              <div className={styles.Desktop}>
                <div className={styles.leftSide}>
                  <p className={styles.perDay}>
                    {rentPrice.pricePerDay}&euro;/day
                  </p>
                  <p className={styles.totalCost}>
                    {rentPrice.priceTotal}&euro; est. total + extras
                  </p>
                </div>
                <Divider className={styles.divider} />
                <ReservationBox mobile='true' />
              </div>

              <div className={styles.favLinksBox}>
                <Button className={styles.favoritesButton} variant='outlined'>
                  <HeartIcon className={styles.heartIcon} /> Add to favorites
                </Button>
                <Divider />
                {/* <Link href='/'> */}
                <p className={styles.cancel}>Cancellation Policy</p>
                {/* </Link> */}
              </div>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <div className={styles.leftSide}>
              <p className={styles.perDay}>{rentPrice.pricePerDay}&euro;/day</p>
              <p className={styles.totalCost}>
                {rentPrice.priceTotal}&euro; est. total + extras
              </p>
            </div>
            <div className={styles.rightSide}>
              <Link href=''>
                <Button className={styles.contButton} variant='contained'>
                  Continue
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.navBarCard}>
            <div className={styles.navBarCardCost}>
              <p className={styles.perDay}>{rentPrice.pricePerDay}&euro;/day</p>
              <p className={styles.totalCost}>
                {rentPrice.priceTotal}&euro; est. total + extras
              </p>
            </div>
            <div className={styles.rightSide}>
              <Link href=''>
                <Button
                  className={styles.navBarCardContButton}
                  variant='contained'>
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

export const getStaticProps = async ({ params }) => {
  await dbConnect();

  // get the data of the actual car
  const path = params.carId;
  console.log(path);

  const result = await CarModel.find(
    {
      path: path
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('data retreived from getStaticProps on car page');
      }
    }
  ).lean();

  const car = result[0];

  // console.log(car);

  car._id = car._id.toString();
  car.prices.forEach((item) => (item._id = item._id.toString()));
  car.extras.forEach((item) => (item._id = item._id.toString()));
  car.features._id = car.features._id.toString();

  // get the attribute mapping data
  const attributeResult = await Attribute.find({});

  const attributes = attributeResult.map((doc) => {
    const attribute = doc.toObject();
    attribute._id = doc._id.toString();
    return attribute;
  });

  const featuresMap = attributes.filter((doc) => doc.type === 'feature');
  const extrasMap = attributes.filter((doc) => doc.type === 'extra');

  // console.log(extrasMap);

  return {
    props: {
      car,
      featuresMap,
      extrasMap
    }
  };
};

export const getStaticPaths = async () => {
  // query from the constants file
  // const paths = carData.map((car) => {
  //   const carId = car.id;
  //   return { params: { carId } };
  // });

  await dbConnect();

  // addNewAttribute();

  const result = await CarModel.find((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('data retreived from getStaticPaths on car page');
    }
  }).lean();

  const paths = result.map((car) => {
    const carId = car.path;
    return { params: { carId } };
  });

  return { paths, fallback: true };
};

export default Car;
