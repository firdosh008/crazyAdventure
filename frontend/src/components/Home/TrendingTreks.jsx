import React from "react";
import { LetterFadeIn } from "../utils/LetterFadeIn";
import PopularTrekCard from "../utils/PopularTreksCard";

import kedarkhantaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import DeoriaTalChoptaTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import HarKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";

import bgLineImage from "../../assets/background/line-pattern2.png";

const TrendingTreks = () => {
  const treks = [
    {
      name: "Kedarkantha Trek",
      region: "Uttarkashi",
      duration: "5 Days",
      grade: "Easy - Moderate",
      altitude: "12,500 ft",
      trekDistance: "22 km",
      image: kedarkhantaTrek, // Placeholder image route
    },
    {
      name: "Deoria Tal Chopta Chandrashila Trek",
      region: "Ukhimath",
      duration: "N/A",
      grade: "Easy",
      altitude: "13,100 ft",
      trekDistance: "30 km",
      image: DeoriaTalChoptaTrek, // Placeholder image route
    },
    {
      name: "Har Ki Dun Trek",
      region: "Uttarkashi",
      duration: "7 Days",
      grade: "Easy - Moderate",
      altitude: "11,200 ft",
      trekDistance: "54 km",
      image: HarKiDunTrek, // Placeholder image route
    },
  ];

  const text =
    " Plan Your Winter Trek with The Crazy Mountaineers for a Memorable Experience";

  return (
    <div
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-3xl font-oswald font-semibold tracking-wider text-center flex justify-center items-center py-2 my-5">
        Trending Treks
      </div>
      <div className="flex justify-center items-center w-[90%] md:w-[80%] leading-8 mx-auto text-center text-sm md:text-md font-fredako">
        <LetterFadeIn text={text} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-5">
        {treks.map((el) => {
          return <PopularTrekCard item={el} />;
        })}
      </div>
    </div>
  );
};

export default TrendingTreks;
