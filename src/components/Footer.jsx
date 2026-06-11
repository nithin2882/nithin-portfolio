const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-[#050816]">
      <div className="max-w-6xl mx-auto text-center text-slate-500">
        © {new Date().getFullYear()} Nithin Rajan.
        Built with React, Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
};

export default Footer;