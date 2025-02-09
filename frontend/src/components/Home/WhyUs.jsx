import React from "react";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import routeSvg from "../../assets/svg/about_1_1.svg";
import safetySvg from "../../assets/svg/about_1_2.svg";
import professionalSvg from "../../assets/svg/about_1_3.svg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import { FaArrowRight } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] xl:w-[80%] mx-auto">
        <div className="w-full md:w-[80%] lg:w-[50%] flex flex-col items-start justify-start gap-2 py-4 px-4 ">
          <div className="font-montez text-4xl leading-6 pt-4">
            Why Choose us
          </div>
          <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center">
            Why Choose Us for Your Forest Tour?
          </div>
          <div className="flex flex-col justify-start items-start w-full md:w-[90%] lg:max-w-[500px] mx-0 lg:mx-4 mt-4 gap-4 leading-snug">
            <div className="flex flex-col justify-center items-center xs:flex-row xs:justify-between xs:items-start gap-4">
              <div className="bg-lemonYellow w-[80px] h-[80px] group px-5 py-5 rounded-xl flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                <img
                  src={routeSvg}
                  alt="route img"
                  className="transform transition-transform duration-500 group-hover:scale-x-[-1]"
                />
              </div>
              <div className="flex flex-col justify-between items-center xs:items-start font-inter leading-normal">
                <div className="text-[24px] font-semibold">Exclusive Trip</div>
                <div className="text-[16px] font-normal text-gray-500 text-center xs:text-left">
                  Discover Journeys Like Never Before.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center xs:flex-row xs:justify-between xs:items-start gap-4">
              <div className="bg-lemonYellow w-[80px] h-[80px] group px-5 py-5 rounded-xl flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                <img
                  src={safetySvg}
                  alt="route img"
                  className="w-full h-full transform transition-transform duration-500 group-hover:scale-x-[-1]"
                />
              </div>
              <div className="flex flex-col justify-between items-center xs:items-start font-inter leading-normal">
                <div className="text-[24px] font-semibold">
                  Safety First Always
                </div>
                <div className="text-[16px] font-normal text-gray-500 text-center xs:text-left">
                  Your Safety is always our first priority.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center xs:flex-row s xs:justify-between xs:items-start gap-4">
              <div className="bg-lemonYellow w-[80px] h-[80px] group px-5 py-5 rounded-xl flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
                <img
                  src={professionalSvg}
                  alt="route img"
                  className="transform transition-transform duration-500 group-hover:scale-x-[-1]"
                />
              </div>
              <div className="flex flex-col justify-between items-center xs:items-start  font-inter leading-normal">
                <div className="text-[24px] font-semibold">
                  Professional Guide
                </div>
                <div className="text-[16px] font-normal text-gray-500 text-center xs:text-left">
                  Our Experienced Professionals will lead your way.
                </div>
              </div>
            </div>
            {/* <div className="group w-[210px] mt-2  text-sm font-inter text-nowrap flex bg-black text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
              <span className="relative z-10 flex items-center justify-center gap-4">
                <button type="submit" className="th-btn style3 text-[16px]">
                  Send message
                </button>
                <FaArrowRight className="w-4 h-4 group-hover:scale-110 transition-all duration-500  ease-in-out" />
              </span>
              <div className="absolute inset-0 bg-black border-transparent">
                <div className="mask absolute inset-0 bg-[#1CA8CB] transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full md:w-[80%] lg:w-[50%] lg:max-w-[600px]  h-full py-4">
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={kedarnathTrek}
              className="object-cover w-full h-full object-center rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={DeoriTalTrek}
              className="object-cover w-full h-full object-center rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={harKiDunTrek}
              className="object-cover w-full h-full object-center rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={bgImage}
              className="object-cover w-full h-full object-center rounded-xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
