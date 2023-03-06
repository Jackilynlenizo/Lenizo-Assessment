import React from "react";

export const Throwback = (props) => {
  return (
    <div className="md:w-[409px] md:h-[427px] w-[254px] h-[256px] snap-start z-10 overflow-hidden relative shrink-0">
      <img src={`../ThrowImages/${props.img}`}
        alt={props.alt}
        className=" rounded-[30px] border-white border-[3px] bg-cover w-full h-full"
      />
    </div>
  );
};
