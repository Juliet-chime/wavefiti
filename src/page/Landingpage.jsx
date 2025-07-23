import React, { useEffect, useState } from "react";
import Header from "../component/Common/Header";
import { imgData } from "../data/imageData";
import { HeroTitle } from "../component/Common/HeroTitle";
import Herobg from "../component/Common/Herobg";
import family from "../assets/images/family.png";
import womanbg from "../assets/images/womanbg.png";
import smilingBoy from "../assets/images/smilingmanbg.png";
import whiteArrow from "../assets/images/whitesquare.svg";
import arrowup from "../assets/images/arrowupwhite.svg";
import coin from "../assets/images/usdcoin.svg";
import shinycoin1 from "../assets/images/ShinyCoins1.png";
import shinycoin2 from "../assets/images/ShinyCoins2.png";
import country from "../assets/images/Countries.png";
import ServiceWrapper from "../component/Common/ServiceWrapper";
import FeatureCard from "../component/Common/FeatureCard";
import { ScrollingFlags } from "../component/Common/ScrollingFlags";

const SingleImage = ({ data, width = "w-20", height = "w-20" }) => {
  return (
    <div className={`${width} ${height} rounded-full`}>
      <img src={data} className="w-full h-fit object-contain rounded-full" />
    </div>
  );
};

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
              return <SingleImage data={data} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div div className="py-5 md:py-30">
        <HeroTitle
          cta={"What You Can Do with Sendcoin"}
          heading={"One app. Many ways to"}
          title={"move your money"}
          primary={false}
          color="text-primaryBlack-100"
          description={`Move your money, your way. Instantly. Securely. Without the extra fees.`}
        />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-6 mt-10 md:mt-20 h-140 w-full md:w-9/11 m-0 md:m-auto px-2 md:px-0">
          <div className="w-full md:w-[500px] h-full">
            <ServiceWrapper
              heading={"Send money across borders fast"}
              title={
                "No delays. No surprises. Just fast, secure  affordable transfers when your people need it most."
              }
            >
              <div className="flex items-center gap-3">
                {imgData[0]?.image.map((data, index) => {
                  return (
                    <SingleImage
                      width={"w-14"}
                      height={"w-14"}
                      data={data}
                      key={index}
                    />
                  );
                })}
              </div>
            </ServiceWrapper>
          </div>

          <div className="w-full md:flex-1">
            <Herobg img={family}>
              <FeatureCard title={'Funds received! 💸'} description={'You received $2000 from Dan.'}
              icon={<img src={whiteArrow} className="object-contain"/>}
              position='bottom-5 md:bottom-auto md:top-10 left-8 md:left-5'
              />
            </Herobg>
          </div>
        </div>
      </div>

         <div className="flex flex-col md:flex-row items-start md:items-center gap-3 h-140 w-full md:w-9/11 m-0 md:m-auto px-2 md:px-0 mt-35 md:mt-0">

            <div className="w-full md:flex-1 order-2 md:order-1">
            <Herobg img={smilingBoy}>
               <FeatureCard
     icon={<img src={coin} className="object-contain"/>}
      title={'Funds received!  🎉'}
       description={'You received 120 USDC from Upwork.'}
       bgstyle="border-none bg-white/10"

        position='bottom-30 md:bottom-auto left-6 z-20 lg:left-8 top-auto md:top-10 lg:top-6 rotate-0 md:rotate-4'
        animationClass='animate-float lg:block'
        iconBg='bg-primaryBlue-100'
        /> 
        <FeatureCard showfunds={false} bgstyle="border-none bg-white/10"   
         position='left-6 lg:left-8 bottom-3 md:bottom-auto top-auto lg:top-27'/>
            </Herobg>
          </div>
          <div className="w-full md:w-[500px] h-full order-1 md:order-2">
          <ServiceWrapper
            bg="bg-primaryGreen-100"
            heading={"Get paid in crypto, no conversion stress"}
            title={
              "Whether it’s remote work or side hustles, receive crypto directly and skip the costly middlemen."
            }
            showBgImg={country}
          >
          </ServiceWrapper>
          </div>
        </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-6 mt-10 md:mt-20 h-140 w-full md:w-9/11 m-0 md:m-auto px-2 md:px-0">
          <div className="w-full md:w-[500px] h-full mt-30 md:mt-0">
            <ServiceWrapper
              heading={"No chargebacks. No frozen funds"}
              title={
                "What you send stays sent. No reversals, no waiting, no bank drama."
              }
              showBgImg={shinycoin1}
              showBtn={true}
            >
            </ServiceWrapper>
          </div>

          <div className="w-full md:flex-1">
            <Herobg img={womanbg}>
              <FeatureCard title={'Sent successfully 💸'} description={'You just sent ₦50,000 to Ada'}
              icon={<img src={arrowup} className="object-contain"/>}
              position='bottom-5 md:bottom-auto md:top-10 left-5'
               bgstyle="border-none bg-white/25"
              />
            </Herobg>
          </div>
        </div>

<div className="px-3 md:px-20 py-30 mt-70 md:mt-0 bg-secondaryBlue-100">
<div className="w-full md:w-7/10 m-auto h-120 bg-white rounded-3xl md:rounded-[57.6px] flex flex-col md:flex-row items-start md:items-center py-5 px-3 md:px-0 md:py-0">
<div className="h-full w-full md:w-5/10">1</div>
 <div className="h-full w-full md:w-5/10">
          <ServiceWrapper
            bg="bg-primaryGreen-100"
            renderContent={<div className="flex flex-col items-center gap-4">
              {['Fast','Global','Secure','Yours'].map((item,index)=><p className="border border-primaryBlack-100 rounded-4xl py-2 px-6 text-3xl" key={index}>{item}</p>)}
            </div>}
            showBgImg={shinycoin2}
          >
          </ServiceWrapper>
          </div>
</div>
</div>
        {/* <ScrollingFlags/> */}
    </div>
  );
};

export default Landingpage;
