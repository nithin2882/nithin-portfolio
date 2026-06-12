import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    role: "Data Engineer",
    company: "Tata Consultancy Services",
    points: [
      "Developed scalable ETL pipelines using Python and SQL.",
      "Worked on Kafka-based streaming solutions.",
      "Built and optimized data workflows.",
      "Supported cloud-native data platforms.",
    ],
  },
  {
    year: "2023 - 2024",
    role: "System Engineer",
    company: "Tata Consultancy Services",
    points: [
      "Supported enterprise data integration processes.",
      "Resolved production issues and data quality incidents.",
      "Collaborated with cross-functional teams.",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="font-heading text-5xl text-white mb-20">
          Professional Journey
        </h2>

        <div className="relative">

          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-slate-700" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-14 pb-16"
            >
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

              <p className="text-cyan-400 font-semibold mb-3">
                {exp.year}
              </p>

              <h3 className="text-2xl text-white font-bold">
                {exp.role}
              </h3>

              <p className="text-slate-400 mb-6">
                {exp.company}
              </p>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-slate-400 flex gap-3"
                  >
                    <span className="text-cyan-400">▹</span>
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

export default ExperienceTimeline;