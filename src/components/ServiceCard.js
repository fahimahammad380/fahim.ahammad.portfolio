import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div
      className="group service-card p-9 rounded-lg dark:bg-[#191919] bg-gray-200 hover:bg-gradient-to-r hover:from-rose-600
    hover:to-red-600 hover:-translate-y-2 transition-transform duration-500 hover:text-white dark:text-white text-gray-700"
    >
      <FontAwesomeIcon
        className="text-6xl text-rose-600 card-icon"
        icon={icon}
      />
      <h1 className="text-2xl md:text-4xl font-bold my-5">{title}</h1>
      <p className="dark:text-gray-500 text-gray-700 group-hover:text-gray-50 text-xl">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
