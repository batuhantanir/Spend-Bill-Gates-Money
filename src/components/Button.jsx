import React from "react";

const Button = ({ title, style, dis, click }) => {
  return (
    <button
      className={`${style} text-lg w-[100px] h-full mx-1 rounded text-white hover:scale-105 active:scale-95 disabled:opacity-50 disabled:bg-black disabled:from-[#000] disabled:to-[#000]`}
      disabled={dis}
      onClick={click}
    >
      {title}
    </button>
  );
};

export default Button;
