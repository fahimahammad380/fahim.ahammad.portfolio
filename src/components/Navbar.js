import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import useDarkMode from "../Hooks/useDarkMode";
import "./ExperienceTab.css";
import "./NavBar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [background, setBackground] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 500) {
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
    <nav
      className={`md:px-16 sm:px-4 w-full fixed top-0 h-[65px] md:h-[90px] px-5 md:z-50 ${
        isNavOpen ? "z-50" : "z-10"
      } ${
        background ? "bg-[#191919] md:-mt-5 shadow-2xl " : "md:m-0"
      } duration-500`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto pt-2">
        <div className="w-1/2">
          <a href="/" className="flex items-center ">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <img className="" width={50} src="logo.png" alt="" />{" "}
            </span>
          </a>
        </div>
        <div className="z-50">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="text-white text-2xl md:hidden -mt-5 z-50"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            {!isNavOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </button>
        </div>
        <div
          className={`${
            isNavOpen
              ? "translate-x-20 md:translate-x-0 "
              : "md:translate-x-0 translate-x-[500px] md:static absolute"
          } w-full md:block md:w-auto md:bg-transparent opacity-90 bg-black -ml-5 nav-items transition-transform md:h-full h-screen md:m-0 -m-24 pt-10 md:pt-0 `}
          id="mobile-menu"
        >
          <div className="md:flex gap-6 text-white flex-wrap md:p-0 p-5 md:mt-10 mt-0 mb-10 ">
            <ScrollSpy>
              {navItems.map((item, index) => (
                <a
                  ref={React.createRef()}
                  href={item.href}
                  key={index}
                  className={` block pb-3 list-border cursor-pointer relative md:text-xl text-base md:my-0 my-3 font-bold `}
                >
                  {item.name}
                </a>
              ))}
            </ScrollSpy>
            <span className="mr-2">
              <a
                href="https://github.com/motalibpathan"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon className="text-2xl" icon={faGithub} />{" "}
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/motalib-pathan"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />{" "}
              </a>
            </span>
            <span
              onClick={() => setTheme(colorTheme)}
              className="md:inline block md:mt-0 mt-5 cursor-pointer "
            >
              {colorTheme === "dark" ? dark : light}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const light = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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
    className="h-6 w-6"
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
