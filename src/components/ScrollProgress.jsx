import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
  className="
    fixed
    top-0
    left-0
    h-[3px]
    bg-gradient-to-r
    from-cyan-400
    to-blue-500
    z-[9999]
  "
  style={{
    scaleX: scrollYProgress,
    transformOrigin: "0%",
    width: "100%",
  }}
/>
    
  );
};

export default ScrollProgress;