import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
const Projects = () => {
  return (
    <section id="projects" className="pt-[6rem]">
      <div className="text-center flex flex-row items-center relative">
        <h2 className="heading2 z-10">Projects</h2>
        <div className="h-[130px] w-[90px] absolute dots-background right-0 z-0"></div>
      </div>
      <div className="main-container pt-[3rem] px-[1.5rem]">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          {projects.map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
