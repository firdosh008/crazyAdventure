import React from "react";
import banner1 from "../../assets/slide_01.png";
import banner2 from "../../assets/slide_02.png";
import TopCard from "../utils/TopCard";
import routeSvg from "../../assets/svg/about_1_1.svg";
import safetySvg from "../../assets/svg/about_1_2.svg";
import professionalSvg from "../../assets/svg/about_1_3.svg";
import { FaArrowRight } from "react-icons/fa";

import PricingPlans from "./PricingPlans";
import WorkingOffice from "./WorkingOffice";
import Team from "./Team";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-start px-2 md:px-5 min-h-screen pt-4 pb-8">
      <div className="relative z-30 w-[90%] mx-auto lg:mx-0 lg:w-[50%]  py-10 flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
        <div className="w-full mx-auto sm:mx-0 sm:w-[400px] h-[470px] z-10 rounded-[32px] bg-white">
          <img
            src={banner1}
            className="object-center object-cover w-full h-full rounded-[32px] p-[3px]"
          />
        </div>
        <div className="md:absolute top-[35%] right-[12%] lg:right-[2%] z-20 w-full mx-auto sm:mx-0 sm:w-[400px] h-[470px] rounded-[32px] bg-white">
          <img
            src={banner2}
            className="object-center object-cover w-full h-full rounded-[32px] p-[3px]"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] md:w-[80%] mx-auto mt-[1rem] md:mt-[5rem] lg:mt-0 lg:mx-0 lg:w-[50%]">
        <div className="flex flex-col items-start justify-start gap-2 py-4 px-0 md:px-[2rem]">
          <div className="font-montez text-4xl leading-6 pt-4 w-full ">
            Welcome
          </div>
          <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center">
            We are a World of reputed Travel Agency
          </div>
          <div className="font-inter text-[16px] flex flex-col justify-between items-start pt-[1rem] leading-8 tracking-wide">
            <p>
              The Crazy Mountaineers is an initiative of a family to promote eco
              and safe tourism in the Himalayan Region & help society understand
              the importance of the Himalayan eco system. Being the top rated
              and oldest trekking company in Uttarakhand, India, we create a
              safe and thrilling environment for our trekkers and provide value
              to our customers by providing them with the best services and
              affordable trekking packages.
            </p>
            <div className="flex flex-col justify-start items-start w-full md:w-[90%] lg:max-w-[500px] mx-4 mt-4 gap-4">
              <div className="flex justify-between items-start gap-4">
                <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                  <img
                    src={routeSvg}
                    alt="route img"
                    className="transform transition-transform duration-500 group-hover:scale-x-[-1]"
                  />
                </div>
                <div className="flex flex-col justify-between items-start font-inter leading-normal">
                  <div className="text-[24px] font-semibold">
                    Exclusive Trip
                  </div>
                  <div className="text-[16px] font-normal text-gray-500">
                    Discover Journeys Like Never Before.
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                  <img
                    src={safetySvg}
                    alt="route img"
                    className="transform transition-transform duration-500 group-hover:scale-x-[-1]"
                  />
                </div>
                <div className="flex flex-col justify-between items-start font-inter leading-normal">
                  <div className="text-[24px] font-semibold">
                    Safety First Always
                  </div>
                  <div className="text-[16px] font-normal text-gray-500">
                    Your Safety is always our first priority.
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="bg-lemonYellow group  px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                  <img
                    src={professionalSvg}
                    alt="route img"
                    className="transform transition-transform duration-500 group-hover:scale-x-[-1]"
                  />
                </div>
                <div className="flex flex-col justify-between items-start font-inter leading-normal">
                  <div className="text-[24px] font-semibold">
                    Professional Guide
                  </div>
                  <div className="text-[16px] font-normal text-gray-500">
                    Our Experienced Professionals will lead your way.
                  </div>
                </div>
              </div>
              <div className="group w-[210px] mt-2  text-sm font-inter text-nowrap flex bg-black text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
                <span className="relative z-10 flex items-center justify-center gap-4">
                  <button type="submit" className="th-btn style3 text-[16px]">
                    Send message
                  </button>
                  <FaArrowRight className="w-4 h-4 group-hover:scale-110 transition-all duration-500  ease-in-out" />
                </span>
                <div className="absolute inset-0 bg-black border-transparent">
                  <div className="mask absolute inset-0 bg-lemonYellow transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-start overflow-hidden w-full">
      <TopCard title={"About Us"} bgImage={banner1} />
      <WelcomeSection />
      <PricingPlans />
      <Team />
      <WorkingOffice />
    </div>
  );
};

export default AboutUs;
