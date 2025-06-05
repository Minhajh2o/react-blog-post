import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3">
        {/* reading time */}
      <div className="p-4 mb-4 border-2 rounded-lg border-indigo-500 bg-indigo-100">
        <h3 className="text-xl font-bold text-indigo-600">
          Total reading time: {readingTime} min
        </h3>
      </div>
      {/* bookmarks */}
      <div className="flex flex-col gap-4 bg-gray-200 rounded-lg p-5 ">
        <h2 className="text-xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((blog) => (
          <Bookmark key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
