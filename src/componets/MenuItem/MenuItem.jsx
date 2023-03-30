import React from "react";

export const MenuItem = ({ text = "" }) => {
  return (
    <div className="flex w-full space-x-3">
      <span className="text-medium-gray hover:text-almost-black cursor-pointer">
        {text}
      </span>
    </div>
  );
};
