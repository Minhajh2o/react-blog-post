import React from "react";

const Bookmark = ({ blog }) => {
  return (
      <div className="bg-white rounded-lg p-4">
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
      </div>
  );
};

export default Bookmark;
