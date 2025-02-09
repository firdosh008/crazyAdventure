import React from "react";

import BookingForm from "./BookingForm";
import FAQAccordion from "./FAQAccordion";
import QuickFacts from "./QuickFacts";

import ReviewForm from "./ReviewForm";
import AccordionList from "./AccordionComponent";
import HowToReach from "./HowToReach";
import EssentialItems from "./EssentialItems";
import TrekTerms from "./TrekTerms";
import CancellationPolicy from "./CancellationPolicy";
import ItiniaryData from "./ItitnearyData";

// image imports
import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";
import { IoPricetagOutline } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";
import trekMap from "../../assets/maps/Kedarkantha-Trek-Route-Map.jpg";
import { treksData } from "../utils/TreksData";
import { useTrek } from "../../Context/SelectedServiceContext";

const ServicePage = () => {
  const { selectedTrek, setSelectedTrek } = useTrek();
  const el = treksData[selectedTrek];

  const singleAccordionData = [
    {
      title: "How to Reach",
      component: <HowToReach howToReachData={el?.howToReach} />,
    },
    {
      title: "Essential Items",
      component: <EssentialItems essentialItems={el?.essentials} />,
    },
    {
      title: "Trek Terms",
      component: <TrekTerms terms={el?.costTerms} />,
    },
    {
      title: "Cancellation Policy",
      component: <CancellationPolicy policy={el?.trekCancellation} />,
    },
  ];

  return (
    <div className="flex mt-[10rem] flex-col justify-center items-start mx-auto w-[90%]  text-sm font-inter tracking-wide ">
      <div className="flex w-full justify-start items-start font-bold text-[30px] tracking-wide font-inter py-5">
        {el?.name}
      </div>

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
              {/* <div className="absolute bottom-0 right-5 mb-2 rounded-xl text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-600  transition-all duration-300 ease-in-out cursor-pointer">
                See all
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Description and Booking form */}
      <div className="flex  flex-col lg:flex-row justify-between items-start gap-4 py-5 relative">
        {/* Description */}
        <div className="flex flex-col justify-center items-center lg:min-h-screen w-full lg:w-[70%] gap-5">
          <div className="flex justify-between items-start w-[50%] mr-auto">
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <CiBarcode className="" />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Tour Code</div>
                <div className="font-light text-xs text-gray-500">
                  {el?.tourCode}
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <IoPricetagOutline className="" />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Price</div>
                <div className="font-light text-xs text-gray-500">
                  {el?.price}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter justify-between items-start w-full mr-auto">
            <div className="heading text-[30px] flex justify-start items-start mb-10 font-semibold tracking-wider">
              Description
            </div>
            <div className="flex flex-col gap-8 w-full text-[14px]  tracking-wider py-5">
              <div className="sub-heading text-[20px] flex justify-start items-start font-semibold tracking-wider">
                {el?.overview?.title}
              </div>
              {el?.overview?.paragraphs.map((para) => (
                <p>{para}</p>
              ))}
            </div>
          </div>
          {el?.mapImg && (
            <div className="w-full h-full flex flex-col justify-between items-center gap-4">
              <div className="w-full flex justify-start items-start">
                A rough map of Kedarkantha Trek Route, not to scale.
              </div>
              <img
                className="w-full h-full object-contain rounded-md"
                src={el?.mapImg}
                alt="trek-map"
              />
            </div>
          )}
          <ItiniaryData itineraryData={el?.itinerary} />
          <QuickFacts quickFacts={el?.QuickFacts} />
          <AccordionList singleAccordionData={singleAccordionData} />
          {el?.faqData?.length > 0 && <FAQAccordion faqData={el?.faqData} />}
          <ReviewForm />
        </div>

        {/* Booking form */}
        <div className="sticky top-16 w-[90%] md:w-[50%] lg:w-[30%] flex items-start justify-start  my-2">
          <BookingForm Trekname={el.name} price={el.price} />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
