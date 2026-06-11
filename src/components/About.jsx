const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#0b1120]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <p className="text-slate-400 leading-8 text-lg">
          I'm a Data Engineer with 2+ years of experience
          designing and maintaining scalable ETL pipelines,
          real-time streaming systems, and cloud-native
          data platforms.

          At TCS, I work on telecom data platforms
          supporting large-scale analytics workloads using
          PySpark, Kafka, Airflow, SQL, and AWS technologies.

          I enjoy building reliable data systems,
          optimizing pipeline performance,
          and solving complex data engineering challenges.
        </p>

      </div>
    </section>
  );
};

export default About;