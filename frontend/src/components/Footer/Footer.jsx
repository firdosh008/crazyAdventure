import { Typography } from "@material-tailwind/react";
import footerLogo from "../../assets/cm-logo.png";
import footerBottomBg from "../../assets/background/footerBottomBg.jpg";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { TbMail } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
import bgLineImage from "../../assets/background/line-pattern2.png";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";

export function Footer() {
  return (
    <footer class="bg-black bg-opacity-90 text-white overflow-hidden">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between gap-3 lg:gap-6 flex-col lg:flex-row">
          <div className="flex flex-col sm:flex-row  text-xs font-inter tracking-wider justify-between w-full lg:w-[50%] mx-auto mt-10 gap-5">
            <div className="flex flex-col justify-start md:justify-between  items-start gap-5 my-2">
              <div class="mb-6 md:mb-0">
                <a
                  href="https://www.thecrazymountaineers.com/"
                  class="flex items-start justify-start md:justify-center mr-auto md:mr-0"
                >
                  <img src={footerLogo} class="h-15 me-3" alt="FlowBite Logo" />
                  {/* <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Home
              </span> */}
                </a>
              </div>
              <div class="flex mt-4 justify-start md:justify-center sm:mt-0 gap-2">
                <div className="mb-4 flex justify-start items-center gap-2 group">
                  <div className="p-2   bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center rounded-full group-hover:text-white transition-all duration-500 delay-150">
                    <BiLogoFacebook className="w-4 h-4 group-hover:text-white transition-all duration-500 delay-150" />
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center gap-2 group">
                  <div className="p-2   bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center rounded-full group-hover:text-white transition-all duration-500 delay-150">
                    <FaTwitter className="w-4 h-4" />
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center gap-2 group">
                  <div className="p-2   bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center rounded-full group-hover:text-white transition-all duration-500 delay-150">
                    <FaLinkedinIn className="w-4 h-4" />
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center gap-2 group">
                  <div className="p-2   bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center rounded-full group-hover:text-white transition-all duration-500 delay-150">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                </div>
                <div className="mb-4 flex justify-start items-center gap-2 group">
                  <div className="p-2   bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center rounded-full group-hover:text-white transition-all duration-500 delay-150">
                    <FaInstagram className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start md:justify-center items-start flex-col w-fit mr-[5.5rem] lg:mr-0 text-nowrap">
              <h2 className="mb-6 text-[16px]   font-normal uppercase p-2">
                Quick Links
              </h2>
              <ul className=" font-light text-[14px]">
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <FaArrowRight />
                  </div>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <FaArrowRight />
                  </div>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <FaArrowRight />
                  </div>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <FaArrowRight />
                  </div>
                  <a href="#" className="hover:underline">
                    Terms Of Service
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <FaArrowRight />
                  </div>
                  <a href="#" className="hover:underline">
                    Tour Booking Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6  font-inter tracking-wider justify-between items-start w-full lg:w-[50%] mx-auto mt-10">
            <div className="flex justify-start md:justify-center items-start  flex-col ">
              <h2 className="mb-6 text-[16px] font-normal  uppercase p-2">
                Address
              </h2>
              <ul className=" font-light text-[14px]">
                <li className="mb-4 flex justify-start items-center gap-2 ">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full bg-black">
                    <MdOutlineWifiCalling3 />
                  </div>
                  <a href="#" className="hover:underline">
                    Adreess
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <TbMail />
                  </div>
                  <a href="#" className="hover:underline">
                    Mail@mail.com
                  </a>
                </li>
                <li className="mb-4 flex justify-start items-center gap-2">
                  <div className="p-2   bg-opacity-30 flex justify-center items-center rounded-full">
                    <TiLocationOutline />
                  </div>
                  <a href="#" className="hover:underline">
                    Location
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-start md:justify-center items-start  flex-col">
              <h2 className="mb-6 text-[16px] font-normal  uppercase p-2">
                Instagram
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={kedarkanthaTrek}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={kedarnathTrek}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={dyaraBuyalTrek}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={harKiDunTrek}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={DeoriTalTrek}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                  <div className="relative group w-[5rem] h-[5rem]">
                    <img
                      src={jammuKashmir}
                      className="w-full h-full object-center object-cover rounded-sm z-30"
                    />
                    <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-30 z-20 opacity-0 group-hover:opacity-60 group-hover:z-40 transform scale-0 group-hover:scale-100 group-hover:bg-opacity-70 transition-all duration-700 delay-300 ease-in-out rounded-sm pointer-events-none group-hover:pointer-events-auto">
                      <FaInstagram className="w-5 h-5 text-white transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-500 ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div
          class="flex items-center justify-center text-center"
          // style={{
          //   backgroundImage: `url(${footerBottomBg})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <span class="text-sm text-white sm:text-center ">
            © 2023{" "}
            <a
              href="https://www.thecrazymountaineers.com/"
              class="hover:underline"
            >
              The Crazy Adventure™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
