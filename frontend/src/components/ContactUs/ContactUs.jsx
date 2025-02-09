import React, { useState } from "react";
import TopCard from "../utils/TopCard";

import banner1 from "../../assets/slide_02.png";
import { TiLocationOutline } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineWechatWork } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import formBgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";

import BookForm from "../utils/BookForm";
import WorkingOffice from "../About-us/WorkingOffice";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-start bg-gray-400">
      <TopCard title={"Contact Us"} bgImage={banner1} />
      <div className="bg-white pt-5 overflow-hidden">
        <div className="flex flex-col justify-center items-center mb-5  pt-[2rem] pb-[1rem]">
          <div className="flex justify-center items-center font-montez text-[40px]">
            Get In Touch
          </div>
          <div className="flex justify-center items-center font-inter text-[25px] sm:text-[35px] md:text-[48px] font-semibold">
            Our Contact Information
          </div>
        </div>
        <WorkingOffice />
        <div className="w-[90%] flex flex-col gap-4 mx-auto rounded-md hover:-translate-y-2 transition-all duration-300 ease-in-out py-5">
          <div className="flex flex-col items-center justify-center gap-2 py-4">
            <div className="font-montez text-4xl leading-6 pt-4">Locate us</div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54676.95935754655!2d78.192037!3d31.073304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908a7e1544cf3b5%3A0x922e86b38b6a55c0!2sThe%20Crazy%20Mountaineers!5e0!3m2!1sen!2sus!4v1730604603460!5m2!1sen!2sus"
            className="w-full h-[500px] rounded-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <BookForm />
      </div>
    </div>
  );
};

export default ContactUs;
