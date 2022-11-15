import React from "react";

const Button = ({ btnText }) => {
  return (
    <button
      onClick={() => console.log("clicked")}
      className="text-white border-2 border-rose-600 bg-rose-600 py-3 px-9 cursor-pointer rounded-md mt-3
          hover:bg-transparent hover:-translate-y-2 hover:text-rose-600 duration-500"
    >
      {btnText}
    </button>
  );
};

export default Button;
