import React from "react";

const CheckBox = ({ checked = true, size = "sm", className }) => {
  return (
    <div
      className={`rotate-45 ${
        size === `sm`
          ? `w-[14px] h-[14px]`
          : `w-[14px] lg:w-[30px] h-[14px] lg:h-[30px]`
      } flex justify-center items-center border-2 border-light ${className}`}
    >
      {checked && (
        <div
          className={`${
            size === `sm`
              ? `w-1.5 h-1.5`
              : `w-1.5 lg:w-[14px] h-1.5 lg:h-[14px]`
          } bg-success`}
        />
      )}
    </div>
  );
};

export default CheckBox;
