import React, { useState } from "react";
import Stars from "../components/Stars";
import NavProjects from "../components/NavProjects";
import { bookmarksData } from "../data/bookmarksData";
import Link from "next/link";

const Bookmarks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryCounts = bookmarksData.reduce((acc, bookmark) => {
    acc[bookmark.category] = (acc[bookmark.category] || 0) + 1;
    return acc;
  }, {});

  const filteredBookmarks =
    selectedCategory === "All"
      ? bookmarksData
      : bookmarksData.filter(
          (bookmark) => bookmark.category === selectedCategory
        );

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-800">
      <NavProjects />
      <Stars />
      <div className="pt-20">
        <div className="flex items-start justify-center flex-wrap ml-2 gap-3">
          <button
            key="All"
            className={`flex items-center space-x-1 rounded-full bg-[#fffffc] dark:bg-gray-900 border ${
              selectedCategory === "All" ? "border-gray-300" : "border-gray-200"
            } py-1 px-2 text-base`}
            onClick={() => setSelectedCategory("All")}
          >
            <span>All</span>
            <span className="flex-none flex items-center justify-center rounded-full text-xs min-w-[16px] min-h-[16px] px-1 mb-2 text-gray-400">
              {Object.values(categoryCounts).reduce(
                (acc, count) => acc + count,
                0
              )}
            </span>
          </button>
          {Object.keys(categoryCounts).map((category) => (
            <button
              key={category}
              className={`flex items-center space-x-1 rounded-full bg-[#fffffc] dark:bg-gray-900 border ${
                selectedCategory === category
                  ? "border-gray-300"
                  : "border-gray-200"
              } py-1 px-3 text-base`}
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category}</span>
              <span className="flex-none flex items-center justify-center rounded-full text-xs min-w-[16px] min-h-[16px] px-1 mb-2 text-gray-400">
                {categoryCounts[category]}
              </span>
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto xl:py-32 py-14 px-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 cursor-pointer">
            {filteredBookmarks.map((item, index) => (
              <div
                key={index}
                className="dark:bg-gray-900 p-4 rounded-xl bg-gray-100 transition-colors duration-300"
              >
                <Link href={item.url} target="_blank" className="block">
                  <div className="rounded-lg h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt="photo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-black dark:text-white text-lg font-semibold mt-2">
                    {item.title}
                  </h3>
                  <span className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 inline-block mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    {item.link}
                  </span>
                  <p className="line-clamp-3 text-sm text-gray-800 dark:text-gray-300 mt-1">
                    {item.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
