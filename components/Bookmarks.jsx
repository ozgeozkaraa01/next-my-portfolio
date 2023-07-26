import React from "react";
import { bookmarksData } from "../data/bookmarksData";
import Link from "next/link";

const Bookmarks = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto xl:p-0 p-1">
      <h2 className="text-lg">Bookmarks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10">
        {bookmarksData.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={item.url} target="_blank" className="block">
              <div className="rounded-lg h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt="photo"
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <h3 className="text-black text-lg font-semibold mt-2">
              {item.title}
            </h3>
            <span className="line-clamp-2 text-sm text-gray-600 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
              {item.link}
            </span>
            <p className="line-clamp-3 text-sm text-gray-800 mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
