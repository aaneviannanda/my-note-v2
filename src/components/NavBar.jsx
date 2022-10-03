import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="p-2 bg-teal-500 drop-shadow-lg">
      <div className="flex justify-between items-center px-2 text-white text-lg">
        <div className="flex justify-end font-medium">
          <Link 
            to={"/"}
            className="mr-4 py-2 px-2 hover:bg-teal-400 rounded-md"
          >Home</Link>
          <Link 
            to={"/archived"}
            className="py-2 px-2 hover:bg-teal-400 rounded-md"
          >Archive</Link>
        </div>
        <div className="mr-2 flex items-center font-pattaya">NoTo Urep</div>
      </div>
    </nav>
  );
};
