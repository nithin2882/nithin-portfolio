import { motion } from "framer-motion";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-transparent"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}

        <div className="mb-20">
          <h2 className="font-heading text-5xl md:text-7xl text-white">
            Professional
            <br />
            <span className="gradient-text">
              Journey
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl">
            My transition from engineering and software
            development into modern Data Engineering.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-[11px]
              top-0
              bottom-0
              w-[2px]
              bg-slate-700
            "
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-14 pb-16 timeline-card"
            >

              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-2
                  w-6
                  h-6
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
              />

              {/* Date */}

              <p className="text-cyan-400 text-sm tracking-wider mb-3">
                {exp.year}
              </p>

              {/* Role */}

              <div className="flex items-center flex-wrap gap-3">

                <h3 className="text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                {exp.current && (
                  <span
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-green-500/10
                      text-green-400
                      border
                      border-green-500/20
                    "
                  >
                    Current
                  </span>
                )}

              </div>

              {/* Company */}

              <p className="text-slate-400 mt-2 mb-5">
                {exp.company}
              </p>

              {/* Description */}

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="
                      flex
                      gap-3
                      text-slate-400
                      leading-7
                    "
                  >
                    <span className="text-cyan-400">
                      ▹
                    </span>

                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;