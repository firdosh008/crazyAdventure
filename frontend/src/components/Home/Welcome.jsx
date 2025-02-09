import React, { useState } from "react";

import bestSummerTreks from "../../assets/best-summer-treks.jpg";
import bestAutumnTreks from "../../assets/best-autumn-treks.jpg";
import bestMonsoonTreks from "../../assets/best-monsoon-treks.jpg";
import bestWinterTreks from "../../assets/best-winter-treks.jpg";

import { LetterFadeIn } from "../utils/LetterFadeIn";
import bgLineImage from "../../assets/background/line-pattern2.png";

const Welcome = () => {
  const [activeFrame, setActiveFrame] = useState("");
  const text =
    "The Crazy Mountaineers is an initiative of a family to promote eco and safe tourism in the Himalayan Region & help society understand the importance of the Himalayan eco system. Being the top rated and oldest trekking company in Uttarakhand, India, we create a safe and thrilling environment for our trekkers and provide value to our customers by providing them with the best services and affordable trekking packages.";

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-3xl font-oswald font-semibold tracking-wider text-center flex justify-center items-center py-2 my-5">
        Welcome To The World Of The Crazy Mountaineers
      </div>
      <div className="flex justify-center items-center w-[90%] md:w-[80%] leading-8 mx-auto text-center text-sm md:text-md font-fredako">
        <LetterFadeIn text={text} />
      </div>
      <div className="mx-2 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-2">
          <div
            className="relative w-[400px] h-[300px] my-5 overflow-hidden rounded-md"
            onMouseEnter={() => setActiveFrame(0)}
            data-aos="fade-right"
          >
            <img
              src={bestSummerTreks}
              loading="lazy"
              alt="img"
              className={`${
                activeFrame === 0 ? "scale-105" : "scale-100"
              } relative transition-all duration-700 delay-150 ease-in-out object-cover object-center`}
            />

            <div
              className={`bg-black z-50  rounded-md bg-opacity-20 w-full absolute bottom-0  flex justify-center items-center text-white transition-all duration-700 delay-500 ease-in-out ${
                activeFrame === 0
                  ? " h-full opacity-100"
                  : "h-0 opacity-0 text-transparent"
              }`}
              onMouseOut={() => setActiveFrame("")}
            >
              Best Summer Treks
            </div>
          </div>
          <div
            className="relative w-[400px] h-[300px] md:my-5 overflow-hidden rounded-md"
            onMouseEnter={() => {
              setActiveFrame(1);
            }}
            data-aos="fade-left"
          >
            <img
              src={bestMonsoonTreks}
              alt="img"
              loading="lazy"
              className={`${
                activeFrame === 1 ? "scale-105" : "scale-100"
              } relative transition-all duration-700 delay-150 ease-in-out object-cover object-center`}
            />

            <div
              className={`bg-black z-50  rounded-md bg-opacity-20 w-full absolute bottom-0  flex justify-center items-center text-white transition-all duration-700 delay-500 ease-in-out ${
                activeFrame === 1
                  ? " h-full opacity-100"
                  : "h-0 opacity-0 text-transparent"
              }`}
              onMouseOut={() => setActiveFrame("")}
            >
              Best Monsoon Treks
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div
            className="relative w-[400px] h-[300px] my-5 overflow-hidden rounded-md"
            onMouseEnter={() => setActiveFrame(2)}
            data-aos="fade-right"
          >
            <img
              src={bestAutumnTreks}
              alt="img"
              loading="lazy"
              className={`${
                activeFrame === 2 ? "scale-105" : "scale-100"
              } relative transition-all duration-700 delay-150 ease-in-out object-cover object-center`}
            />

            <div
              className={`bg-black z-50  rounded-md bg-opacity-20 w-full absolute top-0 flex justify-center items-center text-white transition-all duration-700 delay-500 ease-in-out ${
                activeFrame === 2
                  ? " h-full opacity-100 text-white"
                  : "h-0  opacity-0 text-transparent"
              }`}
              onMouseOut={() => setActiveFrame("")}
            >
              Best Autumn Treks
            </div>
          </div>
          <div
            className="relative w-[400px] h-[300px] my-5 overflow-hidden rounded-md"
            onMouseEnter={() => {
              setActiveFrame(3);
            }}
            data-aos="fade-left"
          >
            <img
              src={bestWinterTreks}
              alt="img"
              loading="lazy"
              className={`${
                activeFrame === 3 ? "scale-105" : "scale-100"
              } relative transition-all duration-700 delay-150 ease-in-out object-cover object-center`}
            />

            <div
              className={`bg-black z-50  rounded-md bg-opacity-20 w-full absolute top-0  flex justify-center items-center text-white transition-all duration-700 delay-500 ease-in-out ${
                activeFrame === 3
                  ? " h-full opacity-100"
                  : "h-0 opacity-0 text-transparent"
              }`}
              onMouseOut={() => setActiveFrame("")}
            >
              Best Winter Treks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
