import React, { useEffect, useState } from "react";
import Header from "../component/Common/Header";
import { imgData } from "../data/imageData";

const Landingpage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-primaryBlack-100 pt-30 pb-40 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <div className=" flex items-center justify-center text-sm font-normal h-8.5 m-auto rounded-full border border-white text-white p-2">
            Built for you
          </div>
          <div className="text-center">
            <h1 className="font-extrabold font-migra text-2xl md:text-7xl text-white leading-tight">
              You live here. They live
              <br />
              there. We connect it all.
            </h1>
            <p className="text-white max-w-100 text-center m-auto font-normal text-[16px] mt-2">
              Whether you’re freelancing, studying abroad, supporting family, or
              already into crypto, Sendcoins is built for how your money really
              moves
            </p>
          </div>
          <div className="w-92 m-auto mt-8 px-3 py-2 bg-secondaryBlue rounded-full flex items-center space-x-3">
            {imgData[activeIndex]?.image.map((data, index) => {
              return (
                <div className="w-20 h-20 rounded-full ">
                  <img
                    src={data}
                    key={index}
                    className="w-full h-fit object-contain rounded-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
