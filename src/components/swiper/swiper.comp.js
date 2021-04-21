import { useState, useEffect } from 'react';
import styles from './Swiper1.module.scss';
// Import Swiper React components
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { carData } from '../../utils/constants';

SwiperCore.use([Navigation, Pagination]);

const Swiper1 = ({ source }) => {
  return (
    <div className={styles.container}>
      <Swiper
        id='swiper-color'
        navigation
        pagination={{ type: 'fraction' }}
        spaceBetween={0}
        slidesPerView={1}>
        {source.map((item, idx) => {
          return (
            <SwiperSlide key={`slide-${idx}`}>
              <img
                className='slide'
                src={item.imgUrl}
                alt={`${item.name} image`}
              />
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  );
};

export default Swiper1;
