import React, { useState } from "react";

export const NavItem = ({ text = "add", children = "" }) => {
  const [selected, setselected] = useState("");
  return (
    <div className="relative">
      <div className="flex space-x-2 cursor-pointer items-center">
        <span className="text-medium-gray hover:text-almost-black"
        onClick={() => children && setselected(text !== selected ? text: '')}>{text}</span>
        {children && selected !== text &&  <img
          src="https://icons.veryicon.com/png/o/miscellaneous/unionpay-digital-marketing/down-arrow-thin.png"
          width={20}
          alt=""
        />}
        {children && selected === text && '>'}
      </div>
      {selected && children }
    </div>
  );
};
