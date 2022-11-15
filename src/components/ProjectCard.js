import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ category, title, bg, id }) => {
  const navigate = useNavigate();

  // const cardStyle = {
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: "cover",
  //   width: "100%",
  //   backgroundPosition: "50% 0%",

  // };
  return (
    <div
      className={
        `thumbnail text-white min-h-[400px] text-center relative hover:scale-110 transition duration-500 rounded-lg before:rounded-lg overflow-hidden before:opacity-0 before:hover:opacity-90 z-[5] border dark:border-rose-500 border-gray-700 group` +
        before
      }
    >
      {/* <div
        className="thumbnail-img rounded-lg hover:bg-none h-[200px] "
        style={cardStyle}
      ></div> */}
      <div className="h-[200px] overflow-hidden ">
        <img className="group-hover:scale-110 duration-500" src={bg} alt="" />
      </div>
      <div className="absolute bottom-7 right-6 left-6 z-10 dark:text-white text-black hover:text-white">
        <p>{category}</p>
        <h1 className="text-2xl font-bold my-7">{title}</h1>
        <button
          onClick={() => navigate(`project/${id}`)}
          className="border px-5 py-2 rounded-md bg-rose-600 hover:border-rose-600
        hover:-translate-y-2 transition text-white duration-500 border-rose-500 "
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

const before = `before:content-[''] before:bg-gradient-to-b before:from-rose-700 before:via-rose-500 before:to-black before:z-10 before:absolute before:top-0 before:left-0 before:h-full before:duration-500
before:w-full before:rounded-lg overflow-hidden `;
