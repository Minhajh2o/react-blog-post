import React from 'react';
import profileImage from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 border-b-2 border-gray-300">
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img className="w-12 h-12 rounded-full" src={profileImage} alt="Profile" />
        </div>
    );
};

export default Header;