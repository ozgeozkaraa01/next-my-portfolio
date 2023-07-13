import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl items-center justify-evenly mx-auto px-10"
    >
      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-3xl font-semibold text-gray-200">Özgenur Özkara</h3>
        <p className="text-gray-500">
          I am a Front End Developer with over 1+ year of experience in
          developing websites and software products. Throughout my experience, I
          have worked on projects using NextJS, Redux, and Tailwind CSS,
          improving my skills and broadening my knowledge. While my primary
          focus has been on development, I have discovered a passion for design
          along the way. As web projects progress, I notice that my perspective
          on aesthetics and user experience improves. I even share some of my
          designs on Dribbble.
        </p>
      </div>
      <h2 className="absolute top-[100px] text-gray-200 text-3xl tracking-[5px]">
        About Me
        <div className="h-px w-14 bg-gray-400"></div>
      </h2>
      <motion.img
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
        alt="profile"
        className="w-48 h-48 rounded-full md:h-[300px] md:w-72 -mb-20 md:mb-0"
      />
    </motion.div>
  );
};

export default AboutMe;
