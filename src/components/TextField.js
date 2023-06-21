import React from "react";

const TextField = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  className,
  helperText,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="w-full bg-success clip-button-outline">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-14 bg-black clip-button-inline outline-none px-4 ${className}`}
        />
      </div>
      {helperText && (
        <p className="font-light text-sm text-success mt-2">{helperText}</p>
      )}
    </div>
  );
};

export default TextField;
