import { certifications } from "../data/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 px-6 bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="font-heading text-4xl text-white mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="
                bg-slate-900
                border
                border-slate-700
                rounded-3xl
                overflow-hidden
                hover:border-cyan-500
                transition
              "
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {cert.issuer}
                </p>

                <p className="text-slate-400 mt-2">
                  {cert.year}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;