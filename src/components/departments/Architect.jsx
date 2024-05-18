import React from "react";
import ArchiPeople from "./archiPeople/ArchiPeople";
import { Link } from "react-router-dom";

export default function Architect() {
  return (
    <>
      <div className="back">
        <Link to={"/faculty/Faculties"}>Back</Link>
      </div>
      <div className="text-area">
        <div className="welcome">Architect Section</div>
        <div className="detail flex">
          <ArchiPeople />
        </div>
      </div>
    </>
  );
}
