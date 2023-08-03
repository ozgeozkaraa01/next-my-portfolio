import Link from "next/link";
import React from "react";
import { FiGithub, FiHome } from "react-icons/fi";
import NavProjects from "../components/NavProjects";

const Projects = () => {
  return (
    <div>
      <NavProjects />
      <div className="w-screen h-screen bg-white">
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
                  <li className="bg-gray-50 bg-opacity-75 backdrop:filter backdrop-blur-sm border border-gray-100 rounded-lg transition ease-in-out duration-300">
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
                      <div className="flex flex-1 items-center justify-start w-full">
                        <span className="text-xl">🌿</span>
                        <div className="min-w-0 flex-1 px-4">
                          <h1 className="text-gray-700 text-lg font-bold">
                            ozgenurozkara.vercel.app
                          </h1>
                          <p className="flex items-center mt-1 text-gray-500 text-xs">
                            Personal Portfolio
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1">
                        <Link
                          href="/"
                          target="_blank"
                          className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-700 border border-gray-100 rounded-lg text-sm font-medium default:transition default:focus"
                        >
                          <span className="sr-only">homepage</span>
                          <FiHome />
                        </Link>
                        <Link
                          href="/"
                          target="_blank"
                          className="relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-700 border border-gray-100 rounded-lg text-sm font-medium default:transition default:focus"
                        >
                          <span className="sr-only">GitHub Repository</span>
                          <FiGithub />
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
                <div></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
