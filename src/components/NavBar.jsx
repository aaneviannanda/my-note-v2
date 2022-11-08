import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export const NavBar = () => {
  const {authUser, setAuthUser} = useContext(AuthContext);
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthUser(null);
    navigate("/");
  };

  return (
    <nav className="p-2 bg-teal-500 drop-shadow-lg dark:bg-gray-700">
      <div className="flex justify-between items-center px-2 text-white text-lg">
        {authUser ? (
          <div className="flex justify-end font-medium">
            <Link to={"/"} className="mr-4 py-2 px-2 hover:bg-teal-400 rounded-md">
              Home
            </Link>
            <Link to={"/archived"} className="py-2 px-2 hover:bg-teal-400 rounded-md">
              Archive
            </Link>
          </div>
        ) : null }

        <div>
        <button onClick={toggleTheme} className="mx-3 dark:text-white">
            {theme === "bright" ? (
              "Theme: Bright"
            ) : (
              "Theme: Dark"
            )}
          </button>
        </div>
        <div className="">
          <button
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
