import React from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";
import ytImage from "../../assets/ytImage.png";

const trekListings = [
  {
    name: "Kedarkantha Trek",
    listing: 1,
    img: kedarkanthaTrek,
  },
  {
    name: "Har Ki Dun Trek",
    listing: 2,
    img: harKiDunTrek,
  },
  {
    name: "Gaumukh Tapovan",
    listing: 3,
    img: gaumukhTapovanTrek,
  },
  {
    name: "Dayara Bugyal Trek",
    listing: 5,
    img: dyaraBuyalTrek,
  },
  {
    name: "Kedarnath Trek",
    listing: 7,
    img: kedarnathTrek,
  },
  {
    name: "Deoria Tal Chopta Chandrashila Trek",
    listing: 9,
    img: DeoriTalTrek,
  },
];

import { MdArrowForward } from "react-icons/md";
import { GoClock } from "react-icons/go";
import starImg from "../../assets/starImg.png";

const YoutubeVideoCard = ({ props }) => {
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };
  // max-w-[400px] min-w-[200px] min-h-[500px]
  return (
    <div
      className={`relative bg-black shadow-xl flex flex-col group rounded-lg w-[95%]`}
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden rounded-lg h-[450px] w-full">
        {" "}
        {/* Removed min-h and max-h */}
        <img
          src={props.img}
          alt="card image"
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center gap-4 items-center p-5 rounded-lg">
        <div className="text-4xl text-white font-semibold font-oswald tracking-wide text-center drop-shadow-lg">
          {props.name}
        </div>
        <div className="flex justify-center items-center w-[120px] h-[120px]">
          <img
            className="object-cover object-center w-full h-full rounded-full"
            src={ytImage}
            alt="YouTube Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

const YoutubeVideos = () => {
  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Informative Videos
        </div>
        <div className="pt-2 font-inter text-sm sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center sm:text-nowrap">
          Checkout some informative videos on our treks
        </div>
      </div>
      <div className="w-[90%]  flex py-2 justify-center items-center tracking-widest text-sm md:text-md text-center font-medium font-inter  md:w-[80%] mx-auto">
        You don’t want to miss the nature, give yourself a break & Escape
      </div>
      <div className="flex justify-center items-center py-5 w-full lg:w-[90%] mx-auto">
        <Swiper
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          navigation={false}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={false}
          id="commercial"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="w-full mx-auto"
        >
          {trekListings.map((el) => {
            return (
              <SwiperSlide
                className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <YoutubeVideoCard props={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default YoutubeVideos;
