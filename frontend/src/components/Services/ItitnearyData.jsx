import React, { useState } from "react";
import SingleAccordion from "../utils/SingleAccordion";

const ItiniaryData = ({ itineraryData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log("itini: ", itineraryData);

  return (
    <div className="w-full transition-all duration-300 ease-in-out">
      {itineraryData.map((item, index) => (
        <SingleAccordion
          key={index}
          // Format title to include "Day" and the title
          title={`${item.day}: ${item.title}`}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        >
          <div className="text-gray-700">
            {item?.description?.map((desc, idx) => (
              <p key={idx} className="mb-2">
                {desc}
              </p>
            ))}
            <div className="mt-4">
              <strong>Brief Overview:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Altitude: {item.briefOverview.altitude}</li>
                <li>Drive Distance: {item.briefOverview.driveDistance}</li>
                <li>Arrival Time: {item.briefOverview.arrivalTime}</li>
                <li>Network: {item.briefOverview.network}</li>
              </ul>
            </div>
          </div>
        </SingleAccordion>
      ))}
    </div>
  );
};

export default ItiniaryData;
