import React from "react";

const AboutMe = () => {
  const frontEndSkills = [
    { id: 1, title: "HTML", progress: 90, bg: "from-cyan-400 to-pink-600" },
    { id: 2, title: "CSS", progress: 80, bg: "from-orange-400 to-orange-600" },
    {
      id: 3,
      title: "Bootstrap",
      progress: 70,
      bg: "from-indigo-300 to-indigo-600",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      progress: 90,
      bg: "from-sky-400 to-sky-700",
    },
    {
      id: 5,
      title: "JavaScript",
      progress: 70,
      bg: "from-yellow-400 to-yellow-600",
    },
    {
      id: 6,
      title: "React JS",
      progress: 60,
      bg: "from-cyan-400 to-sky-600",
    },
  ];
  const backEndSkills = [
    { id: 1, title: "Node JS", progress: 60, bg: "from-lime-400 to-blue-600" },
    {
      id: 2,
      title: "Express JS",
      progress: 70,
      bg: "from-rose-400 to-green-600",
    },
    {
      id: 3,
      title: "MongoDB",
      progress: 70,
      bg: "from-sky-400 to-sky-700",
    },
    {
      id: 4,
      title: "Mysql",
      progress: 65,
      bg: "from-indigo-600 to-blue-600",
    },
  ];
  return (
    <div
      id="about"
      className={`w-full lg:min-h-screen dark:bg-[#191919] bg-gray-50 dark:text-gray-400 text-gray-600 p-5 dark:bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] bg-no-repeat lg:bg-center bg-cover`}
    >
      <div className="md:container mx-auto mt-16 ">
        <div className="flex flex-col items-center">
          <h3>ABOUT ME</h3>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 w-[max-content]">
            Here's my story.
          </h1>
        </div>
        <p className=" text-lg mt-5">
          I’m Fahim Ahammad, a developer, creative coder and self-proclaimed
          designer who specializes in front-end development. My mission is to
          translate user-focussed designs into pixel-perfect websites or
          applications that run blazing fast.
        </p>
        <ul className="flex flex-col gap-3 mt-5">
          <li>
            🌱 I’m currently learning ReactJs, MongoDB, NodeJs and ExpressJs
          </li>
          <li>
            💻 All of my projects are available at
            <a className="text-cyan-500 ml-2" href="#portfolio">
              Projects
            </a>
          </li>
          <li>💬 Ask me about Html , Css , Js , ReactJs, Node js, Mongodb </li>
          <li>
            📫 How to reach me{" "}
            <span className=" text-cyan-400">
              writetofahimahammad@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <div className="md:container mx-auto grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-6 p-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 mt-5">
            Education & Work Experience
          </h1>
          <div className="journey_graph border-l-[1px] dark:border-white border-gray-800">
            <div className="graph dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black ">
              <p className="title-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 lg:w-[max-content]">
                Full-Stack Developer
              </p>
              <p className="title-2">DotpotiT</p>
              <p className="title-3">
                Skills: HTML, CSS, JavaScript, React JS, Node JS, Express JS,
                Redux
              </p>
              <p className="desc">March 2023 - July 2023</p>
            </div>
            <div className="graph dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black ">
              <p className="title-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 lg:w-[max-content]">
                BSc in Computer Science and Engineering
              </p>
              <p className="title-2">Southeast University, Dhaka, Bangladesh</p>
              <p className="title-3">Grade : CGPA 3.52 out of 4.00</p>
              <p className="title-4">Jan 2019 - Dec 2022</p>
            </div>

            <div className="graph dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black ">
              <p className="title-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 lg:w-[max-content]">
                Account Manager
              </p>
              <p className="title-2">Filasco America LLC</p>
              <p className="title-3">Skills:</p>
              <p className="desc">September 2019 - February 2023</p>
            </div>
            <div className="graph dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black ">
              <p className="title-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 lg:w-[max-content]">
                Diploma in Engineering Computer Technology
              </p>
              <p className="title-2">Narsingdi Polytechnic Institute</p>
              <p className="title-3">Grade: CPGA 2.88 out of 4.00</p>
              <p className="desc">Sep 2014 - April 2018</p>
            </div>
            <div className="graph dark:before:bg-white before:bg-black dark:after:bg-white after:bg-black ">
              <p className="title-1 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 lg:w-[max-content]">
                Graphics Design
              </p>
              <p className="title-2">ICT Division</p>
              <p className="title-3">
                Learning and Earning Development Project
              </p>
              <p className="desc">February 2017 - June 2017</p>
            </div>
          </div>
        </div>
        <div className="col-span-6 p-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 mt-5 w-[60%]">
            Development Skills
          </h1>
          {/* frontend skills start */}
          <div>
            <div className="flex items-center gap-2 mt-3">
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
              />
              <h1 className="font-bold">FRONT-END</h1>
            </div>
            <div className="space-y-4 mt-5">
              {frontEndSkills.map((skill) => (
                <div key={skill.id}>
                  <h3 className="dark:text-gray-300 mb-2">{skill.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className={`bg-gradient-to-r ${skill.bg} h-2.5 rounded-full`}
                      style={{ width: skill.progress + "%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* frontend skills end */}
          {/* backend skills start */}
          <div>
            <div className="flex items-center gap-2 mt-5">
              <img
                className="w-10"
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt=""
              />
              <h1 className="font-bold">BACK-END</h1>
            </div>
            <div className="space-y-4 mt-5">
              {backEndSkills.map((skill) => (
                <div key={skill.id}>
                  <h3 className="dark:text-gray-300 mb-2">{skill.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className={`bg-gradient-to-r ${skill.bg} h-2.5 rounded-full`}
                      style={{ width: skill.progress + "%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* backend skills start */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

//http://trydo.rainbowit.net/assets/images/about/about-8.jpg
