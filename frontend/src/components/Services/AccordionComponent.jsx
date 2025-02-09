import React, { useState } from "react";

import QuickFacts from "./QuickFacts";
import HowToReach from "./HowToReach";
import EssentialItems from "./EssentialItems";
import TrekTerms from "./TrekTerms";

import SingleAccordion from "../utils/SingleAccordion";

const AccordionList = ({ singleAccordionData }) => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the currently open accordion

  // Function to toggle the accordion
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the accordion if it's already open
    } else {
      setOpenIndex(index); // Open the selected accordion
    }
  };

  return (
    <div className="w-full trasition-all duration-300 ease-in-out">
      {singleAccordionData.map((item, index) => (
        <SingleAccordion
          key={index}
          title={item.title}
          isOpen={openIndex === index} // Only open the accordion with the active index
          onClick={() => handleToggle(index)} // Set the accordion to open on click
        >
          {item.component}
        </SingleAccordion>
      ))}
    </div>
  );
};

export default AccordionList;
