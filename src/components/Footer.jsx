const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-transparent">
      <div className="max-w-6xl mx-auto text-center text-slate-500">
        © {new Date().getFullYear()} Nithin Rajan.
         All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;