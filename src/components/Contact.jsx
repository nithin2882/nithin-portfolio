import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#0b1120]"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="font-heading text-4xl text-white mb-6">
          Let's Build Something Impactful Together
        </h2>

        <p className="text-slate-400 text-lg mb-12">
          I'm always interested in discussing Data Engineering,
          Cloud Architecture, Streaming Systems, and exciting
          opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:nithinrajan.nagarajan@gmail.com"
            className="flex items-center gap-3 bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-500 transition"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/nithin-rajan-15b478212/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-500 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/nithin2882"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl hover:border-cyan-500 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-cyan-500 text-black px-6 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            <FaFilePdf />
            Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;