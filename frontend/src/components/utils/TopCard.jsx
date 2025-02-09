import React from "react";

const TopCard = ({ title, bgImage }) => {
  return (
    <div
      className="w-full relative h-[55vh] flex justfiy-center items-center mt-[5rem]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="title flex justify-center items-center w-full text-[55px] font-inter text-white font-bold z-20">
        {title}
      </div>
    </div>
  );
};

export default TopCard;
