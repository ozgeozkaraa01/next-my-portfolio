import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiSettings, FiGithub, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const NavProjects = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuToggle2 = () => {
    setIsMenuOpen2((prevState) => !prevState);
  };

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleSoundToggle = () => {
    setIsSoundOn((prevState) => !prevState);
  };

  const handleProjectsClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleClick = () => {
      if (isSoundOn) {
        const audio = new Audio("/assets/sounds_click.mp3");
        audio.play();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isSoundOn]);

  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="relative inline-block text-left">
            <button
              onClick={handleMenuToggle2}
              className="group relative inline-flex items-center px-3 py-2 border bg-gray-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 rounded-lg text-base font-medium default-transition default-focus"
            >
              <HiMenuAlt1 />
            </button>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={handleMenuToggle}
              className="group relative inline-flex items-center px-3 py-2 border bg-gray-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 rounded-lg text-base font-medium default-transition default-focus"
            >
              <FiSettings />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="transform scale-100 opacity-100">
            <div className="absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-md shadow-lg divide-y divide-gray-100 dark:divide-gray-500 focus:outline-none origin-top-right right-0">
              <div className="py-2">
                <button
                  onClick={handleSoundToggle}
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${
                      isSoundOn ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                  <span>Sounds On</span>
                  <span className="flex-1"></span>
                </button>
                <hr className="mt-2 pb-2 border-gray-200 dark:border-gray-500" />
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700"
                >
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
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                  <span>Light Theme</span>
                  <span className="flex-1"></span>
                </button>
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>

                  <span>Dark Theme</span>
                  <span className="flex-1"></span>
                </button>
              </div>
            </div>
          </div>
        )}
        {isMenuOpen2 && (
          <div className="transform scale-100 opacity-100">
            <div className="absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-md shadow-lg divide-y divide-gray-100 dark:divide-gray-500 focus:outline-none origin-top-left left-0">
              <div className="py-2">
                {" "}
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700 hover:bg-slate-200"
                >
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
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span>Home</span>
                  <span className="flex-1"></span>
                </Link>
                <Link
                  href="https://medium.com/@ozgenurozkara"
                  target="_blank"
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700 hover:bg-slate-200"
                >
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <span>Blog</span>
                  <span className="flex-1"></span>
                </Link>
                <Link
                  href="/projects"
                  onClick={handleProjectsClick}
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700 hover:bg-slate-200"
                >
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
                      d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                    />
                  </svg>
                  <span>Projects</span>
                  <span className="flex-1"></span>
                </Link>
                <hr className="mt-2 pb-2 border-gray-200 dark:border-gray-500" />
                <Link
                  href="https://twitter.com/ozkaraozgee"
                  target="_blank"
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700 hover:bg-slate-200"
                >
                  <FiTwitter className="w-4 h-4" />
                  <span>Twitter</span>
                  <span className="flex-1"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/ozgeozkaraa01"
                  target="_blank"
                  className="flex items-center space-x-2 px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default:transition text-gray-500 hover:text-gray-700 hover:bg-slate-200"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub</span>
                  <span className="flex-1"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-indigo-500">
          <div
            className="h-1 bg-white"
            style={{
              width: "100%",
              animation: "loading 2s linear infinite",
            }}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default NavProjects;
