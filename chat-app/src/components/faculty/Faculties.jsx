import React from "react";
import { Link } from "react-router-dom";

function Faculties() {
  return (
    <div>
      <div className="text-area text-center mt-32 text-5xl">Choose Faculty</div>
      <div className="items bg-orange-600  flex h-80 items-center justify-center text-3xl rounded-xl gap-8">
        <div className="item">
          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            <Link to="../departments/Civil">Civil</Link>
          </button>
        </div>
        <div className="item">
          {" "}
          <button className="bg-green-600 px-6 py-3 rounded-xl">
            <Link to="../departments/Computer">Computer</Link>
          </button>
        </div>
        <div className="item">
          {" "}
          <button className="bg-red-600 px-6 py-3 rounded-xl">
            {" "}
            <Link to="../departments/Architect">Architect</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faculties;
