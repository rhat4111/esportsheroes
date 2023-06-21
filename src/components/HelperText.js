import React from "react";

const HelperText = ({ align = "left", children }) => {
  return (
    <span
      className={`hidden lg:flex absolute top-1/2 ${
        align === `left`
          ? `left-16 -translate-x-1/2`
          : `right-16 translate-x-1/2`
      } -translate-y-1/2 font-bold text-xl text-light leading-[96px] tracking-[6px] -rotate-90`}
    >
      {children}
    </span>
  );
};

export default HelperText;
