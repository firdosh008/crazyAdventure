import React from "react";

import routeSvg from "../../assets/svg/about_1_1.svg";
import safetySvg from "../../assets/svg/about_1_2.svg";
import professionalSvg from "../../assets/svg/about_1_3.svg";
import checkImage from "../../assets/svg/checkmark.svg";

const plans = [
  {
    name: "Basic Plan",
    price: "$785.00/Per Night",
    description: "Essential services for basic and single person seeking.",
    features: [
      "Up to 2 members",
      "Room Service Fees",
      "Driver Service Fees",
      "Tour management",
      "Collaboration",
      "Entrance Fees",
      "Guide Fees in Destination",
    ],
    image: "basic-plan-image-url", // Replace with actual image URL
  },
  {
    name: "Advanced Plan",
    price: "$980.00/Per Night",
    description: "Essential services for basic and single person seeking.",
    features: [
      "Up to 2 members",
      "Room Service Fees",
      "Driver Service Fees",
      "Tour management",
      "Collaboration",
      "Entrance Fees",
      "Auto refresh ads",
    ],
    image: "advanced-plan-image-url", // Replace with actual image URL
  },
  {
    name: "Premium Plan",
    price: "$1580.00/Per Night",
    description: "Essential services for basic and single person seeking.",
    features: [
      "Up to 2 members",
      "Room Service Fees",
      "Driver Service Fees",
      "Tour management",
      "Collaboration",
      "Entrance Fees",
      "Auto refresh ads",
    ],
    image: "premium-plan-image-url", // Replace with actual image URL
  },
];

const PricingPlans = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 px-2 w-full">
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4 text-center">
          Let's Checkin
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl text-center font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Affordable Pricing plans
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full xl:w-[1400px] mt-5">
        <div className="flex flex-col justify-start items-center py-5 w-[90%] sm:w-[400px] mx-auto md:w-1/3 xl:w-[400px] bg-smokeColor hover:bg-titleColor hover:text-white transition-all duration-500 delay-150 ease-in-out rounded-xl overflow-hidden group">
          <div className="flex justify-start items-center py-5  w-full  px-4 gap-5 border-b-[1px] border-white">
            <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
              <img
                src={safetySvg}
                alt="route img"
                className="transform transition-transform duration-500 group-hover:scale-x-[-1] text-white"
              />
            </div>
            <div className="flex">Basic Plan</div>
          </div>
          <div className="w-[90%] flex flex-col justify-start items-start mr-auto ml-[10%] text-[16px]">
            <div className="py-2 flex flex-row gap-1 items-center justify-end tracking-wider font-inter">
              <div className="flex text-2xl font-normal ">₹2000</div>
              <div className="flex text-xs font-light ">/Per Night</div>
            </div>
            <div className="flex flex-row ">
              Essential services for basic and signle person seeking.
            </div>
          </div>
          <div className="flex flex-col w-[90%] mx-auto py-5 ml-[10%] gap-4">
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5" />
              </div>
              <div>Upto 2 menbers</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Room service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Driver service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Tour management</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>collaboration</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Enterance Fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Guide Fees in destination</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-[80%] mx-auto bg-titleColor text-white group-hover:border-[1px] group-hover:border-white rounded-[32px] px-8 py-4">
            Get Started
          </div>
        </div>
        <div className="flex flex-col justify-start items-center py-5 w-[90%] sm:w-[400px] mx-auto md:w-1/3 xl:w-[400px] bg-smokeColor hover:bg-titleColor hover:text-white transition-all duration-500 delay-150 ease-in-out rounded-xl overflow-hidden group">
          <div className="flex justify-start items-center py-5  w-full  px-4 gap-5 border-b-[1px] border-white">
            <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
              <img
                src={safetySvg}
                alt="route img"
                className="transform transition-transform duration-500 group-hover:scale-x-[-1] text-white"
              />
            </div>
            <div className="flex">Advanced Plan</div>
          </div>
          <div className="w-[90%] flex flex-col justify-start items-start mr-auto ml-[10%] text-[16px]">
            <div className="py-2 flex flex-row gap-1 items-center justify-end tracking-wider font-inter">
              <div className="flex text-2xl font-normal ">₹2000</div>
              <div className="flex text-xs font-light ">/Per Night</div>
            </div>
            <div className="flex flex-row ">
              Essential services for basic and signle person seeking.
            </div>
          </div>
          <div className="flex flex-col w-[90%] mx-auto py-5 ml-[10%] gap-4">
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Upto 2 menbers</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Room service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Driver service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Tour management</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>collaboration</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Enterance Fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Guide Fees in destination</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-[80%] mx-auto bg-titleColor text-white group-hover:border-[1px] group-hover:border-white rounded-[32px] px-8 py-4">
            Get Started
          </div>
        </div>
        <div className="flex flex-col justify-start items-center py-5 w-[90%] sm:w-[400px] mx-auto md:w-1/3 xl:w-[400px] bg-smokeColor hover:bg-titleColor hover:text-white transition-all duration-500 delay-150 ease-in-out rounded-xl overflow-hidden group">
          <div className="flex justify-start items-center py-5  w-full  px-4 gap-5 border-b-[1px] border-white">
            <div className="bg-lemonYellow group px-5 py-5 rounded-full flex justify-center items-center transform transition-transform duration-500 group-hover:scale-x-[-1]">
              <img
                src={safetySvg}
                alt="route img"
                className="transform transition-transform duration-500 group-hover:scale-x-[-1] text-white"
              />
            </div>
            <div className="flex">Premium Plans</div>
          </div>
          <div className="w-[90%] flex flex-col justify-start items-start mr-auto ml-[10%] text-[16px]">
            <div className="py-2 flex flex-row gap-1 items-center justify-end tracking-wider font-inter">
              <div className="flex text-2xl font-normal ">₹2000</div>
              <div className="flex text-xs font-light ">/Per Night</div>
            </div>
            <div className="flex flex-row ">
              Essential services for basic and signle person seeking.
            </div>
          </div>
          <div className="flex flex-col w-[90%] mx-auto py-5 ml-[10%] gap-4">
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Upto 2 menbers</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Room service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Driver service fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Tour management</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>collaboration</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Enterance Fees</div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <div>
                <img src={checkImage} className="w-5 h-5 " />
              </div>
              <div>Guide Fees in destination</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-[80%] mx-auto bg-titleColor text-white group-hover:border-[1px] group-hover:border-white rounded-[32px] px-8 py-4">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
