import React, { useState } from "react";
import {
  certificate,
  education,
  experience,
  mainSkills,
} from "./asserts/aboutMeData";
import "./ExperienceTab.css";

const ExperienceTab = () => {
  const tabItems = [
    { title: "Main skills", skills: mainSkills },
    // { title: "Experience", skills: experience },
    { title: "Certification", skills: certificate },
    { title: "Education", skills: education },
  ];

  const [skills, setSkills] = useState(mainSkills);

  return (
    <div>
      <ul className="mt-10 mb-10 flex gap-6 font-bold dark:text-white text-gray-900 w-full flex-wrap">
        {tabItems.map((item, index) => (
          <li
            onClick={() => setSkills(item.skills)}
            key={index}
            className={`${
              item.skills[0].title === skills[0].title
                ? "before:bg-rose-500 before:w-full text-rose-500"
                : "before:bg-gray-500 before:w-1/3"
            }  pb-3 list-border cursor-pointer relative md:text-xl text-base z-10`}
          >
            {item.title}
          </li>
        ))}
      </ul>
      {skills.map((skill, index) => (
        <div key={index}>
          <p className="font-bold md:text-lg text-base">{skill.title}</p>
          <p className="mb-6 mt-1 ">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTab;
