import React, { useEffect, useState } from "react";
import axios from "axios";

import bestAutumnTreks from "../../assets/background/destination_bg_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { URLS } from "../../Utils/urls";

// Top Spot Card Component
const TopSpotCard = ({ props }) => {
  return (
    <div className="destination-box w-[90%] sm:w-[80%] md:w-full group transition-all duration-300 delay-100 ease-in-out h-[500px] max-h-[500px] mx-auto rounded-xl overflow-hidden flex flex-col justify-between relative">
      <img
        src={`${props.image}`} // Dynamically render BLOB image as base64
        className="w-full z-10 h-full rounded-xl box-img object-cover group-hover:scale-110 transition-all duration-500 delay-100 ease-in-out relative"
        alt={props.image_name}
      />
      <div className="bg-black bg-opacity-10 h-full w-full z-20 absolute top-0" />
      <div className="absolute z-30 px-4 py-6 text-white flex flex-col gap-4 justify-start items-start w-full bottom-0 transition-all duration-300 delay-150 tracking-wider">
        <div className="flex flex-col justify-start items-start text-xl font-bold">
          {props.image_name}
        </div>
        <div className="flex justify-between items-center w-full font-normal">
          {props.listing} Listings
        </div>
      </div>
    </div>
  );
};

// TopSpot Main Component
const TopSpot = () => {
  const [trekListings, setTrekListings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URLS.backendUrl}:5000/api/top_spots/fetch`);
        setTrekListings(response.data);
      } catch (error) {
        console.error("Error fetching Top Spots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center relative pt-[120px]"
      style={{
        backgroundImage: `url(${bestAutumnTreks})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      {/* Header Section */}
      <div className="flex flex-col text-lemonYellow items-center justify-center gap-2 py-4 relative">
        <div className="font-montez text-4xl leading-6 pt-4">Top Spot</div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Discover Our Destinations
        </div>
      </div>

      {/* Swiper Section */}
      <div
        className="flex w-full md:w-[80%] justify-center items-center py-5 relative"
        id="reviews"
      >
        {loading ? (
          <div className="text-center text-xl text-gray-600">Loading...</div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            navigation={false}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="w-full flex justify-center items-center"
          >
            {trekListings.map((el) => (
              <SwiperSlide
                key={el.id}
                className="z-10 my-10 mx-auto w-full md:px-4 hover:-translate-y-3 transition-all duration-500 delay-100 ease-in-out"
              >
                <TopSpotCard props={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default TopSpot;
