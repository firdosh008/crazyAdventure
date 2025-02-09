import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles

// Initialize Swiper modules
// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const RotatingSwiper = () => {
  return (
    <div className="swiper-rotate-container h-screen w-screen py-10 bg-gray-200">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        spaceBetween={50}
        navigation={false}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide, index) => {
            if (slide.classList.contains("swiper-slide-active")) {
              slide.style.transform = "rotate(0deg)";
            } else if (slide.classList.contains("swiper-slide-prev")) {
              slide.style.transform = "rotate(-10deg)";
            } else if (slide.classList.contains("swiper-slide-next")) {
              slide.style.transform = "rotate(10deg)";
            } else if (slide.classList.contains("swiper-slide-prev-prev")) {
              slide.style.transform = "rotate(-20deg)";
            } else if (slide.classList.contains("swiper-slide-next-next")) {
              slide.style.transform = "rotate(20deg)";
            }
          });
        }}
        className="py-20"
      >
        {/* Slides */}
        <SwiperSlide className="w-[200px] h-[300px]">
          <div className="slide-content w-[200px] h-[300px]">
            Slide 1adsadasdasdasc asdasdadsa asdasdadsaassdsa asdasdadsa
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[300px]">
          <div className="slide-content w-[200px] h-[300px]">
            Slide 2adsadasdasdasc asdasdadsa asdasdadsaassdsa asdasdadsa
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[300px]">
          <div className="slide-content w-[200px] h-[300px]">
            Slide 3adsadasdasdasc asdasdadsa asdasdadsaassdsa asdasdadsa
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[300px]">
          <div className="slide-content w-[200px] h-[300px]">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide className="w-[200px] h-[300px]">
          <div className="slide-content w-[200px] h-[300px]">Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RotatingSwiper;
