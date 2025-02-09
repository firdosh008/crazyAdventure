import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/swiperCard.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import bestAutumnTreks from "../../assets/best-autumn-treks.jpg";
import spitiValley from "../../assets/Spiti_Valley_Road_Trip_thumb.jpg";

import bgLineImage from "../../assets/background/line-pattern2.png";
import { FaArrowRight } from "react-icons/fa";

function SwiperCards() {
  return (
    <div
      className="swiper-cards-container pt-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Top Destinations
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Popular Destinations
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden px-2">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute px-2 bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
              {/* <div className="hidden md:flex bg-black text-white px-8 py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div>View All</div>
                  <FaArrowRight />
                </span>
                <div className="absolute inset-0 bg-black border-transparent">
                  <div className="mask absolute inset-0 bg-[#1CA8CB] transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <img
              src={bestAutumnTreks}
              alt="slide_image"
              loading="lazy"
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 pb-0 md:pb-[2rem] w-full  flex flex-col justify-center md:flex-row md:justify-between items-center text-white h-fit overflow-hidden rounded-[2rem] bg-black bg-opacity-10 py-10 gap-2">
              <div className="flex flex-col justify-between px-1 font-fredoka tracking-wider z-20">
                <div className="text-xl md:text-[24px] font-semi flex justify-center md:justify-start items-center">
                  Location
                </div>
                <div className="text-xs md:text-[16px] font-semi flex justify-center md:justify-start items-center">
                  12 Listings
                </div>
              </div>
              <div className="flex bg-transparent border-white border-[2px] text-white group-hover:text-black px-4 py-2 md:px-8 md:py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40  group mb-2 ">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <div className="text-nowrap group-hover:text-black font-normal">
                    View All
                  </div>
                  <FaArrowRight className="text-nowrap group-hover:text-black" />
                </span>
                <div className="absolute inset-0 bg-transparent border-transparent text-white group-hover:text-black overflow-hidden">
                  <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperCards;
