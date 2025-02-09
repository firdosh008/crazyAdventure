import React from "react";
import banner1 from "../../assets/slide_01.png";
import banner2 from "../../assets/slide_02.png";

import routeSvg from "../../assets/svg/about_1_1.svg";
import safetySvg from "../../assets/svg/about_1_2.svg";
import professionalSvg from "../../assets/svg/about_1_3.svg";
import { FaArrowRight } from "react-icons/fa";

const LetsGoTogether = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-start items-start px-2 md:px-5 min-h-screen pt-4 pb-8">
        <div className="relative z-30  h-[80vh] mx-auto w-full md:w-[80%] lg:w-[50%] xl:w-[40%] py-10 flex flex-row gap-3 justify-center items-center md:justify-start md:items-start">
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={banner2}
              className="object-cover object-center w-full h-full rounded-t-full rounded-bl-full"
            />
          </div>
          <div className="hidden md:flex w-1/2 h-full flex-col justify-center items-center gap-3">
            <img
              src={banner1}
              className="object-cover object-center w-full h-[50%] rounded-t-full rounded-br-full"
            />
            <img
              src={banner1}
              className="object-cover object-center w-full h-[50%] rounded-b-full rounded-tl-full"
            />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[80%] mx-auto mt-[1rem] md:mt-[5rem] lg:mt-0 lg:mx-0 lg:w-[50%]">
          <div className="flex flex-col items-start justify-start gap-2 py-4 px-0 md:px-[2rem]">
            <div className="font-montez text-4xl leading-6 pt-4">
              Let's Go Together
            </div>
            <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center">
              Plan Your Trip With Us
            </div>
            <div className="font-inter text-[16px] flex flex-col justify-between items-start pt-[1rem] leading-8 ">
              <p className="font-inter text-[16px] tracking-wide">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected hum
                randomised words which don't look even slightly.
              </p>
              <div className="flex flex-col justify-start items-start w-full md:w-[90%] lg:max-w-[500px] mx-0 lg:mx-4 mt-4 gap-4">
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
                      There are many variations of passages of available but the
                      majority.
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
                      There are many variations of passages of available but the
                      majority.
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
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
                      There are many variations of passages of available but the
                      majority.
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
    </div>
  );
};

export default LetsGoTogether;
