import React, { useEffect, useState } from "react";
import Header from "../component/Common/Header";
import { imgData } from "../data/imageData";
import { HeroTitle } from "../component/Common/HeroTitle";
import Herobg from "../component/Common/Herobg";
import family from '../assets/images/family.png'

const SingleImage = ({data,width='w-20',height='w-20'}) => {
  return     <div className={`${width} ${height} rounded-full`}>
                  <img
                    src={data}
                    className="w-full h-fit object-contain rounded-full"
                  />
                </div>
}

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
          <HeroTitle
            cta={"Built for you"}
            heading={"You live here. They live"}
            title={"there. We connect it all."}
            description={`  Whether you’re freelancing, studying abroad, supporting family, or
              already into crypto, Sendcoins is built for how your money really
              moves`}
          />
          <div className="w-92 m-auto mt-8 px-3 py-2 bg-secondaryBlue rounded-full flex items-center space-x-3">
            {imgData[activeIndex]?.image.map((data, index) => {
              return (<SingleImage data={data} key={index}/>
              );
            })}
          </div>
        </div>
      </div>

      <div div className=" py-5 md:py-30">
        <HeroTitle
          cta={"What You Can Do with Sendcoin"}
          heading={"One app. Many ways to"}
          title={"move your money"}
          primary={false}
          color="text-primaryBlack-100"
          description={`Move your money, your way. Instantly. Securely. Without the extra fees.`}
        />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-6 px-3 md:px-5 lg:px-20 mt-10 md:mt-20">
          <div className="w-full md:w-4/9 rounded-[37.02px] bg-secondaryBlue-100 py-7 md:py-10 px-8">
            <h1 className="font-semibold text-2xl md:text-4xl text-primaryBlack-100 max-w-80">Send money across borders fast</h1>
            <p className="font-normal text-sm md:text-xl text-primaryBlack-100 mt-6 max-w-82">No delays. No surprises. Just fast, secure  affordable transfers when your people need it most.</p>

           <div className="flex items-center mt-10 md:mt-30 gap-3">
             {imgData[0]?.image.map((data, index) => {
              return (<SingleImage width={'w-14'} height={'w-14'} data={data} key={index}/>
              );
            })}
           </div>
          </div>
            <div className="w-full md:w-8/12">
                 <Herobg img={family}>pp</Herobg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
