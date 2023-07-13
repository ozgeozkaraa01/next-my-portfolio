import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Circle from "./Circle";
import Stars from "./Stars";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["I'm Özgenur", "This is my portfolio"],
    loop: true,
    delaySpeed: 3000,
  });
  const [title] = useTypewriter({
    words: ["Frontend Developer", "NextJS Developer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden pt-10">
      <Circle />
      <Stars />
      <Image
        src="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
        alt="image"
        width={150}
        height={150}
        loading="lazy"
        className="rounded-full"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-3 tracking-[12px]">
          {title}
          <Cursor cursorColor="#a3e635" />
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-8 text-center tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text p-2">
          <span>{text}</span>
          <Cursor cursorColor="#7e22ce" />
        </h1>
        <div className="pt-6 space-x-2">
          <Link href="#aboutme">
            <button className="heroButton text-[#626974] hover:text-gray-300">
              About
            </button>
          </Link>
          <Link href="https://uiverse.io/profile/ozgeozkaraa01" target="_blank">
            <button className="heroButton text-[#626974] hover:text-gray-300">
              uiverse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
