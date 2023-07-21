import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 xl:p-6 p-3 flex items-center justify-between max-w-7xl mx-auto">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/ozgeozkaraa01"
          target="_blank"
          fgColor="#626974"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ozgenur-ozkara/"
          target="_blank"
          fgColor="#626974"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://dribbble.com/ozgeozkaraa01"
          target="_blank"
          fgColor="#626974"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/ozkaraozgee"
          target="_blank"
          fgColor="#626974"
          bgColor="transparent"
        />
      </motion.div>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <BiMoon className="w-5 h-5" />
          ) : (
            <BsSun className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
