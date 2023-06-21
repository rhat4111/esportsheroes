import React from "react";

const MenuItem = ({ id, label, active = false, onClick }) => {
  return (
    <div className="h-full relative flex items-center font-bold text-light uppercase">
      <span className="cursor-pointer" onClick={() => onClick(id)}>
        {label}
      </span>
      {active && (
        <span className="w-full h-1.5 bg-success absolute bottom-0 left-0 clip-menu-underline" />
      )}
    </div>
  );
};

export default MenuItem;
