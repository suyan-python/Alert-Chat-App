import React from "react";
import CompPeople from "./compPeople/CompPeople";
import { Link } from "react-router-dom";

export default function Computer() {
  return (
    <>
      <div className="back">
        <Link to={"/faculty/Faculties"}>Back</Link>
      </div>
      <div className="text-area">
        <div className="detail flex">
          <CompPeople />
        </div>
      </div>
      <div className="next">
        <Link to={"/departments/Architect"}>
          <button>Next</button>
        </Link>
      </div>
    </>
  );
}
