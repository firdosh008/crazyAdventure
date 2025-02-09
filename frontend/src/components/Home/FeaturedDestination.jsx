import React, { useState } from "react";
import bgLineImage from "../../assets/background/line-pattern2.png";

import bestSummerTreks from "../../assets/best-summer-treks.jpg";
import bestAutumnTreks from "../../assets/best-autumn-treks.jpg";
import bestMonsoonTreks from "../../assets/best-monsoon-treks.jpg";
import bestWinterTreks from "../../assets/best-winter-treks.jpg";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const FeaturedDestination = () => {
  const destinationsData = [
    {
      id: 1,
      title: "Best Summer Treks",
      location: "Uttarakhand",
      listings: "15",
      image: bestSummerTreks,
    },
    {
      id: 2,
      title: "Best Autumn Treks",
      location: "Himachal Pradesh",
      listings: "12",
      image: bestAutumnTreks,
    },
    {
      id: 3,
      title: "Best Monsoon Treks",
      location: "Kerala",
      listings: "10",
      image: bestMonsoonTreks,
    },
    {
      id: 4,
      title: "Best Winter Treks",
      location: "Sikkim",
      listings: "8",
      image: bestWinterTreks,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=""
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Top Destinations
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Our Featured Destinations
        </div>
      </div>
      {/* For Bigger screens */}
      <div className="hidden md:flex flex-col md:flex-row gap-2 justify-center items-center w-[90%] mx-auto mt-5 ">
        {destinationsData.map((el, index) => (
          <div
            className={`md:h-[500px]  rounded-xl relative cursor-pointer ${
              activeIndex === index
                ? "h-[100%] md:w-[100%]"
                : "w-[100%] h-[100px] md:w-[150px]"
            } transition-all duration-1000 delay-300 ease-in-out`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={el.image}
              alt="destination-img"
              loading="lazy"
              className={`w-full md:h-[500px] rounded-xl object-cover object-center relative ${
                activeIndex === index ? " h-full " : "h-[100px]"
              } transition-all duration-1000 delay-300 ease-in-out`}
            />
            <div
              className={`w-[30%] absolute left-0 right-0 bottom-[10%] font-inter font-bold tracking-wider text-md text-white px-4 ${
                activeIndex === index ? "md:rotate-0" : "md:-rotate-90 "
              } z-40 flex justify-start text-nowrap  transition-transform duration-500 delay-700 ease-in-out`}
            >
              <div> {el.location}</div>
            </div>
            <div className="bg-black bg-opacity-10 z-30 absolute inset-0 rounded-xl" />
          </div>
        ))}
      </div>
      {/* For smaller screen */}
      <div className="flex md:hidden flex-col md:flex-row gap-2 justify-center items-center w-[95%] sm:w-[90%] mx-auto mt-5">
        {destinationsData.map((el, index) => (
          <div
            className={`relative rounded-xl cursor-pointer transition-all duration-1000 ease-in-out ${
              activeIndex === index
                ? "h-[var(--active-height)] w-full md:w-[100%]"
                : "h-[var(--inactive-height)] w-full md:w-[150px]"
            }`}
            onClick={() => setActiveIndex(index)}
            style={{
              "--active-height": "500px", // Height for active card
              "--inactive-height": "100px", // Height for inactive card
            }}
          >
            <img
              src={el.image}
              alt="destination-img"
              loading="lazy"
              className={`w-full object-cover object-center transition-all duration-1000 ease-in-out ${
                activeIndex === index
                  ? "h-[var(--active-height)]"
                  : "h-[var(--inactive-height)]"
              } rounded-xl`}
            />
            <div
              className={`w-[30%] absolute left-0 right-0 bottom-[10%] font-inter font-bold tracking-wider text-md text-white px-4 transition-transform duration-500 ease-in-out ${
                activeIndex === index ? "md:rotate-0" : "md:-rotate-90"
              } z-40 flex justify-start text-nowrap`}
            >
              <div>{el.location}</div>
            </div>
            <div className="bg-black bg-opacity-10 z-30 absolute inset-0 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
