import React from "react";
import { motion } from "framer-motion";

const Stars = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-full overflow-hidden"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      style={{ pointerEvents: "none" }}
    >
      <svg
        className="absolute h-[25px] w-[25px] text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.17 22 9.82 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.82 8.91 8.17 12 2" />
      </svg>
    </motion.div>
  );
};

export default Stars;
