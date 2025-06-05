import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const addBookmark = (blog) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
  };

  return (
    <>
      <Header />
      <div className="flex justify-between gap-6 p-4">
        <Blogs addBookmark={addBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  )
}

export default App
