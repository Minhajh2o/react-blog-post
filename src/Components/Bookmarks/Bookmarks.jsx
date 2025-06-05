import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = () => {
    return (
        <div className='flex flex-col gap-4 bg-gray-200 rounded-lg p-5 w-1/3'>
            <h2 className='text-xl font-bold'>Bookmarked Blogs: </h2>
            <Bookmark />
            <Bookmark />
            <Bookmark />
        </div>
    );
};

export default Bookmarks;