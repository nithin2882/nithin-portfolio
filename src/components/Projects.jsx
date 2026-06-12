import { projects } from "../data/projects";
import { ArrowUpRight} from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}

        <div className="mb-24 max-w-4xl">
          <h2 className="font-heading text-5xl md:text-7xl text-white leading-none">
            Featured
            <br />
            <span className="text-cyan-400">
              Data Engineering Projects
            </span>
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-2xl">
            Cloud-native pipelines, streaming architectures,
            ETL frameworks, and scalable data platforms built
            to solve real-world engineering challenges.
          </p>
        </div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group project-card"
            >

              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-slate-900
                  border
                  border-slate-800
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Floating Action */}

                <div className="absolute right-6 bottom-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      w-14
                      h-14
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      hover:bg-cyan-400
                      transition
                    "
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </div>

              {/* Content */}

              <div className="mt-8">

                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[1px] bg-cyan-400" />
                  <span className="text-cyan-400 text-xs tracking-[3px] uppercase">
                    {project.impact}
                  </span>
                </div>

                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                    group-hover:text-cyan-400
                    transition
                  "
                >
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-8">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-slate-300
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Github */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-cyan-400
                    hover:text-cyan-300
                  "
                >
                  
                  View Repository
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;