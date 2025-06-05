import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ addBookmark, addReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-3xl font-bold mb-2">Blogs</h1>
      <p className="text-gray-700 mb-4">
        Explore insightful articles on web development, covering the latest
        frameworks, best practices, and tips to help you build modern,
        responsive, and efficient web applications.
      </p>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          addBookmark={addBookmark}
          addReadingTime={addReadingTime}
        />
      ))}
    </div>
  );
};

export default Blogs;
