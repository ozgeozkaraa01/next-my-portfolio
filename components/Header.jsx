import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="top-0 xl:p-6 p-3 flex items-center justify-between max-w-7xl mx-auto">
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
      <div className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
        <Link href="#bookmarks" className="underline">
          Bookmarks
        </Link>
        <Link href="/projects" className="underline">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
