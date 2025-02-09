import React from "react";

const CancellationPolicy = ({ policy }) => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{policy?.menuName}</h2>
      <div className="space-y-4">
        {policy?.items?.map((item, index) => {
          // Check if the item is not empty before rendering
          if (item.trim() !== "") {
            return (
              <div key={index} className="flex flex-col">
                <p className="text-md">{item}</p>
              </div>
            );
          }
          return null; // Skip rendering for empty items
        })}
      </div>
    </div>
  );
};

export default CancellationPolicy;
