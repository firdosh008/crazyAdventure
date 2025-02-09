import React from "react";

const QuickFacts = ({ quickFacts }) => {
  if (QuickFacts.length) {
    return;
  }
  const {
    duration,
    highestPoint,
    distance,
    difficulty,
    temperature,
    startingPoint,
    baseCamp,
    nearest,
    atm,
    bestTimeToVisit,
  } = quickFacts;

  return (
    <div className="rounded-lg flex flex-col justify-start items-start mr-auto">
      <h2 className="text-lg font-bold mb-4">Quick Facts</h2>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>
          <span className="font-semibold">Duration:</span> {duration}
        </li>
        <li>
          <span className="font-semibold">Highest Point:</span> {highestPoint}
        </li>
        <li>
          <span className="font-semibold">Distance:</span> {distance}
        </li>
        <li>
          <span className="font-semibold">Difficulty:</span> {difficulty}
        </li>
        <li>
          <span className="font-semibold">Temperature:</span>
          <ul className="ml-4 list-none">
            <li>Day: {temperature.day}</li>
            <li>Night: {temperature.night}</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Starting Point:</span> {startingPoint}
        </li>
        <li>
          <span className="font-semibold">Base Camp:</span> {baseCamp}
        </li>
        <li>
          <span className="font-semibold">Nearest Railway Station:</span>{" "}
          {nearest.railwayStation}
        </li>
        <li>
          <span className="font-semibold">Nearest Airport:</span>{" "}
          {nearest.airport}
        </li>
        <li>
          <span className="font-semibold">ATM:</span> {atm}
        </li>
        <li>
          <span className="font-semibold">Best Time to Visit:</span>{" "}
          {bestTimeToVisit.join(" and ")}
        </li>
      </ul>
    </div>
  );
};

export default QuickFacts;
