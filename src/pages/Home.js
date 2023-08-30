import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Blogs from "./Blog";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <AboutMe />
      {/* <Services /> */}
      <Project />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
