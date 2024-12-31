// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import ServicesContainer from "./ServicesContainer";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="servicesSwiper"
      >
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/461515529_508435662113214_2596515650138827046_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/462561594_516077878015659_8762507481469439356_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/465554224_540478075575639_7839603381382144319_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.27_da2fe73d.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.28_283a55cc.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.28_bb280bde.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.34_ce66407d.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/465650869_541888832101230_5193963458533386008_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/465926058_538263515797095_7404882299036292750_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/462802772_521621197461327_6782867895999174676_n.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.25_f2b2af48.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.26_001e35d2.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesContainer
            image={
              "./photos/WhatsApp Image 2024-12-23 at 20.07.27_3fd15e0a.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
