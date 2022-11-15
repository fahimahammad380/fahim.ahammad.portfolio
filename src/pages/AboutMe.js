import React from "react";
import ExperienceTab from "../components/ExperienceTab";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full lg:h-screen dark:bg-[#191919] bg-gray-50 flex items-center dark:text-gray-400 text-gray-600 p-5"
    >
      <div className="md:container mx-auto grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-5 p-4">
          <img className="w-full" src="about-8.png" alt="" />
        </div>
        <div className="col-span-7 flex items-center p-4">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold dark:text-white text-gray-900">
              About Me
            </h1>
            <p className="my-5">
              Self-motivated team player and creative web developer with
              proficiency in HTML, CSS, JavaScript, React, Node.js and
              express.js seeking for a position of a Full stack web developer. I
              can enhance my knowledge of design principles and grow with the
              organization.
            </p>
            <ExperienceTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

//http://trydo.rainbowit.net/assets/images/about/about-8.jpg
