import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQAccordion = ({ faqData }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => {
    setOpen(open === index ? 0 : index); // Toggle open/close on click
  };

  console.log("faq data is: ", faqData);

  return (
    <div className="w-full mx-auto my-8">
      {faqData?.map((menu, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          className="border-b-[1px] border-gray-300 pb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`font-normal pb-0 ${
              open === index + 1 ? "text-red-400 text-lg" : " text-sm  "
            }`}
          >
            {menu?.menuName || menu?.question}
          </AccordionHeader>
          <AccordionBody>
            {menu?.component || menu?.answer || (
              <ul className="list-none pl-0 gap-1">
                {menu?.items?.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 px-2 font-normal transition-all duration-300 ease-in-out hover:bg-gray-100 flex justify-start items-start cursor-pointer w-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

// Icon component for Accordion
const Icon = ({ id, open }) => {
  return (
    <span>
      {open === id ? (
        <svg
          className="w-4 h-4 rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      )}
    </span>
  );
};

export default FAQAccordion;
