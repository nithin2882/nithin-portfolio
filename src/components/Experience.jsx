const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-16">
          Experience
        </h2>

        <div className="border-l-2 border-cyan-500 pl-8">

          <div className="mb-12">
            <p className="text-cyan-400 font-semibold">
              May 2024 - Present
            </p>

            <h3 className="text-2xl font-bold text-white mt-2">
              Data Engineer · TCS
            </h3>

            <p className="text-slate-400 mt-2">
              Telia Finland Telecommunications Project
            </p>

            <ul className="mt-4 text-slate-400 space-y-2">
              <li>
                • Built ETL pipelines integrating 80+ source systems.
              </li>

              <li>
                • Developed PySpark transformations for telecom analytics.
              </li>

              <li>
                • Managed Airflow workflows and Kafka data pipelines.
              </li>

              <li>
                • Improved observability using Grafana and Loki.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;