import React from "react";
import { MdArrowForward } from "react-icons/md";
import { GoClock } from "react-icons/go";
import starImg from "../../assets/starImg.png";

const PopularLocation = ({ props }) => {
  const { image_name, image, days, price, rating } = props;

  return (
    <div
      className="relative bg-black shadow-xl flex flex-col group rounded-lg w-[95%]"
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg h-[250px] min-h-[250px] object-cover object-center">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-125"
        />
      </div>

      {/* Content Section */}
      <div className="min-h-[200px] max-h-[200px] flex flex-col px-4 py-2 bg-gray-100">
        {/* Trek Name */}
        <p className="font-normal font-inter tracking-wider text-md py-2">
          {image_name || "Trek Name"}
        </p>

        {/* Rating Section */}
        {rating && (
          <div className="py-2 flex items-center gap-3">
            <div className="flex flex-row gap-[4px]">
              {[...Array(4)].map((_, index) => (
                <img key={index} src={starImg} className="w-4 h-4" alt="star" />
              ))}
            </div>
            <div className="flex justify-center items-center font-inter text-xs">
              ({rating} rating)
            </div>
          </div>
        )}

        {/* Price Section */}
        {price && (
          <div className="py-2 flex flex-row gap-0 items-center justify-start tracking-wider font-inter">
            <div className="flex text-xl font-normal">₹{price}</div>
            <div className="flex text-xs font-light">/Person</div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="w-full flex flex-row text-md justify-between items-center absolute bottom-4">
        {/* Duration */}
        {days && (
          <div className="rounded-full px-4 py-2 flex items-center justify-center gap-2 font-light font-inter">
            <GoClock className="w-5 h-5" />
            <div className="font-light">{days}</div>
          </div>
        )}

        {/* Book Now Button */}
        <div className="flex bg-white text-black group-hover:text-black hover:font-normal px-4 py-2 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
          <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
            <div>Book Now</div>
            <MdArrowForward />
          </span>
          <div className="absolute inset-0 bg-white border-transparent">
            <div className="mask absolute inset-0 bg-lemonYellow transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLocation;
