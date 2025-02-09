import React from "react";

const HowToReach = ({ howToReachData }) => {
  console.log("how to reach data: ", howToReachData);
  return (
    <div className="p-4">
      {/* By Air Section */}
      {howToReachData?.byAir ? (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">By Air</h2>
          <p className="mb-2">{howToReachData?.byAir}</p>
        </section>
      ) : (
        ""
      )}

      {/* By Train Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">By Train</h2>
        <p className="mb-2">Take the overnight train to Dehradun from Delhi:</p>
        <ul className="list-disc list-inside space-y-2">
          {howToReachData?.byTrain &&
            howToReachData?.byTrain.map((train, index) => (
              <li key={index}>
                <strong>{train?.name}</strong> - Train no: {train?.trainNo}{" "}
                (Departure: {train?.departure}; Arrival: {train?.arrival})
              </li>
            ))}
        </ul>
      </section>

      {/* By Bus Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">By Bus</h2>
        {howToReachData?.byBus &&
          howToReachData?.byBus.map((busItem, index) => (
            <div key={index} className="mb-2">
              {busItem?.type === "text" ? (
                <p>{busItem?.content}</p>
              ) : busItem?.type === "header" ? (
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {busItem?.content}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {busItem?.subitems?.map((subitem, subIndex) => (
                      <li key={subIndex}>{subitem}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
      </section>
    </div>
  );
};

export default HowToReach;
