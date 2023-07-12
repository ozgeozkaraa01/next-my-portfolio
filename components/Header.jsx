import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <div className="sticky top-0 p-6 flex items-center max-w-7xl mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/ozgeozkaraa01"
          fgColor="#111827"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ozgenur-ozkara/"
          fgColor="#111827"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://dribbble.com/ozgeozkaraa01"
          fgColor="#111827"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/ozkaraozgee"
          fgColor="#111827"
          bgColor="transparent"
        />
      </motion.div>
    </div>
  );
};

export default Header;
