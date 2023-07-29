import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";

const Projects = () => {
  const title = "My Latest Project";
  const desc1 =
    "These projects development with HTML, CSS, JavaScript, Rest API";
  const desc2 = " React JS, Node JS, Mongodb, Firebase, Git, Heroku";

  // https://tailwindcss.com/_next/static/media/0-dark@tinypng.74768a0b.png

  //https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg

  //https://tailwindcss.com/_next/static/media/0-dark@tinypng.74768a0b.png

  return (
    <div
      id="portfolio"
      className="md:min-h-screen dark:bg-black bg-gray-50 py-24 px-7 md:px-0 bg-[url('https://tailwindcss.com/_next/static/media/8-dark@tinypng.7abc66a1.png')] bg-no-repeat lg:bg-center bg-cover relative"
    >
      <img
        className="absolute top-0 lg:h-[65%] lg:block hidden"
        src="https://tailwindcss.com/_next/static/media/0-dark@tinypng.74768a0b.png"
        alt=""
      />
      <SectionHeader title={title} desc1={desc1} desc2={desc2} />
      <div className="md:w-4/6 mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 my-14">
        <ProjectCard
          id={1}
          category={"Mern Stack Project"}
          title="Spadex Tools"
          bg={"/project/project1/spadexToolThumbnail.PNG"}
        />
        <ProjectCard
          id={2}
          category={"Mern Stack Project"}
          title="Inventory Management"
          bg={"/project/project2/carMax.PNG"}
        />
        <ProjectCard
          id={3}
          category={"Mern Stack Project"}
          title="Red Onion Website"
          bg={"/project/project3/RedOnion.PNG"}
        />
        <ProjectCard
          id={4}
          category={"Development"}
          title="Service Provider Website"
          bg={"/project/project4/ericPhotography.PNG"}
        />
        <ProjectCard
          id={5}
          category={"Development"}
          title="Dashboard Project "
          bg={"/project/project5/salesTracker.PNG"}
        />
        <ProjectCard
          id={6}
          category={"Development"}
          title="Product Review Website"
          bg={"/project/project6/laptopReview.PNG"}
        />
      </div>
      {/* <div className="text-center ">
        <Button btnText={"VIEW MORE"} />
      </div> */}
    </div>
  );
};

export default Projects;
