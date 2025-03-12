import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import React from "react";

import "./navbar.css";
import navBarLogo from "../../assets/cm-logo.png";

import { IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { CiUser } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import logoBgMask from "../../assets/background/logo_bg_mask.png";
import { useNavigate } from "react-router-dom";

import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

import { useTrek } from "../../Context/SelectedServiceContext";
import { treksData } from "../utils/TreksData";
import { URLS } from "../../Utils/urls";

const navbarProps = {
  Logo: { type: "img", text: "LOGO GOES HERE !", img: "/vite.svg" },
  Nav: {
    "navlink 1": {
      type: "dropdown",
      dropdown: {
        "item-1": { type: "link", link: "#item-1" },
        "item-2": { type: "link", link: "#item-2" },
        "item-3": { type: "link", link: "#item-3" },
        "item-4": { type: "link", link: "#item-4" },
        "item-5": { type: "link", link: "#item-5" },
      },
    },
    // "Smartphone": { type: "link", link: "#Smartphone" },
    "navlink 2": { type: "link", link: "#navlink2" },
    "navlink 3": { type: "link", link: "#navlink3" },
    "navlink 4": { type: "link", link: "#navlink4" },
    "navlink 5": { type: "link", link: "#navlink5" },
    "navlink 6": { type: "link", link: "#navlink6" },
    "navlink 7": { type: "link", link: "#navlink7" },
    "navlink 8": { type: "link", link: "#navlink8" },
  },
};

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

const MenuToggleButton = ({ show, setShow }) => {
  return (
    <div
      className="menu_toggle_btn wrapper flex lg:hidden items-center justify-center w-16 h-full  ml-auto"
      onClick={() => setShow(!show)}
    >
      <div className="relative  w-full h-full flex flex-col gap-y-4 justify-center items-center">
        <div
          className={`bg-black w-8 h-1 rounded-md ${show ? "opacity-0 duration-300" : "opacity-100 duration-1000"
            }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md ${show ? "opacity-0 duration-300" : "opacity-100 duration-1000"
            }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md transform absolute top-[47%] left-[25%] transition-transform duration-500 ${show ? "rotate-45 " : "rotate-0"
            }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md transform absolute top-[47%] left-[25%] transition-transform duration-500 ${show ? "-rotate-45" : "rotate-0"
            }`}
        ></div>
      </div>
    </div>
  );
};

const trekNames = treksData?.map((el) => el.name);

const chooseDropdownData = [
  {
    menuName: "Treks by Name",
    items: trekNames,
    // items: [
    //   "Kedarkantha trek",
    //   "Har ki dun trek",
    //   "Gaumukh tapovan",
    //   "Rupin Pass trek",
    //   "Dayara bugyal trek",
    //   "Nag Tibba Trek",
    //   "Roopkund trek",
    //   "Chopta Trek",
    //   "Gaumukh tapovan trek",
    //   "Rupin Pass trek",
    //   "Valley of flowers trek",
    // ],
  },
  {
    menuName: "Months",
    items: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    menuName: "Difficulty",
    items: ["Easy", "Moderate", "Difficult", "Very Difficult"],
  },
  {
    menuName: "Seasons",
    items: ["Winter", "Spring", "Summer", "Monsoon", "Autumn"],
  },
];

const DropdownMenu = ({
  menuName,
  index,
  items,
  activeDropdown,
  setActiveDropDown,
}) => {
  const navigate = useNavigate();
  const { selectedTrek, setSelectedTrek } = useTrek();

  useEffect(() => {
    if (selectedTrek !== null) {
      navigate("/services");
    }
    console.log("selected services is: ", selectedTrek);
  }, [selectedTrek]);
  console.log("slected trek: ", selectedTrek);

  return (
    <div
      className="relative rounded-lg group py-2 px-4 bg-white w-full capitalize hover:bg-gray-100 "
      onMouseEnter={() => setActiveDropDown(menuName)}
      onMouseLeave={() => setActiveDropDown("")}
    >
      {menuName}
      <div
        className={`absolute top-2 rounded-lg right-[-100%] ${activeDropdown === menuName
          ? "flex flex-col h-fit w-full"
          : "hidden h-0 w-0"
          } transition-all duration-300 ease-in-out bg-white text-black`}
      >
        <ul className="type-none flex flex-col text-sm max-h-[400px] overflow-y-auto overflow-x-hidden">
          {items?.map((item, index) => (
            <li
              key={index}
              className={`hover:bg-gray-200 px-4 py-2 border-b-[0.1px] border-gray-300 ${index === 0 ? "rounded-t-lg" : ""
                } ${index === items.length - 1 ? "rounded-b-lg" : ""}`}
              onClick={() => {
                setSelectedTrek(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function SmallScreenAccordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const navigate = useNavigate();
  const { selectedTrek, setSelectedTrek } = useTrek();

  useEffect(() => {
    if (selectedTrek !== null) {
      navigate("/services");
    }
    console.log("selected services is: ", selectedTrek);
  }, [selectedTrek]);
  console.log("slected trek: ", selectedTrek);

  return (
    <>
      {chooseDropdownData?.map((menu, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          className="border-b-[1px] border-gray-300 pb-2"
          onMouseIn={() => console.log("mosue hover")}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`font-normal pb-0 ${open === index + 1 ? "text-red-400 text-lg" : " text-sm  "
              }`}
          >
            {menu.menuName}
          </AccordionHeader>
          <AccordionBody>
            <ul className="list-none pl-0 gap-1 h-[60vh] overflow-y-auto">
              {menu?.items?.map((item, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedTrek(i);
                    setOpen(0);
                  }}
                  className="py-1 px-2 font-normal transition-all duration-300 ease-in-out  hover:bg-gray-100 flex justify-start items-start cursor-pointer w-full border-b-[1px] border-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

export default function Nav() {
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState("");
  const [chooseTrekDropdown, setChooseTrekDropdown] = useState(false);

  const navigate = useNavigate();

  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handle_logout = async () => {
    try {
      const response = await fetch(`${URLS.backendUrl}/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("admin");
        console.log("Successfully logged out");
        navigate("/");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

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
      <div className="h-8 w-[90%]  mx-auto bg-white flex justify-between   items-center text-center px-4 cursor-pointer font-inter pl-5 text-[10px] sm:text-[12px]  font-normal">
        <div className="hidden lg:flex gap-2">
          <div className="transition-all duration-300 delay-150 ease-in-out flex justify-between items-center gap-2 font-inter tracking-wide">
            <IoLocationOutline className="w-4 h-4 font-semibold" />
            <div>Clock Tower, Dehardun</div>
          </div>
          <div className="text-gray-400">|</div>
          <div className="transition-all duration-300 delay-150 ease-in-out flex justify-between items-center gap-2 tracking-wide">
            <GoClock className="w-4 h-4 " />
            <div>Sun to Friday: 8.00 am - 7.00 pm</div>
          </div>
        </div>
        <div className="flex gap-2 tracking-wider justify-center items-center w-[98%] md:w-fit mx-auto md:ml-auto md:mr-5 lg:ml-0 lg:mr-0">
          <div className="transition-all duration-300 delay-150 ease-in-out">
            Ph no.
          </div>
          <div className="text-gray-400">|</div>
          <div className="transition-all duration-300 delay-150 ease-in-out">
            FAQ
          </div>
          <div className="text-gray-400">|</div>
          <div className="transition-all duration-300 delay-150 ease-in-out">
            Support
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex flex-row justify-center items-center">
            {localStorage.getItem("userId") == null ? (
              <div className="transition-all duration-300 delay-150 ease-in-out">
                <button onClick={() => navigate("/login")}>Sign In | </button>
                <button onClick={() => navigate("/signup")}>  Register</button>
              </div>
            ) : (
              <>
                <button >{`${localStorage.getItem("name")} |`}</button>
                <button onClick={handle_logout}>Log Out</button>
                <CiUser className="flex items-center justify-center w-4 h-4" />
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex bg-lemonYellow "
        style={{ position: "sticky", top: 0 }}
      >
        <div
          className="z-50 font-fredoka font-normal text-sm nav-wrapper w-[95%] lg:w-[] mx-auto h-[85px] flex justify-between items-center py-2 relative"
          onClick={() => setIsDropdownVisible(false)}
        >
          <div className="nav-logo flex justify-center items-center px-2 font-bold text-xs ">
            <Logo />
          </div>

          {/* for small devices DRAWER */}
          <div className="">
            <div
              className={` bg-white top-0 z-50 w-[70%] sm:w-[50%] fixed xl:hidden  transition-all duration-700 delay-300 md:transform-none ${show ? "left-0 h-full" : "h-0 left-[-2000px]"
                }`}
            >
              <div className="relative flex justify-center items-center py-5 bg-blue-100">
                <Logo />
                <button
                  className="absolute top-1 right-1 flex items-center justify-center bg-black bg-opacity-80 text-white rounded-full h-5 w-5 text-[16px] z-40"
                  onClick={() => setShow(!show)}
                >
                  <IoClose />
                </button>
              </div>
              <ul
                className={`font-inter flex flex-col w-[80%] mx-auto transition-all duration-500 md:transform-none md:delay-0 md:duration-0 ${show ? "h-screen " : "h-0 "
                  }  text-left font-normal text-[16px]`}
              >
                <li className="md:text-[#0A1D56] cursor-pointer pt-4 pb-1 transition-all duration-500 ease-in-out text-[16px]">
                  <div
                    className="w-full flex justify-between items-center pb-1 "
                    onClick={handleDropdown}
                  >
                    <div
                      className={`flex justify-start items-center ${isVisible ? "text-blue-500" : ""
                        } transition-colors duration-300 delay-150 ease-in-out`}
                    >
                      Treks
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-3 h-3  ${isVisible ? "rotate-180 " : "rotate-0 "
                        } transition-transform duration-500 ease-in-out`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="w-full mx-auto border-[1px] bg-gray-400" />
                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isVisible ? "max-h-96" : "max-h-0"
                      }`}
                    style={{ maxHeight: isVisible ? "400px" : "0" }}
                  >
                    <ul className="bg-pink overflow-hidden w-full mx-auto">
                      <li className="justify-start items-center flex pt-4 pb-1">
                        Uttarakhand-treks
                      </li>
                      <div className="w-full mx-auto border-[1px] bg-gray-400" />
                      <li className="justify-start items-center flex pt-4 pb-1">
                        Himanchal-treks
                      </li>
                      <div className="w-full mx-auto border-[1px] bg-gray-400" />
                      <li className="justify-start items-center flex pt-4 pb-1">
                        Jammu & Kashmir-treks
                      </li>
                      <div className="w-full mx-auto border-[1px] bg-gray-400" />
                      <li className="justify-start items-center flex pt-4 pb-1">
                        Leh-treks
                      </li>
                      <div className="w-full mx-auto border-[1px] bg-gray-400" />
                    </ul>
                  </div>
                </li>

                <li
                  className="pt-4 pb-1 text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li
                  className="pt-4 pb-1  text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                  onClick={() => navigate("/aboutus")}
                >
                  About Us
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li
                  className="pt-4 pb-1  text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li className="pt-4 pb-1 text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                  Blogs
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li
                  className="pt-4 pb-1 text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li
                  className="pt-4 pb-1 text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                  onClick={() => navigate("/services")}
                >
                  Services
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />

                <li className="pt-4 pb-1 text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                  FAQ's
                </li>
                <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              </ul>
            </div>
            <div
              className={`fixed inset-0 bg-black bg-opacity-70 z-[45] ${show ? "flex" : "hidden"
                }`}
              onClick={() => setShow(!show)}
            />
          </div>

          {/* for bigger screen */}
          <div className="ml-auto mr-5 hidden lg:flex px-4 text-[15px] xl:text-[16px] font-normal font-inter h-full tracking-wider text-nowrap">
            <ul className="type-none flex  md:space-x-5 h-full mr-5 gap-[0.1rem] lg:gap-4">
              <div
                className="group flex items-center navlink relative h-full cursor-pointer"
                onClick={() => navigate("/")}
              >
                <p className="">Home</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div
                className="group flex items-center navlink relative h-full cursor-pointer"
                onClick={() => navigate("/aboutus")}
              >
                <p className="">About Us</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div className="h-full items-center text-nowrap flex cursor-pointer group relative">
                <div
                  className="relative text-black border-none overflow-hidden h-full"
                  onClick={() => setChooseTrekDropdown(!chooseTrekDropdown)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 h-full">
                    <div>Activities</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-3 h-3 transition-transform duration-500 ease-in-out group-hover:rotate-180 rotate-0`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                  {/* The horizontal line */}
                  <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
                <div
                  className={`absolute -z-[10] hover:z-[30] bg-white  shadow-md rounded-lg w-[200px] mx-auto text-sm font-light tracking-wide transition-all duration-500 delay-0 ease-in-out transform
                   group-hover:translate-y-0 group-hover:top-[110%] group-hover:opacity-100
                  -translate-y-4 opacity-0  top-[-5000%]
               hidden sm:flex flex-col justify-between items-start ${chooseTrekDropdown ? "flex" : "hidden"
                    }`}
                  style={{
                    transformOrigin: "top",
                  }}
                >
                  {chooseDropdownData?.map((dropdown, index) => (
                    <DropdownMenu
                      key={index}
                      index={index}
                      menuName={dropdown.menuName}
                      items={dropdown.items}
                      activeDropdown={activeDropDown}
                      setActiveDropDown={setActiveDropDown}
                    />
                  ))}
                  <div
                    className="relative rounded-lg group py-2 px-4 bg-white w-full capitalize hover:bg-gray-100"
                    onClick={() => navigate("/services")}
                  >
                    Services
                  </div>
                </div>
              </div>

              <div className="group flex items-center navlink relative h-full cursor-pointer">
                <p className="">Blogs</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div
                className="group flex items-center navlink relative h-full cursor-pointer"
                onClick={() => navigate("/gallery")}
              >
                <p className="">Gallery</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div
                className="group flex items-center navlink relative h-full cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <p className="">Contact</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div className="group flex items-center navlink relative h-full cursor-pointer">
                <p className="">FAQ's</p>
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>
            </ul>
          </div>

          <div className=" mx-auto text-nowrap flex lg:hidden cursor-pointer mr-1 z-40 group relative">
            <div
              className="relative rounded-[32px] bg-white text-black px-4 py-1 sm:px-8 sm:py-3 border-none overflow-hidden hover:bg-opacity-90"
              onClick={() => setChooseTrekDropdown(!chooseTrekDropdown)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <div>Choose Trek</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-3 h-3 transition-transform duration-500 ease-in-out group-hover:hover:bg-white group-hover:rotate-180 rotate-0
                  `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              className={`absolute -z-[10] hover:z-[30] bg-white  shadow-md rounded-lg w-[200px] mx-auto text-sm font-light tracking-wide transition-all duration-500 delay-0 ease-in-out transform
                   group-hover:translate-y-0 group-hover:top-[110%] group-hover:opacity-100
                  -translate-y-4 opacity-0  top-[-5000%]
               hidden sm:flex flex-col justify-between items-start ${chooseTrekDropdown ? "flex" : "lg:hidden"
                }`}
              style={{
                transformOrigin: "top",
              }}
            >
              {chooseDropdownData?.map((dropdown, index) => (
                <DropdownMenu
                  key={index}
                  menuName={dropdown.menuName}
                  items={dropdown.items}
                  activeDropdown={activeDropDown}
                  setActiveDropDown={setActiveDropDown}
                />
              ))}
              <div
                className="relative rounded-lg group py-2 px-4 bg-white w-full capitalize hover:bg-gray-100"
                onClick={() => navigate("/services")}
              >
                Services
              </div>
            </div>
          </div>

          {/* ChooseTrek dropdown for smaller screen*/}
          <div
            className={` py-2 absolute z-[30] bg-white  shadow-md w-screen px-4 left-[-3%] right-0 mx-auto text-sm font-light tracking-wide transition-all duration-1000 delay-0 ease-in-out transform
                   group-hover:translate-y-0 top-[120%] group-hover:opacity-100
                  -translate-y-4 opacity-100
            ${chooseTrekDropdown ? "flex sm:hidden" : "hidden"
              } flex-col justify-between items-start transition-all duration-500 ease-in-out`}
            style={{
              transformOrigin: "top",
            }}
          >
            <SmallScreenAccordion />
          </div>

          <div className="ml-auto hidden text-nowrap md:flex bg-black text-white hover:text-black px-8 py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <div>Book Now</div>
              <FaArrowRight />
            </span>
            <div className="absolute inset-0 bg-black group-hover:bg-transparent border-transparent">
              <div className="mask absolute inset-0 bg-white transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
            </div>
          </div>
          <MenuToggleButton show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
}

// Treks Dropdown
// <div
//   className="navlink relative h-full cursor-pointer"
//   onMouseEnter={() => setIsDropdownVisible(true)}
//   onMouseLeave={() => setIsDropdownVisible(false)}
// >
//   <div className="relative flex group items-center gap-1 h-full ">
//     <p className="">Treks</p>

//     {/* Bottom border animation */}
//     <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black  transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

//     {/* Rotating arrow icon */}
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className={`w-3 h-3 transition-transform duration-500 ease-in-out group-hover:hover:bg-white ${
//         isDropDownVisible ? "rotate-180" : "rotate-0"
//       }`}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m19.5 8.25-7.5 7.5-7.5-7.5"
//       />
//     </svg>

//     {/* {isDropDownVisible && ( */}
//     {/* Dropdown menu */}
//     <div
//       className={`absolute top-[100%] z-[40] bg-white  shadow-md rounded md:w-[80vw] lg:w-[850px] h-[450px] mx-auto text-sm font-light tracking-wide transition-all duration-1000 delay-0 ease-in-out transform ${
//         isDropDownVisible
//           ? "translate-y-0 opacity-100 left-[-300%] xl:left-[-400%]"
//           : "-translate-y-4 opacity-100  left-[5000%]"
//       } flex flex-row justify-between items-start`}
//       style={{
//         transformOrigin: "top",
//       }}
//       onMouseLeave={() => setIsDropdownVisible(false)}
//     >
//       <ul className="w-[20%] flex justify-start items-start flex-col">
//         <div className="p-2 text-nowrap hover:text-black font-normal w-full">
//           Treks
//         </div>
//         <li className="p-2 text-nowrap hover:text-black w-full">
//           Uttarakhand-treks
//         </li>
//         <li className="p-2 text-nowrap hover:text-black w-full">
//           Himachal-treks
//         </li>
//         <li className="p-2 text-nowrap hover:text-black w-full">
//           Jammu & Kashmir-treks
//         </li>
//         <li className="p-2 text-nowrap hover:text-black w-full">Leh-treks</li>
//       </ul>

//       <ul className="w-[20%] flex justify-start items-start flex-col">
//         <div className="p-2 text-nowrap hover:text-black font-normal">
//           Activities
//         </div>
//         <li className="p-2 text-nowrap hover:text-black">Uttarakhand-treks</li>
//         <li className="p-2 text-nowrap hover:text-black">Himachal-treks</li>
//         <li className="p-2 text-nowrap hover:text-black">
//           Jammu & Kashmir-treks
//         </li>
//         <li className="p-2 text-nowrap hover:text-black">Leh-treks</li>
//       </ul>
//       <div className="w-[50%] h-full flex flex-col justify-center items-center px-2 py-4 gap-2">
//         <img
//           src={bgImage}
//           className="object-cover object-center w-full h-[50%] rounded-md"
//         />
//         <img
//           src={bgImage}
//           className="object-cover object-center w-full h-[50%] rounded-md"
//         />
//       </div>
//     </div>
//     {/* )} */}
//   </div>
// </div>;
