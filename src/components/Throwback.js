import React from "react";

export const Throwback = (props) => {
  return (
    <div className="lg:w-[25.563rem] lg:h-[26.688rem] w-[15.875rem] h-[15.938rem] snap-start z-10 overflow-hidden relative shrink-0">
      <img src={`../ThrowImages/${props.img}`}
        alt={props.alt}
        className=" rounded-[30px] border-white border-[3px] bg-cover w-full h-full"
      />
    </div>
  );
};
