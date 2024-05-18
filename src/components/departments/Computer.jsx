import React from "react";
import CompPeople from "./compPeople/CompPeople";

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
// }

export default function Computer() {
  // const [value, setValue] = React.useState(2);
  // const [hover, setHover] = React.useState(-1);

  return (
    <>
      <div className="text-area">
        <div className="welcome">Computer Section</div>
        <div className="detail flex">
          <CompPeople />
        </div>
      </div>
    </>
  );
}
