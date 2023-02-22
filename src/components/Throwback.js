import React from "react";

export const Throwback = (props) => {
  return (
    <div className="w-[409px] h-[427px] snap-start z-10 overflow-hidden relative shrink-0">
      <img src={`../ThrowImages/${props.img}`}
        alt={props.alt}
        className=" rounded-[30px] border-white border-[3px] bg-cover w-full h-full"
      />
    </div>
  );
};
