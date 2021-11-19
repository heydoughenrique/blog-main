import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './slider.module.scss'


export function SliderPortfolio() {
  return (
    <div className={styles.teste}>
      <Swiper
        className={styles.mySwiper}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}

        breakpoints={{
          680: {
            slidesPerView: 3,
          },

        }}




      >
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/dribble-mockup.png'}
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/dribble-mockup.png'}
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/dribble-mockup.png'}
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainerNext}>
            <Image
              className={styles.imageNext}
              src={'/images/dribble-mockup.png'}
              alt="Illustration of a person carrying ideas for a professional website design"
              layout="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>

    </div>

  )
}