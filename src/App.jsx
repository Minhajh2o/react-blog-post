import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addBookmark = (blog) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
  };

  const addReadingTime = (time) => {
    setReadingTime((reading_time) => reading_time + time);
  };

  return (
    <>
      <Header />
      <div className="flex justify-between gap-6 p-4">
        <Blogs 
          addBookmark={addBookmark} 
          addReadingTime={addReadingTime} 
        />
        <Bookmarks 
          bookmarks={bookmarks} 
          readingTime={readingTime}
        />
      </div>
    </>
  );
}

export default App;
