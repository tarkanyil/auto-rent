import { useState, useEffect } from 'react';
import styles from './Swiper1.module.scss';
// Import Swiper React components
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { carData } from '../../utils/constants';

SwiperCore.use([Navigation, Pagination]);

const Swiper1 = () => {
  return (
    <div className={styles.container}>
      <Swiper
        id='swiper-color'
        navigation
        pagination={{ type: 'fraction' }}
        spaceBetween={0}
        slidesPerView={1}>
        {carData.map((car, i) => {
          return (
            <SwiperSlide key={`slide-${i}`}>
              <img
                className='slide'
                src={car.imgUrl}
                alt={`${car.name} image`}
              />
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  );
};

export default Swiper1;
