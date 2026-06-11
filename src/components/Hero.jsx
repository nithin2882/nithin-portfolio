import { motion } from "framer-motion";

const Hero = () => {
  const techStack = [
    "PySpark",
    "Kafka",
    "Airflow",
    "AWS",
    "SQL",
    "Databricks",
    "Python",
    "Docker",
  ];

  return (
    <section className="min-h-[85vh] flex items-center bg-[#050816] px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-cyan-400 uppercase tracking-widest mb-6 text-sm"
>
  DATA ENGINEER @ TCS
</motion.p>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight"
>
  Building Scalable
<br />
Data Pipelines &
<br />
Streaming Systems.
</motion.h1>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="mt-8 max-w-2xl"
>
  <h2 className="font-heading text-white text-2xl">
    DATA ENGINEER @ TCS
  </h2>

  <p className="text-slate-400 mt-4 text-lg leading-8">
    AWS Certified Data Engineer with 2+ years of experience
    building cloud-native data platforms, ETL pipelines,
    real-time streaming systems, and analytics solutions.
  </p>
</motion.div>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                AWS Certified Data Engineer
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                2+ Years Experience
              </span>

              <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                TCS
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/nithin2882"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nithin-rajan-15b478212/"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-600 px-6 py-3 rounded-lg text-white hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-[350px] shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white">
                Core Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;