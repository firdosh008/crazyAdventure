import React from "react";
import bgLineImage from "../../assets/background/line-pattern2.png";
import GlowingCircle from "../utils/GlowingCircles";

const AnalyticData = () => {
  const data = [
    {
      number: 12,
      title: "Years Experience",
      symbol: "", // No symbol for this entry
    },
    {
      number: 97,
      title: "Retention Rate",
      symbol: "%", // Percentage symbol
    },
    {
      number: 8,
      title: "Tour Completed",
      symbol: "k", // Thousands symbol
    },
    {
      number: 19,
      title: "Happy Travellers",
      symbol: "k", // Thousands symbol
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center overflow-hidden  md:py-10 h-fit bg-white py-[5rem] " // Add flex properties for layout
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[5rem] xl:grid-flow-col xl:gap-[10px] my-5">
        {/* Use grid-cols-2 to create 2 columns */}
        {data.map((el, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index % 2 === 0 ? "mt-[3rem]" : "mb-[3rem]"
            }`}
          >
            <GlowingCircle props={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticData;
