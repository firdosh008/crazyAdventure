import React from "react";
import { CiBarcode } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";

import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";
import trekMap from "../../assets/maps/Kedarkantha-Trek-Route-Map.jpg";
import BookingForm from "./BookingForm";
import ReviewForm from "./ReviewForm";

const TrekComponent = ({ trekData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto max-w-[1200px] text-sm font-inter tracking-wide">
      <div className="flex w-full justify-start items-start font-bold text-[30px] tracking-wide font-inter py-5">
        {trekData?.title}
      </div>

      {/* Image Section */}
      <div className="flex w-full h-fit md:h-[50vh] flex-col md:flex-row justify-between items-center gap-1 rounded-xl ">
        <div className="flex flex-col w-full md:w-[65%] h-full rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl overflow-hidden">
          <img
            src={kedarkanthaTrek}
            className="w-full h-full  transition-all duration-500 ease-in-out rounded-tl-xl rounded-bl-xl items-center justify-center object-cover object-center hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-full md:w-[35%] h-full gap-1 overflow-hidden rounded-tr-xl rounded-br-xl ">
          <div className="w-full h-1/2 overflow-hidden">
            <img
              src={harKiDunTrek}
              className="w-full hover:scale-110  transition-all duration-500 ease-in-out h-full items-center justify-center object-cover object-center"
            />
          </div>
          <div className="flex flex-row justify-center items-center w-full h-1/2 gap-1">
            <div className="w-1/2 h-full overflow-hidden">
              <img
                src={harKiDunTrek}
                className="w-full hover:scale-110 h-full items-center justify-center object-cover object-center transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden relative">
              <img
                src={harKiDunTrek}
                className="w-full hover:scale-110 h-full items-center justify-center object-cover object-center transition-all duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 right-5 mb-2 rounded-xl text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-600  transition-all duration-300 ease-in-out cursor-pointer">
                See all
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex  flex-col lg:flex-row justify-between items-start gap-4 py-5 h-fit">
        <div className="flex flex-col justify-center items-center overflow-y-auto w-full lg:w-[70%]">
          <div className="flex justify-between items-start w-[50%] mr-auto">
            {/* Tour Code */}
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <CiBarcode />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Tour Code</div>
                <div className="font-light text-xs text-gray-500">12312312</div>
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <IoPricetagOutline />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Price</div>
                <div className="font-light text-xs text-gray-500">
                  from ₹3000
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          {/* <div className="flex flex-col font-inter justify-between items-start w-full mr-auto">
            <div className="heading text-[30px] flex justify-start items-start mb-10 font-semibold tracking-wider">
              Description
            </div>
            <div className="flex flex-col gap-8 w-full text-[14px]  tracking-wider py-5">
              {trekData.description.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div> */}

          {/* Map Section */}
          <div className="w-full h-full flex flex-col justify-between items-center gap-4">
            <div className="w-full flex justify-start items-start">
              A rough map of Kedarkantha Trek Route, not to scale.
            </div>
            <img
              className="w-full h-full object-contain rounded-md"
              src={trekData.mapImage}
              alt="trek map"
            />
          </div>
        </div>

        {/* Booking Form Component */}
        <BookingForm />
        <ReviewForm />
      </div>
    </div>
  );
};

export default TrekComponent;
