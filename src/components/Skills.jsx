const skills = [
  "Python",
  "SQL",
  "PySpark",
  "Kafka",
  "Airflow",
  "AWS",
  "Databricks",
  "Docker",
  "GitHub",
  "Grafana",
  "Loki",
  "Informatica",
  "MySQL",
  "Oracle",
  "MongoDB",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-16">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-5
                py-3
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                text-slate-300
                hover:border-cyan-500
                hover:text-cyan-400
                transition
                duration-300
              "
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;