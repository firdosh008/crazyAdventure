import React from "react";

import { MdOutlineSell } from "react-icons/md";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";

const PopularTrekCard = ({ item }) => {
  console.log("item is: ", item);
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };
  return (
    <div
      className={`relative bg-black shadow-xl flex flex-col `}
      data-aos="fade-up"
    >
      <div
        className="img overflow-hidden"
        style={{
          maxWidth: "300px",
          minWidth: "300px",
          maxHeight: "210px",
          minHeight: "210px",
        }}
      >
        <img
          src={item?.image}
          alt="card image"
          style={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "210px",
            minHeight: "210px",
          }}
          loading="lazy"
          className="object-cover transition-transform duration-500 hover:scale-110 overflow-hidden"
        />
      </div>
      <div className="h-[280px] flex flex-col px-2 py-5 bg-gray-100">
        <p className="text-md py-2 text-center tracking-wide font-fredoka overflow-hidden">
          {item?.name}
        </p>
        <div className="w-[80%] mx-auto text-sm">
          <div className="py-2 flex justify-between items-center">
            <p className="font-normal">Region</p>
            <p className="font-normal">{item?.region}</p>
          </div>
          <div className="py-2 flex justify-between items-center">
            <p className="font-normal tracking-wide">Duration</p>
            <p className="font-normal tracking-wide">{item?.duration}</p>
          </div>
          <div className="py-2 flex justify-between items-center">
            <p className="font-normal tracking-wide">Grade</p>
            <p className="font-normal tracking-wide">{item?.grade}</p>
          </div>
          <div className="py-2 flex justify-between items-center">
            <p className="font-normal tracking-wide">Altitude</p>
            <p className="font-normal tracking-wide">{item?.altitude}</p>
          </div>
          <div className="py-2 flex justify-between items-center">
            <p className="font-normal tracking-wide">Trek Distance</p>
            <p className="font-normal tracking-wide">{item?.trekDistance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTrekCard;
