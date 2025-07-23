import React from "react";

export const HeroTitle = ({ cta, title, heading, description, primary=true,color='text-white' }) => {
  return (
    <div className="flex flex-col items-center">
      {cta ? (
        <div
          className={`flex items-center justify-center text-sm font-normal h-8.5 m-auto rounded-full border ${
            primary ? "border-white" : "border-primaryBlack-100"
          }  ${color} p-2 mb-2`}
        >
          {cta}
        </div>
      ) : null}
      <div className="text-center">
        <h1 className={`font-extrabold font-migra text-2xl md:text-7xl ${color} leading-tight`}>
          {heading}
          <br />
          {title}
        </h1>
        <p className={`${color} max-w-100 text-center m-auto font-normal text-[16px] mt-2`}>
          {description}
        </p>
      </div>
    </div>
  );
};
