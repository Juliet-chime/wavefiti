import React from "react";
import Button from "../inputfield/Button";

const ServiceWrapper = ({ heading, title, height='h-full',  children,bg='bg-secondaryBlue-100',showBtn=false,showBgImg,renderContent=false }) => {
  return (
    <div className={`bg-no-repeat bg-contain bg-bottom rounded-[37.02px] ${bg} py-7 md:py-10 px-8 ${height} flex flex-col justify-between`}
    style={showBgImg?{
               backgroundImage: `url(${showBgImg})`,
    }:{}}
    >
    {renderContent?renderContent:
     <div>
         <h1 className="font-semibold text-2xl md:text-4xl text-primaryBlack-100 max-w-80">
        {heading}
      </h1>
      <p className="font-normal text-sm md:text-xl text-primaryBlack-100 mt-6 max-w-82">
        {title}
      </p>
      {showBtn? <div className="w-43 h-12 mt-5">
                  <Button>Get started</Button>
                </div>:null}
     </div>
    }
    <div
    >
          {children}
    </div>
    </div>
  );
};

export default ServiceWrapper;
