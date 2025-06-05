import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ addBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="w-2/3">
      <h1>Blogs</h1>
      <p>
        Welcome to the Blogs section! Here you will find a collection of
        articles and posts on various topics.
      </p>
      {blogs.map((blog) => (
        <Blog 
        key={blog.id} 
        blog={blog}
        addBookmark={addBookmark}
      />
      ))}
    </div>
  );
};

export default Blogs;
