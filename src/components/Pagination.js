import React from "react";
import CheckBox from "./CheckBox";

const Pagination = ({ active, length }) => {
  return (
    <div className="flex">
      {Array.from(Array(length)).map((item, index) => (
        <CheckBox checked={index === active} key={index} className="mx-3" />
      ))}
    </div>
  );
};

export default Pagination;
