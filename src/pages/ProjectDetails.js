import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faServer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectData from "../components/asserts/projectData";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const projectDetails = projectData.find(
    (project) => project.id.toString() === id
  );
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  // console.log(projectDetails);
  return (
    <div className="bg-black text-gray-200">
      <div className="md:container mx-auto p-5 relative ">
        <div className=" flex justify-end fixed top-3 md:top-0 md:right-10 right-5 text-white ">
          <button
            onClick={() => navigate(-1)}
            className=" md:text-6xl text-4xl"
          >
            {" "}
            <FontAwesomeIcon icon={faXmark} />{" "}
          </button>
        </div>
        <h1 className="md:text-4xl text-2xl my-7 font-bold">
          Project Name: {projectDetails.projectName}
        </h1>
        <div>
          {projectDetails.images.map((image, i) => (
            <img className="w-full my-5" key={i} src={image} alt="" />
          ))}
        </div>
        <h1 className="text-2xl font-bold my-5">Features and Functionality:</h1>
        <ul>
          {projectDetails.features.map((desc, id) => (
            <li key={id} className="flex justify-start items-center mb-4">
              {/* <span className="h-5 w-5 bg-rose-500 md:inline-block block mr-2"></span> */}
              <span className="border-l-4 border-rose-500 pl-4">{desc}</span>
            </li>
          ))}
        </ul>
        <h1 className="text-2xl font-bold my-5 ">Technologies:</h1>
        <div className="flex flex-wrap gap-5">
          {projectDetails.technologies.map((technology) => (
            <div
              key={technology}
              className="border border-rose-500 px-3 py-2 rounded-md "
            >
              <p>{technology}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap md:justify-center gap-5 my-10">
          <a
            className="px-5 py-3 bg-rose-500 rounded-md border border-rose-500 hover:bg-transparent duration-500"
            target="_blank"
            rel="noreferrer"
            href={projectDetails.links.liveSite}
          >
            <FontAwesomeIcon className="mr-2" icon={faArrowUpRightFromSquare} />
            Live site
          </a>
          <a
            className="px-5 py-3 bg-rose-500 rounded-md border border-rose-500 hover:bg-transparent duration-500"
            target="_blank"
            rel="noreferrer"
            href={projectDetails.links.clientSource}
          >
            <FontAwesomeIcon className="mr-2" icon={faGithub} />
            Client Source
          </a>
          {projectDetails.links.serverSource && (
            <a
              className="px-5 py-3 bg-rose-500 rounded-md border border-rose-500 hover:bg-transparent duration-500"
              target="_blank"
              rel="noreferrer"
              href={projectDetails.links.serverSource}
            >
              <FontAwesomeIcon className="mr-2" icon={faServer} />
              Server Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
