const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <div
        className="
          glow-1
          absolute
          top-[-200px]
          left-[-200px]
          w-[500px]
          h-[500px]
          bg-cyan-500/10
          rounded-full
          blur-[140px]
        "
      />

      <div
        className="
          glow-2
          absolute
          bottom-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-blue-500/10
          rounded-full
          blur-[140px]
        "
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
          linear-gradient(white 1px, transparent 1px),
          linear-gradient(90deg, white 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default Background;