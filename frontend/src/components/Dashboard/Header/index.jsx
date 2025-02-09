import { useState, useEffect } from "react";
import React from "react";
import "../../Navbar/navbar.css";
import navBarLogo from "../../../assets/cm-logo.png";

const Logo = () => {
  return (
    <a
      href="https://thecrazymountaineers.com/"
      className="logo wrapper w-[8rem]  sm:w-48 flex items-center justify-center px-2"
    >
      <img src={navBarLogo} alt="logo" />
    </a>
  );
};

export default function Nav() {
  const handleScroll = () => {
    setChooseTrekDropdown(false);
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col font-inter text-[16px] font-normal leading-[26px] fixed z-50 top-0 left-0 right-0 w-full bg-white">
  <div
    className="flex bg-lemonYellow"
    style={{ position: "sticky", top: 0 }}
  >
    <div className="z-50 font-fredoka font-normal text-sm nav-wrapper w-[95%] mx-auto h-[85px] flex justify-between items-center py-2">
      <div
        className="nav-logo flex items-center"
        style={{
          position: "absolute",
          left: "1rem",
        }}
      >
        <Logo />
      </div>
      <h1
        className="font-bold"
        style={{
          fontSize: "40px",
          textAlign: "center",
          width: "100%",
          position: "relative",
        }}
      >
        Dashboard
      </h1>
    </div>
  </div>
</div>

  );
}
