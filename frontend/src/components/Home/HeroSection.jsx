import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import {URLS} from "../../Utils/urls"

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch images from the API
  useEffect(() => {
    axios
      .get(`${URLS.backendUrl}/api/hero_section`)
      .then((response) => {
        setImages(response.data); // Assuming the API returns an array of image objects
        console.log("Images fetched successfully:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or placeholder
  }

  return (
    <div className="relative z-20 mt-[5rem]">
      <div className="relative top-0 left-0 h-max lg:col-span-2">
        <Swiper
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
          }}
          className="h-[80vh]"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-full object-cover object-center">
                <img
                  data-aos="zoom-in-up"
                  src={image.image_data} // Assuming image_data contains the image URL
                  alt="Hero Section"
                  loading="lazy"
                  className="relative w-full h-full m-auto object-cover object-center overflow-x-hidden"
                />
                <div
                  className="absolute inset-0 object-cover object-center bg-black text-white bg-opacity-20 flex justify-start items-center w-full h-full px-5"
                >
                  <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center items-center md:items-start md:justify-start gap-2 py-4">
                    <div className="font-montez text-[40px] leading-4 pt-4 font-normal animate__animated animate__fadeInUp animate__delay-1s">
                      Top Destinations
                    </div>
                    <div className="w-[90%] lg:w-[50%] pt-2 font-inter text-center md:text-left text-[45px] md:text-[50px] lg:text-[70px] leading-normal font-bold flex justify-center items-center md:justify-start md:items-start text-wrap animate__animated animate__fadeInUp animate__delay-1s">
                      Our Featured Destinations
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 animate__animated animate__fadeInUp animate__delay-2s">
                      <div className="flex bg-lemonYellow text-black px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none transition-all duration-500 delay-500 ease-in-out">
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-all duration-300 delay-200 ease-in-out">
                          <div>Explore Tours</div>
                          <FaArrowRight />
                        </span>
                        <div className="absolute inset-0 bg-lemonYellow group-hover:bg-transparent border-transparent">
                          <div className="mask absolute inset-0 bg-black transition-all duration-700 delay-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                        </div>
                      </div>
                      <div className="flex bg-transparent text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-white border-[1.5px] group-hover:border-transparent group-hover:border-[0px] transition-all duration-700 delay-500 ease-in-out">
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-all duration-500 delay-300 ease-in-out">
                          <div>Our Services</div>
                          <FaArrowRight />
                        </span>
                        <div className="absolute inset-0 bg-transparent">
                          <div className="mask absolute inset-0 bg-white transition-all duration-700 delay-150 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
