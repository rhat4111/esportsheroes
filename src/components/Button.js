import React from "react";

const Button = ({
  variant = "contained",
  size = "sm",
  onClick,
  children,
  fullWidth = false,
  className = "",
  containerClassName = "",
  animation = false,
  disabled = false,
}) => {
  const buttonStyles = {
    contained: "text-black",
    outlined:
      "relative text-light before:absolute before:w-full before:h-full before:bg-dark before:top-0 before:left-0 before:clip-button-inline",
  };
  const buttonHeight = {
    sm: "h-10 font-semibold",
    lg: "h-12 lg:h-16 font-bold",
  };

  return (
    <div className={`inline-block relative ${containerClassName}`}>
      {animation && (
        <svg className="absolute w-full h-full top-0 left-0 animate-button">
          <line
            x1="8"
            y1="2"
            x2="100%"
            y2="2"
            className="stroke-success stroke-2"
          />
          <line
            x1="9"
            y1="1.5"
            x2="1.5"
            y2="9"
            className="stroke-success stroke-2"
          />
          <line
            x1="8"
            y1="100%"
            x2="100%"
            y2="100%"
            className="stroke-success stroke-2 -translate-y-[1px] -translate-x-1.5"
          />
          <line
            x1="100%"
            y1="8"
            x2="100%"
            y2="100%"
            className="stroke-success stroke-2 -translate-y-1.5 -translate-x-[1px]"
          />
          <line
            x1="2"
            y1="8"
            x2="2"
            y2="100%"
            className="stroke-success stroke-2"
          />
          <line
            x1="10"
            y1="0"
            x2="0"
            y2="10"
            className="stroke-success stroke-2 translate-x-[calc(100%-8.5px)] translate-y-[calc(100%-8.5px)]"
          />
        </svg>
      )}
      <button
        className={`relative clip-button-outline uppercase px-4 ${
          buttonHeight[size]
        } ${buttonStyles[variant]} ${className} ${fullWidth ? `w-full` : ``} ${
          disabled ? `bg-secondary` : `bg-success`
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="relative z-10">{children}</div>
      </button>
    </div>
  );
};

export default Button;
