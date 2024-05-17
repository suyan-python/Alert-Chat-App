import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header mt-4">
      <div className="items flex justify-between py-3">
        <div className="image-area">
          <Link to="/">Rate.com</Link>
        </div>
        <div className="text-area flex gap-4">
          <div className="item">
            <Link to="../departments/Civil">Civil</Link>
          </div>
          <div className="item">
            <Link to="../departments/Computer">Computer</Link>
          </div>
          <div className="item">
            <Link to="../departments/Architect">Architect</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
