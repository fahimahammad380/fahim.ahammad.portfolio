import React from "react";

const SectionHeader = ({ title, desc1, desc2 }) => {
  return (
    <div className="dark:text-white text-gray-700 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="dark:text-gray-400 text-gray-700">{desc1}</p>
      <p className="dark:text-gray-400 text-gray-700">{desc2}</p>
    </div>
  );
};

export default SectionHeader;
