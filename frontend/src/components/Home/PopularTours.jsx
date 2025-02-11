import React, { useEffect, useState } from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import PopularLocation from "../utils/PopularLocation";
import { URLS } from "../../Utils/urls";

const PopularTours = () => {
  const [trekListings, setTrekListings] = useState([]); // State to store fetched trek data

  // Fetch trek data from API
  useEffect(() => {
    const fetchTrekListings = async () => {
      try {
        const response = await fetch(`${URLS.backendUrl}/api/most_popular_tours/fetch`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch trek listings");
        }
        const data = await response.json();
        console.log("Fetched trek listings:", data);
        setTrekListings(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching trek listings:", error);
      }
    };

    fetchTrekListings();
  }, []);

  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Best Place For You
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Most Popular Tours
        </div>
      </div>

      {/* Subtitle */}
      <div className="w-[90%] flex py-2 justify-center items-center tracking-widest text-sm md:text-md text-center font-medium font-inter md:w-[80%] mx-auto">
        You don’t want to miss the nature, give yourself a break & Escape
      </div>

      {/* Swiper for Tour Listings */}
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
          {/* Dynamically Render Treks */}
          {trekListings.map((el) => (
            <SwiperSlide
              key={el.listing} // Add unique key for React
              className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <PopularLocation props={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
