import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import useDarkMode from "../Hooks/useDarkMode";
import "./ExperienceTab.css";
import "./NavBar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [background, setBackground] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const sidebarRef = useRef();

  // console.log(sidebarRef.current.contains(e.target));
  useEffect(() => {
    // Attach click event listener to the document when the sidebar is open
    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener when the sidebar is closed or component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  const handleOutsideClick = (event) => {
    // Check if the clicked target is inside the sidebar
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 150) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Removing");
      });
    };
  }, []);

  const navItems = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    // { href: "#services", name: "Service" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#blog", name: "Blog" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <>
      <div
        className={` h-20  flex justify-center  w-full fixed top-0 z-50 backdrop-blur-lg${
          background ? " bg-blue-100/50 md:backdrop-blur-lg md:shadow h-16" : ""
        } duration-500 `}
      >
        <div className="flex  justify-between items-center mx-auto container px-3 ">
          {/* logo */}
          {/* <div className="">
            <a href="/" className="flex items-center ">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <img className="" width={50} src="logo.png" alt="" />{" "}
              </span>
            </a>
          </div> */}

          {/* mobile menu */}
          <div className="md:hidden">
            {/* menu toggle */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              data-collapse-toggle="mobile-menu"
              type="button"
              className="dark:text-white text-black text-3xl"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              {!isNavOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
            </button>
            {/* menu */}
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex gap-6 text-white flex-wrap md:p-0 p-5  mt-0  ">
            {/* menu */}
            <ScrollSpy>
              {navItems.map((item, index) => (
                <a
                  ref={React.createRef()}
                  href={item.href}
                  key={index}
                  className={`dark:text-white text-black block pb-3 list-border cursor-pointer relative md:text-xl text-base md:my-0 my-3 font-[600] `}
                >
                  {item.name}
                </a>
              ))}
            </ScrollSpy>
            {/* git hub */}
            <span className="mr-2">
              <a
                href="https://github.com/writetofahim"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  className="text-2xl dark:text-white text-black"
                  icon={faGithub}
                />{" "}
              </a>
            </span>
            {/* Linkedin */}
            <span>
              <a
                href="https://www.linkedin.com/in/fahim-ahammad/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  className="text-2xl dark:text-white text-black"
                  icon={faLinkedin}
                />{" "}
              </a>
            </span>
            {/* theme  */}
            <span
              onClick={() => setTheme(colorTheme)}
              className="md:inline block md:mt-0 mt-5 cursor-pointer "
            >
              {colorTheme === "dark" ? dark : light}
            </span>
          </div>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={` fixed z-50  right-0 ${
          background ? "top-16" : "top-20"
        } w-52 ${
          isNavOpen ? "translate-x-0" : "translate-x-52"
        } transition-all ease-in-out duration-300 px-5 bg-blue-100/50 backdrop-blur-lg h-screen`}
      >
        {/* menu */}
        {navItems.map((item, index) => (
          <a
            ref={React.createRef()}
            href={item.href}
            key={index}
            className={`dark:text-white text-black block pb-3 cursor-pointer relative text-base my-3 font-[600] `}
          >
            {item.name}
          </a>
        ))}
        {/* git hub */}
        <span className="mr-2">
          <a
            href="https://github.com/writetofahim"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              className="text-2xl dark:text-white text-black"
              icon={faGithub}
            />{" "}
          </a>
        </span>
        {/* Linkedin */}
        <span>
          <a
            href="https://www.linkedin.com/in/fahim-ahammad/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              className="text-2xl dark:text-white text-black"
              icon={faLinkedin}
            />{" "}
          </a>
        </span>
        {/* theme  */}
        <span
          onClick={() => setTheme(colorTheme)}
          className="md:inline block md:mt-0 mt-5 cursor-pointer "
        >
          {colorTheme === "dark" ? dark : light}
        </span>
        <img
          className="absolute  w-[95%] h-screen"
          src={`https://tailwindcss.com/_next/static/media/8-dark@tinypng.7abc66a1.png`}
          alt=""
        />
      </div>
    </>
  );
};

const light = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 dark:text-gray-100 text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
const dark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 dark:text-gray-100 text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export default Navbar;
