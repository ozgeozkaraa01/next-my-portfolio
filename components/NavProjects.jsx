import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const NavProjects = () => {
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
            <button className="group relative inline-flex items-center px-3 py-2 bg-gray-50 hover:bg-gray-100 hover:text-gray-700 text-gray-400 rounded-lg text-base font-medium default-transition default-focus">
              <FiSettings />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavProjects;
