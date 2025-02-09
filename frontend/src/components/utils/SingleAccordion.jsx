import React, { useEffect, useState } from "react";
import HowToReach from "../Services/HowToReach";

const SingleAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative flex flex-col justify-center items-center w-full my-5 transition-all duration-300 ease-in-out rounded-md"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`w-full flex justify-between items-center py-2 px-6 border-[2px] ${
          open ? "rounded-t-md font-semibold text-lg" : "rounded-md font-normal"
        } border-lemonYellow transition-all duration-300 ease-in-out`}
      >
        <div>{title}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${
            open ? "rotate-180" : "rotate-0"
          } h-4 w-4  transition-all duration-300 ease-in-out`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        className={`relative py-10 px-5 top-full rounded-b-md border-[2px] border-t-0 border-lemonYellow w-full transition-all duration-500 delay-100 ease-in-out ${
          open
            ? "flex opacity-100 transform translate-y-0"
            : "hidden  opacity-0 transform -translate-y-2"
        } justify-center items-center`}
      >
        {children}
      </div>
    </div>
  );
};

export default SingleAccordion;
