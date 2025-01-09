import "./testimonial.css";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { useTranslation } from "react-i18next";
function Testimonial() {
  const { t } = useTranslation();
  return (
    <section className="testimonial">
      <h1 className="testimonial-title">{t("testimonial.title")}</h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/3.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/4.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/5.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-container">
            <img src="./photos/testimonial/6.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
