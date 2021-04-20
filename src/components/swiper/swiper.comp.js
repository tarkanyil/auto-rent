import { useState, useEffect } from 'react';
import styles from './Swiper1.module.scss';
// Import Swiper React components
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
        {Array.from(Array(5)).map((el, i) => {
          return (
            <SwiperSlide key={`slide-${i}`} style={{}}>
              <img
                className='slide'
                src={`https://picsum.photos/id/${i + 1}/1440/700`}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swiper1;
