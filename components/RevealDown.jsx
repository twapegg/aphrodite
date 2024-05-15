import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("up");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="relative fit-content overflow-hidden">
      <motion.div
        variants={{
          steady: { opacity: 0, y: 75 },
          up: { opacity: 1, y: 0 },
        }}
        initial="steady"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealRight;
