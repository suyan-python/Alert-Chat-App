import React from "react";
import CivilPeople from "./civilPeople/CivilPeople";
import { Link } from "react-router-dom";

export default function Civil() {
  return (
    <>
      <div className="back">
        <Link to={"/faculty/Faculties"}>Back</Link>
      </div>
      <div className="text-area">
        <div className="welcome">Civil Section</div>
        <div className="detail flex">
          <CivilPeople />
        </div>
      </div>
    </>
  );
}
