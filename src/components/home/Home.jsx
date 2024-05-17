import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="header text-center mt-3">Welcome to Home Page</div>
      <div className="text-area">
        <Link to="../faculty/Faculties">Show Faculties</Link>
      </div>
    </>
  );
}

export default Home;
