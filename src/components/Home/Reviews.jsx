import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd"; // Importing message from antd
import "swiper/css";
import "swiper/css/pagination";

import googleLogo from "../../assets/google.png";
import bgLineImage from "../../assets/background/line-pattern2.png";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../Utils/urls";

const { Option } = Select;

const TestimonialCard = ({ name, status, review, rating }) => {
  // Extract the first letter of the name for the avatar
  const firstLetter = name ? name.charAt(0).toUpperCase() : "";

  return (
    <div
      className="w-[80%] md:w-[400px] hover:scale-105 transition-all duration-300 delay-100 ease-in-out h-[280px] mx-auto bg-slate-100 rounded-md overflow-hidden flex flex-col justify-between pb-5 relative"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 1px 28px",
      }}
    >
      <div className="h-1/5 flex justify-start items-center gap-3 mt-4 py-5 px-4">
        {/* Display the first letter as a circle */}
        <div
          className="w-14 h-14 flex justify-center items-center rounded-full bg-blue-500 text-white font-bold text-xl"
          style={{ textTransform: "uppercase" }}
        >
          {firstLetter}
        </div>
        <div className="flex flex-col text-sm font-semibold">
          <div>{name || "Name"}</div>
          <div>{status || "Status"}</div>
        </div>
        <div className="ml-auto absolute top-2 right-2">
          <img src={googleLogo} className="max-w-5 h-5 place-content-start" />
        </div>
      </div>
      <div className="px-4 text-left">
        {"⭐".repeat(rating)} {/* Render stars based on rating */}
      </div>
      <div className="px-4">
        <div className="h-[120px] rounded-b-md overflow-y-auto place-content-end">
          <span className="w-[80%] mx-auto text-left py-2 rounded-b-md overflow-hidden">
            {review || "No review available."}
          </span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Fetch reviews data from API
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${URLS.backendUrl}:5000/api/reviews/all`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  return (
    <div
      className="pb-20 h-[80vh]"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4 text-center">
          Testimonial
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl text-center font-semibold tracking-wide flex justify-center items-center text-nowrap">
          What client say about us
        </div>
      </div>
      <div
        className="flex w-full justify-center items-center py-5 lg:w-[90%] mx-auto"
        id="reviews"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation={false}
          autoplay={{
            delay: 5000,
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
          className="w-full"
        >
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="z-10 my-10 mx-auto flex justify-center items-center"
              >
                <TestimonialCard
                  name={review.name}
                  status="Verified Client" // Static status or replace with dynamic data if available
                  review={review.review}
                  rating={review.stars}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="my-10 mx-auto text-center">
              <div className="text-gray-500">No reviews available</div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
