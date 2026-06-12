import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white">
            Certifications
          </h2>
          

          <p className="text-slate-400 mt-4 max-w-2xl">
            Industry-recognized certifications validating cloud,
            data engineering, and modern data platform expertise.
          </p>
        </div>

        {/* Certification Card */}

        <motion.a
          href="https://www.credly.com/badges/0028b16e-c597-42e9-aba7-adab51940be6/public_url"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -8 }}
          className="
            block
            glass-premium
            rounded-3xl
            overflow-hidden
            border
            border-slate-700
          "
        >
          <div className="grid md:grid-cols-2">

            {/* Left Image */}

            <div className="p-8 flex items-center justify-center bg-slate-900/40">

              <img
                src="/public/images/certifications/aws-data-engineer-associate.png"
                alt="AWS Certified Data Engineer Associate"
                className="max-h-[280px] object-contain"
              />

            </div>

            {/* Right Content */}

            <div className="p-10 flex flex-col justify-center">

              <span
                className="
                  inline-block
                  w-fit
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                  text-sm
                  border
                  border-cyan-500/20
                  mb-5
                "
              >
                Verified Certification
              </span>

              <h3 className="text-3xl font-bold text-white mb-4">
                AWS Certified Data Engineer – Associate
              </h3>

              <p className="text-slate-400 leading-8">
                Demonstrates expertise in designing, building,
                monitoring, and optimizing data pipelines and
                data solutions on AWS cloud services.
              </p>

              <div className="mt-8">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-cyan-400
                    font-semibold
                  "
                >
                  View Verified Badge →
                </span>
              </div>

            </div>

          </div>
        </motion.a>

      </div>
    </section>
  );
};

export default Certifications;