import React from "react";
import services from "../components/asserts/servicesData";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const title = "My Awesome Service";
  const desc1 = "My services which I can provide ";
  const desc2 = " but the majority have suffered alteration.";

  return (
    <div
      id="services"
      className="md:min-h-screen dark:bg-black bg-gray-100 pt-32 pb-16 px-7 md:px-0"
    >
      <SectionHeader title={title} desc1={desc1} desc2={desc2} />
      <div className="md:container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 my-14">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
