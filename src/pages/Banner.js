import React from "react";
import TypeAnimation from "react-type-animation";
// import bg from "../assets/images/rays_bg-4d7eda9d.png";
import "./Home.css";

const Banner = () => {
  return (
    <header
      id="home"
      className="h-[600px] md:h-screen dark:bg-[#111824]  text-white flex items-center "
    >
      <img
        className="absolute  w-[95%] lg:h-[18%] h-[8%] "
        src={`https://tailwindcss.com/_next/static/media/8-dark@tinypng.7abc66a1.png`}
        alt=""
      />
      <div className="md:container mx-auto">
        <div className="relative  md:ml-10 ml-5">
          <p className="dark:text-gray-400 text-black">WELCOME TO MY WORLD</p>
          <h1 className="text-3xl dark:text-white text-gray-700 md:text-7xl font-bold mt-3">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
              Fahim Ahammad
            </span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold md:my-4 my-0 text-rose-600">
            <TypeAnimation
              cursor={true}
              sequence={[
                " JS Developer",
                2000,
                " Front End Developer",
                2000,
                " React Developer",
                2000,
                " MERN Developer",
                2000,
                " Graphics Designer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className=" after:content-['|']"
            />
          </h2>
          {/* <h4 className="text-xl md:text-5xl font-bold">based in USA.</h4> */}
          <div className="mt-10 ">
            <a
              href="https://drive.google.com/file/d/1wuzaaPGRHWFRVvMTT-d49jBD05ex436S/view?usp=drive_link"
              target={"_blank"}
              rel="noreferrer"
              className="text-white py-3 px-8 bg-gradient-to-l from-cyan-400 to-pink-600 cursor-pointer rounded-md mt-10  duration-500 hover:bg-transparent z-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
