import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

function Navbar()
{
  const logout = () =>
  {
    document.location = "/";
  };
  return (
    <nav className="header mt-4">
      <div className="items flex justify-between py-3">
        <div className="image-area">
          <Link className="hover:text-orange-400" to="/">
            Rate.com
          </Link>
        </div>
        <div className="text-area flex gap-4">
          <div className="item hover:scale-110">
            <Link
              className="hover:bg-blue-600 p-1 rounded transition  hover:text-white text-blue-600"
              to="../departments/Civil"
            >
              Civil
            </Link>
          </div>
          <div className="item hover:scale-110">
            <Link
              className="hover:bg-green-600 p-1 rounded transition  hover:text-white text-green-600"
              to="../departments/Computer"
            >
              Computer
            </Link>
          </div>
          <div className="item hover:scale-110">
            <Link
              className="hover:bg-pink-600 p-1 rounded transition  hover:text-white text-pink-600"
              to="../departments/Architect"
            >
              Architect
            </Link>
          </div>
          <div className="item hover:scale-110">
            <Link
              className="hover:bg-red-600 p-1 rounded transition  hover:text-white text-red-600"
              onClick={logout}
            >
              Logout
            </Link>
          </div>
          <div className="item">
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;