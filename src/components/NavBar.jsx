import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="p-4 bg-teal-500 drop-shadow-lg">
      <div className="flex justify-between items-center px-2 text-white text-lg">
        <div className="flex justify-end font-medium">
          <Link 
            to={"/"}
            className="mr-6"
          >Home</Link>
          <Link to={"/archived"}>Archive</Link>
        </div>
        <div className="flex items-center font-pattaya">My Notes</div>
      </div>
    </nav>
  );
};
