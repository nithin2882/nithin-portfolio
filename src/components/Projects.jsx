import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#0b1120]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-16">
          Featured Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;