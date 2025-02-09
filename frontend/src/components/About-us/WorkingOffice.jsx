import React from "react";
import bgLineImage from "../../assets/background/line-pattern2.png";

const WorkingOffice = () => {
  const WorkingOfficeData = [
    {
      title: "Working Head Office",
      addressLines: [
        "H.No. 26/1, Vill.- Saur, P.O- Sankri,",
        "The Mori, Dist,-Uttarkashi-249128",
        "Saur Sankri, Uttarakhand, India",
      ],
    },
    {
      title: "Working Office",
      addressLines: [
        "Gandhi Gram, Near Sadhuram School,",
        "Balli Wala Chowk",
        "Dehradun, Uttarakhand, 248001, India",
        "Ph no. +91 95 5773 9933",
      ],
      email: "info@thecrazymountaineers.com",
    },
    {
      title: "For Further Information Contact:",
      addressLines: [
        "Mr. Kanishk Singh Rathore (Director) (+91-9557739933)",
        "Mr. Rohitash Singh Rawat (Director) (+91-9720793617)",
      ],
      email: "info@thecrazymountaineers.com",
    },
  ];

  return (
    <div
      className="flex flex-col lg:flex-row h-screen lg:h-[60vh] justify-center items-center lg:justify-between lg:items-start py-[10rem] w-[95%] lg:max-w-[1200px] mx-auto text-[16px] tracking-wide gap-8 md:gap-4"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {WorkingOfficeData?.map((office, index) => (
        <div
          key={index}
          className="relative flex w-[90%] sm:w-[80%] lg:w-1/3 min-h-[250px] flex-col justify-start items-center gap-4 bg-gray-100 rounded-md py-4 px-2 overflow-hidden shadow-md group transition-all duration-500 ease-in-out"
        >
          {/* Overlay */}
          <div className="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-all duration-500 delay-300 ease-in-out"></div>

          {/* Content */}
          <div className="z-10 py-2 relative flex flex-col items-center gap-4 text-gray-800 group-hover:text-white transition-colors duration-300">
            <div className="font-normal font-montez tracking-wider text-[24px]">
              {office.title}
            </div>
            <div className="font-normal flex flex-col justify-center items-center gap-1 text-xs md:text-sm">
              {office.addressLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              {office.email && (
                <a href={`mailto:${office.email}`} className="">
                  {office.email}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkingOffice;
