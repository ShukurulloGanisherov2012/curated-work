import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import '../App.css'

export default function Fourth() {
  return (
    <>
      <div className='FourthPage'>
        <h1>Curated Collections.</h1>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper my-5"
          slidesPerView={3}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img src="/collection1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/collection2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/collection3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/collection1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/collection2.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
