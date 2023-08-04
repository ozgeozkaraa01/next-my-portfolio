import Link from "next/link";
import React from "react";
import { FiGithub, FiHome } from "react-icons/fi";
import NavProjects from "../components/NavProjects";

const Projects = () => {
  return (
    <div className="h-screen antialiased bg-gradient-to-br from-lime-100 via-gray-100 to-white dark:from-black from-20% dark:via-gray-700 dark:to-black to-80% w-screen overflow-y-scroll">
      <NavProjects />
      <div className="flex flex-col justify-center px-8">
        <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
          <div className="relative max-w-xl mx-auto">
            <ul className="flex flex-col space-y-4">
              <div
                style={{
                  transform: "translateY(var(--motion-translateY))",
                  opacity: "1",
                  "--motion-translateY": "0px",
                }}
              >
                <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <span className="text-xl">🌿</span>
                      <div className="min-w-0 flex-1 px-4">
                        <h1 className="text-gray-700 dark:text-white text-lg font-bold">
                          ozgenurozkara.vercel.app
                        </h1>
                        <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                          Personal Portfolio
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                      <Link
                        href="https://ozgenurozkara.vercel.app/"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">homepage</span>
                        <FiHome />
                      </Link>
                      <Link
                        href="https://github.com/ozgeozkaraa01/next-my-portfolio"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <FiGithub />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
              <div
                style={{
                  transform: "translateY(var(--motion-translateY))",
                  opacity: "1",
                  "--motion-translateY": "0px",
                }}
              >
                <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <span className="text-xl">✨</span>
                      <div className="min-w-0 flex-1 px-4">
                        <h1 className="text-gray-700 dark:text-white text-lg font-bold">
                          twitter-clone
                        </h1>
                        <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                          Twitter Clone using Next.js and Tailwind CSS
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                      <Link
                        href="https://next-twitter-clone-delta.vercel.app/"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">homepage</span>
                        <FiHome />
                      </Link>
                      <Link
                        href="https://github.com/ozgeozkaraa01/next-twitter-clone"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <FiGithub />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
              <div
                style={{
                  transform: "translateY(var(--motion-translateY))",
                  opacity: "1",
                  "--motion-translateY": "0px",
                }}
              >
                <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <span className="text-xl">🩷</span>
                      <div className="min-w-0 flex-1 px-4">
                        <h1 className="text-gray-700 dark:text-white text-lg font-bold">
                          advice-generator-app
                        </h1>
                        <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                          Advice Generator App using React.js
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                      <Link
                        href="https://advice-generetor-app.vercel.app/"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">homepage</span>
                        <FiHome />
                      </Link>
                      <Link
                        href="https://github.com/ozgeozkaraa01/advice-generetor-app"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <FiGithub />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
              <div
                style={{
                  transform: "translateY(var(--motion-translateY))",
                  opacity: "1",
                  "--motion-translateY": "0px",
                }}
              >
                <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <span className="text-xl">🎊</span>
                      <div className="min-w-0 flex-1 px-4">
                        <h1 className="text-gray-700 dark:text-white text-lg font-bold">
                          next-website
                        </h1>
                        <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                          Creating a Portfolio Website with Next JS, Tailwind
                          CSS and Framer Motion
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                      <Link
                        href="https://next-website-lemon-omega.vercel.app/"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">homepage</span>
                        <FiHome />
                      </Link>
                      <Link
                        href="https://github.com/ozgeozkaraa01/next-website"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <FiGithub />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
              <div
                style={{
                  transform: "translateY(var(--motion-translateY))",
                  opacity: "1",
                  "--motion-translateY": "0px",
                }}
              >
                <li className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-start w-full">
                      <span className="text-xl">🫧</span>
                      <div className="min-w-0 flex-1 px-4">
                        <h1 className="text-gray-700 dark:text-white text-lg font-bold">
                          bookmark-frontend-mentor
                        </h1>
                        <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                          Frontend Mentor Challange
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                      <Link
                        href="https://bookmark-frontend-mentor.vercel.app/"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">homepage</span>
                        <FiHome />
                      </Link>
                      <Link
                        href="https://github.com/ozgeozkaraa01/bookmark-frontend-mentor"
                        target="_blank"
                        className="relative inline-flex justify-center items-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-500 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default:transition default:focus"
                      >
                        <span className="sr-only">GitHub Repository</span>
                        <FiGithub />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
