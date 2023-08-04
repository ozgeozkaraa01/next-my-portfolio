import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";

const NavProjects = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="relative inline-block text-left">
            <button className="group relative inline-flex items-center px-3 py-2 bg-gray-50 hover:bg-gray-100 hover:text-gray-700 text-gray-400 rounded-lg text-base font-medium default-transition default-focus">
              <HiMenuAlt1 />
            </button>
          </div>
          <div className="relative inline-block text-left">
            <button
              onClick={handleMenuToggle}
              className="group relative inline-flex items-center px-3 py-2 bg-gray-50 hover:bg-gray-100 hover:text-gray-700 text-gray-400 rounded-lg text-base font-medium default-transition default-focus"
            >
              <FiSettings />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="transform scale-100 opacity-100">
            <div className="absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-md shadow-lg divide-y divide-gray-100 focus:outline-none origin-top-right right-0">
              <div className="py-2">
                <Link
                  href="/"
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
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    />
                  </svg>
                  <span>Sounds On</span>
                  <span className="flex-1"></span>
                </Link>
                <hr className="mt-2 pb-2 border-gray-200 " />
                <Link
                  href="/"
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
                </Link>
                <Link
                  href="/"
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
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavProjects;
