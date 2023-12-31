import React from "react";
import { motion } from "framer-motion";

const Circle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.3, 0.4, 0.8, 0.2, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#55555] rounded-full h-[200px] w-[200px] mt-48 animate-ping "></div>
      <div className="absolute border border-[#555555] rounded-full h-[300px] w-[300px] mt-48 animate-ping"></div>
      <div className="absolute border border-[#555555] rounded-full h-[500px] w-[500px] mt-48 animate-ping"></div>
      <div className="absolute border dark:border-[#a3e635] border-[#6d28d9] opacity-20 rounded-full h-[650px] w-[650px] mt-48 animate-pulse"></div>
      <div className="absolute border border-[#555555] rounded-full h-[800px] w-[800px] mt-48 animate-pulse"></div>
    </motion.div>
  );
};

export default Circle;
