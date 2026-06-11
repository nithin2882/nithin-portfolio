import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 mt-8 text-cyan-400 hover:text-cyan-300"
        >
          <FaGithub />
          View Repository
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;