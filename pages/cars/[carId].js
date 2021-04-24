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
import Input from '../../src/components/input/input.comp';

import { carData } from '../../src/utils/constants';

import Swiper from '../../src/components/swiper/swiper.comp';

// div imports

const Car = ({ model, id, imgUrl, parameter }) => {
  const showBtnText = 'Show more';
  const [isDescFull, setIsDescFull] = useState(false);
  const [descBtn, setDescBtn] = useState(showBtnText);

  const subtitle = 'Some cool subtitle';
  const distanceFee = 0.5;
  const kmIncluded = 300;
  const doors = 4;
  const seats = 5;
  const fuelConsumption = 'n/a';
  const fuelType = 'Electric';
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque eligendi ut explicabo minus fugit est suscipit quas cumque. Repellat perferendis tenetur id, tempore, quos excepturi fuga, veritatis debitis nihil distinctio accusamus aut aliquid commodi eveniet saepe nulla officiis quo libero cupiditate doloribus deserunt ut. Nam dolor quod iste, quisquam temporibus quasi aperiam eveniet consequatur, quam labore minima impedit perferendis et unde, error odit ratione. Omnis culpa ad aliquid suscipit veniam rem dolores at debitis inventore facere soluta doloremque autem repellendus eius, incidunt assumenda. Porro numquam totam enim praesentium delectus saepe earum veniam, laudantium facilis recusandae quos eveniet omnis ex ipsam rerum doloribus doloremque minima? Ipsam facere ut impedit perspiciatis incidunt ea, cumque commodi tempora repellat consequuntur et aut, at repudiandae, natus maiores? Cupiditate, consectetur? Deleniti consequuntur ex, atque necessitatibus praesentium excepturi culpa sapiente in dolor tenetur est ullam sed doloremque ipsam consectetur iste earum odio aut unde quia facilis? Ducimus voluptates incidunt voluptatibus vitae laboriosam. Tempora sapiente tempore enim. Velit unde tempore soluta consequatur commodi est sint? Neque tempore sequi vel delectus aliquid ex nulla ipsam, officia eveniet blanditiis laudantium sapiente tenetur corrupti eos cumque nesciunt nemo illum placeat inventore ipsa fuga fugiat. Neque unde nostrum hic rem sequi.';
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
      desc:
        'Extra 1 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 20,
      pricePer: 'trip'
    },
    {
      title: 'Extra 2',
      desc:
        'Extra 2 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 15,
      pricePer: 'day'
    },
    {
      title: 'Extra 3',
      desc:
        'Extra 3 description. Lorem ipsum dolor sit, amet consectetur adipisicing.',
      price: 25,
      pricePer: 'day'
    }
  ];

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
          <p className={styles.sectionBig}>{kmIncluded} km</p>
        </div>
      </div>
      <Divider />
    </div>
  );

  const Heading = () => (
    <>
      <h1>{model}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </>
  );

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>XiCars - {model}</title>
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
                  {fuelType != 'Electric' && (
                    <p className={styles.featPrevItem}>
                      <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                      {fuelConsumption}
                    </p>
                  )}
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} />{' '}
                    {fuelType}
                  </p>
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} /> {doors}{' '}
                    doors
                  </p>
                  <p className={styles.featPrevItem}>
                    <PlaceholderIcon className={styles.featPrevIcon} /> {seats}{' '}
                    seats
                  </p>
                </div>
              </div>

              <div className={styles.aboutCar}>
                <div className={styles.aboutCont}>
                  <h3 className={styles.aboutTitle}>Description</h3>

                  <div className={styles.showHide}>
                    <ShowHide height='L'>
                      <p className={styles.sectionBig}>{description}</p>
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
                </div>

                <div className={styles.aboutCont}>
                  <h3 className={styles.aboutTitle}>Guidelines</h3>
                  <div className={styles.showHide}>
                    <ShowHide height='s'>
                      <p className={styles.sectionBig}>{description}</p>
                    </ShowHide>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.layoutRightSide}>
              <div className={styles.Desktop}>
                <div className={styles.leftSide}>
                  <p className={styles.perDay}>&euro;/day</p>
                  <p className={styles.totalCost}>total cost</p>
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
              <p className={styles.perDay}>&euro;/day</p>
              <p className={styles.totalCost}>total cost</p>
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
              <p className={styles.perDay}>&euro;/day</p>
              <p className={styles.totalCost}>total cost</p>
            </div>
            <div className={styles.rightSide}>
              <Link href=''>
                <Button className={styles.navBarCardContButton} variant='contained'>
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

export const getStaticProps = async (context) => {
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

export const getStaticPaths = async () => {
  //get params
  const paths = carData.map(car => {
    const carId = car.id;
    return {params: {carId}};
  });

  // return paths
  return {paths, fallback: true};
}

export default Car;
