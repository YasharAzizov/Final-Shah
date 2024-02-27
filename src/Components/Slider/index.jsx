import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { sliderData } from "./sliderData";
import './Slider.css'

const Slider = () => {
  return (
    <div className="my_slide">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        {sliderData.map(({ id, comment, author, work }) => {
          return (
            <SwiperSlide key={id}>
              <div className="slides">
                <span className="clients__inner_left_clients_say">
                  {comment}
                </span>

                <div className="clients__inner_left_client_info">
                  <div className="client_info_left">
                    <span className="client_info_name">{author}</span>

                    <span className="client_info_job">{work}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
