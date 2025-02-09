import React from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";

const HomeGallery = () => {
  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Make your tour more pleasure
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Recent Gallery
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row w-[80%] md:w-full lg:w-[80%] mx-auto h-full md:h-[40vh] lg:h-[50vh] gap-4">
        {/* Column 1 */}
        <div className="w-full md:w-1/5 h-full flex flex-col justify-center items-center">
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <div className="w-full overflow-hidden rounded-2xl h-[50%]">
              <img
                src={harKiDunTrek}
                className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-1/5 h-full flex flex-col justify-center items-center gap-2">
          <div className="w-full h-[45%] md:h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={kedarnathTrek}
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-[45%] md:h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={dyaraBuyalTrek}
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-full md:w-1/5 h-full flex flex-col justify-center items-center">
          <div className="w-full h-full mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={bgImage}
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-full md:w-1/5 h-full flex flex-col justify-center items-center gap-2">
          <div className="w-full h-[45%] md:h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={DeoriTalTrek}
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="w-full h-[45%] md:h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <img
              src={himachalPradesh}
              className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Column 5 */}
        <div className="w-full md:w-1/5 h-full flex flex-col justify-center items-center">
          <div className="w-full h-full flex justify-center items-center mx-auto overflow-hidden transition-all duration-500 ease-in-out rounded-2xl">
            <div className="w-full overflow-hidden rounded-2xl h-[50%] object-cover object-center">
              <img
                src={jammuKashmir}
                className="w-full h-full object-cover object-center rounded-2xl hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
