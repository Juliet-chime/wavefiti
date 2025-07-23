import React from "react";

const Herobg = ({
  img,
  children,
  bgClass = "bg-cover bg-center md:bg-center lg:bg-bottom-left",
}) => {
  return (
    <div
      className={`h-107 md:h-140 flex rounded-medium bg-cover ${bgClass} relative bg-no-repeat object-contain`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {children}
    </div>
  );
};

export default Herobg;
