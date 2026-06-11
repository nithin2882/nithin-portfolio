import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center">
      <div
        className="
          w-[95%]
          max-w-7xl
          bg-slate-900/70
          backdrop-blur-md
          border
          border-slate-700
          rounded-full
          px-8
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-cyan-400 text-2xl font-bold">
            NR
          </div>

          <span className="text-white font-semibold hidden md:block">
            Nithin Rajan
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 text-slate-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/nithin2882"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nithin-rajan-15b478212/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;