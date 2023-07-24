import React from "react";
import { bookmarksData } from "../data/bookmarksData";
import Link from "next/link";

const Bookmarks = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto xl:p-0 p-1">
      <h2 className="text-lg">Bookmarks</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {bookmarksData.map((item, index) => (
          <div key={index} className="flex">
            <Link
              href={item.url}
              target="_blank"
              className="aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-zinc-50 p-4 transition-colors duration-300 hover:bg-gray-100"
            >
              <div className="overflow-hidden rounded-lg w-96 h-48">
                <img
                  src={item.img}
                  alt="photo"
                  className="rounded-lg bg-cover bg-center bg-no-repeat object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-black text-lg font-semibold">
                  {item.title}
                </h3>
                <span className="line-clamp-5 inline-flex items-center gap-1 text-sm text-gray-600">
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
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  {item.link}
                </span>
                <p className="line-clamp-6 text-sm text-gray-800">
                  {item.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
