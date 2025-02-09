import React from "react";
import bgLineImage from "../../assets/background/line-pattern2.png";

import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
const Team = () => {
  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">The Team</div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Meet Our team
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full gap-8">
        <div className="flex flex-col gap-5 md:flex-row justfiy-between items-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto group hover:bg-gray-50 delay-700 duration-500 ease-in-out rounded-md py-5 px-2">
          <div className="flex flex-col gap-4 justify-between items-center w-[50%] h-full">
            <div className="flex rounded-full w-[250px] h-[250px] overflow-hidden group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <img
                src={harKiDunTrek}
                className="rounded-full object-cover object-center hover:scale-110 transition-all duration-500 delay-300 ease-in-out"
              />
            </div>
            <div className="text-md font-semibold">
              Mr. Kanishk Singh Rathore
            </div>
          </div>
          <div className="flex text-sm  tracking-wider flex-col items-center justify-center md:items-start md:justify-start w-[90%] sm:w-[70%] md:w-[50%] mx-auto  md:ml-auto group-hover:-translate-y-2 transition-all duration-700 delay-300 ease-in-out">
            Our knowledgeable technical help & support team which is headed by
            Mr. Kanishk Singh Rathore is the first you speak with when you call
            The Crazy Mountaineers, they are always ready to answer all your
            questions, whether you have any doubts about the trek or any other
            help you might need to reach the location of your departure.
          </div>
        </div>
        <div className="hidden md:flex justfiy-between items-center w-[70%] lg:w-[50%] mx-auto group hover:bg-gray-50 delay-700 duration-500 ease-in-out rounded-md py-5 px-2">
          <div className="flex text-sm  tracking-wider flex-col items-start justify-start w-[50%]  group-hover:-translate-y-2 transition-all duration-700 delay-300 ease-in-out">
            Mr. Rohitash Singh Rawat was born and brought up in the beautiful
            Himalayan village of Sankri, he has been an avid adventure seeker.
            Since a very young age, he loved going on treks with his father Mr.
            Balveer Singh Rawat who himself had taken thousands of trekkers on a
            successful expedition through the wilderness of the Himalayas.
          </div>
          <div className="flex flex-col gap-4 justify-between items-center w-[50%] h-full">
            <div className="flex rounded-full w-[250px] h-[250px] overflow-hidden group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <img
                src={harKiDunTrek}
                className="rounded-full object-cover object-center hover:scale-110 transition-all duration-500 delay-300 ease-in-out"
              />
            </div>
            <div className="text-md font-semibold">
              Mr. Rohitash Singh Rawat
            </div>
          </div>
        </div>
        <div className="flex md:hidden  flex-col gap-5 md:flex-row justfiy-between items-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto group hover:bg-gray-50 delay-700 duration-500 ease-in-out rounded-md py-5 px-2">
          <div className="flex flex-col gap-4 justify-between items-center w-[50%] h-full">
            <div className="flex rounded-full w-[250px] h-[250px] overflow-hidden group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <img
                src={harKiDunTrek}
                className="rounded-full object-cover object-center hover:scale-110 transition-all duration-500 delay-300 ease-in-out"
              />
            </div>
            <div className="text-md font-semibold">
              Mr. Rohitash Singh Rawat
            </div>
          </div>
          <div className="flex text-sm  tracking-wider flex-col items-start justify-start w-[90%] sm:w-[70%]  group-hover:-translate-y-2 transition-all duration-700 delay-300 ease-in-out">
            Mr. Rohitash Singh Rawat was born and brought up in the beautiful
            Himalayan village of Sankri, he has been an avid adventure seeker.
            Since a very young age, he loved going on treks with his father Mr.
            Balveer Singh Rawat who himself had taken thousands of trekkers on a
            successful expedition through the wilderness of the Himalayas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
