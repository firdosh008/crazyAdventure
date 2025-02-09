import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, symbol }) {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-center text-3xl font-semibold">
        <CountUp duration={10} className="font-inter " end={number} />
        <span>{symbol ? symbol : ""}</span> {/* Add the percentage sign here */}
      </div>
      <span>{title}</span>
    </div>
  );
}
