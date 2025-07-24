import { useEffect, useState } from "react";
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
import annotation from "../assets/images/Annotation.png";
import footercoin from "../assets/images/footercoins.png";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import dollar from "../assets/images/dollar.svg";
import cad from "../assets/images/Vector.png";
import ServiceWrapper from "../component/Common/ServiceWrapper";
import FeatureCard from "../component/Common/FeatureCard";
import StaggeredFlags from "../component/Common/ScrollingFlags";
import { thingsToDo } from "../data/navData";
import { FaPlus } from "react-icons/fa6";
import SearchComponent from "../component/Common/SearchComponent";
import logo from "../assets/images/Logo.png";
import PayComponent from "../component/Common/PayComponent";
import Button from "../component/inputfield/Button";
import { TbTransferVertical } from "react-icons/tb";

const SingleImage = ({ data, width = "w-40", height = "w-40" }) => {
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
          <div className="w-90 md:w-190 m-auto mt-8 px-3 py-2 bg-secondaryBlue rounded-full flex items-center justify-center space-x-3">
            {imgData[activeIndex]?.image.map((data, index) => {
              return <SingleImage data={data} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div className="px-3 lg:px-40 py-10 lg:py-30 bg-primaryWhite flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between">
        <div className="text-center md:text-start">
          <HeroTitle
            cta={"Swap"}
            heading={"See how much"}
            title={"they’ll get"}
            textAlign="items-start"
            alignstart={true}
            primary={false}
            color="text-primaryBlack-100"
            ctaStyle="justify-center m-auto md:justify-start md:m-0"
            description={`Know exactly what’s arriving — before you send.
No guesswork. No padded rates. Just real-time conversion, powered by stablecoins`}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <div className="w-17 h-17 rounded-full flex items-center justify-center bg-primaryWhite absolute left-35 md:left-55 top-25">
            <div className="w-13 h-13 rounded-full flex items-center justify-center bg-white">
              <TbTransferVertical size={24} className="text-primaryBlack-100" />
            </div>
          </div>
          <PayComponent
            title="Pay"
            amount={2000}
            placeholder="USDC"
            image={dollar}
          />
          <PayComponent
            title="Pay"
            amount={2000}
            description={"1 USDC = 1.37 CAD"}
            placeholder="CAD"
            image={cad}
          />
          <div className="h-11.5">
            <Button type="secondary">Get started</Button>
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

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-6 mt-10 md:mt-20 h-200 md:h-140 w-full lg:w-9/11 m-0 md:m-auto px-2 md:px-3 lg:md:px-0">
          <div className="w-full md:w-5/10 lg:w-[500px] h-full">
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

          <div className="w-full md:w-5/10 lg:flex-1">
            <Herobg img={family}>
              <FeatureCard
                title={"Funds received! 💸"}
                description={"You received $2000 from Dan."}
                icon={<img src={whiteArrow} className="object-contain" />}
                position="bottom-5 md:bottom-auto md:top-10 left-8 md:left-5"
              />
            </Herobg>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 h-200 md:h-140 w-full lg:w-9/11 m-0 md:m-auto px-2 md:px-3 lg:px-0 mt-35 md:mt-0">
        <div className="w-full md:w-5/10 lg:flex-1 order-2 md:order-1">
          <Herobg img={smilingBoy}>
            <FeatureCard
              icon={<img src={coin} className="object-contain" />}
              title={"Funds received!  🎉"}
              description={"You received 120 USDC from Upwork."}
              bgstyle="border-none bg-white/10"
              position="bottom-30 md:bottom-auto left-6 z-20 lg:left-8 top-auto md:top-100 lg:top-6 rotate-0 md:rotate-4"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
            <FeatureCard
              showfunds={false}
              bgstyle="border-none bg-white/10"
              position="left-6 lg:left-8 bottom-3 md:bottom-auto top-auto md:-top-10 lg:top-27"
            />
          </Herobg>
        </div>
        <div className="w-full md:w-5/10 lg:w-[500px] h-100 md:h-full order-1 md:order-2">
          <ServiceWrapper
            bg="bg-primaryGreen-100"
            heading={"Get paid in crypto, no conversion stress"}
            title={
              "Whether it’s remote work or side hustles, receive crypto directly and skip the costly middlemen."
            }
            showBgImg={country}
          ></ServiceWrapper>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:space-x-6 mt-10 md:mt-20 h-140 w-full lg:w-9/11 m-0 md:m-auto px-2 md:px-3 lg:px-0">
        <div className="w-full md:w-5/10 lg:w-[500px] h-full mt-30 md:mt-0">
          <ServiceWrapper
            heading={"No chargebacks. No frozen funds"}
            title={
              "What you send stays sent. No reversals, no waiting, no bank drama."
            }
            showBgImg={shinycoin1}
            showBtn={true}
          ></ServiceWrapper>
        </div>

        <div className="w-full md:w-5/10 lg:flex-1">
          <Herobg img={womanbg}>
            <FeatureCard
              title={"Sent successfully 💸"}
              description={"You just sent ₦50,000 to Ada"}
              icon={<img src={arrowup} className="object-contain" />}
              position="bottom-5 md:bottom-auto md:top-10 left-5"
              bgstyle="border-none bg-white/25"
            />
          </Herobg>
        </div>
      </div>

      <div className="px-3 md:px-20 py-30 mt-70 md:mt-10 bg-secondaryBlue-100">
        <div className="w-full lg:w-8/10 m-auto h-full lg:h-140 bg-white rounded-3xl md:rounded-[57.6px] flex flex-col gap-4 lg:flex-row items-start md:items-center py-5 px-3 md:px-10 lg:px-10 md:py-10">
          <div className="h-full w-full lg:w-5/10 flex flex-col items-start">
            <div>
              <img src={annotation} className="object-contain" />
              <h1
                className={`font-extrabold font-migra text-2xl md:text-5xl leading-tight`}
              >
                Something
                <br /> better
              </h1>
              <div className="mt-10">
                {thingsToDo.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 pt-3 pb-5 border-b border-primaryash"
                    >
                      <div className="w-5 h-5 rounded-full bg-secondaryBlack flex items-center justify-center">
                        <FaPlus color="white" fontSize={11} />
                      </div>

                      <div>
                        <h1 className=" text-primaryBlack-100 font-medium text-lg md:text-2xl">
                          {data.title} <br />
                          {index === 1 ? "your first crypto app." : null}
                        </h1>
                        {data.description ? (
                          <p className=" text-secondaryash font-normal text-[10px] md:text-sm">
                            {data.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="h-80 lg:h-full w-full lg:w-5/10">
            <ServiceWrapper
              bg="bg-primaryGreen-100"
              renderContent={
                <div className="flex flex-row flex-wrap lg:flex-col items-center gap-4">
                  {["Fast", "Global", "Secure", "Yours"].map((item, index) => (
                    <p
                      className="border border-primaryBlack-100 rounded-4xl py-2 px-6 text-xl lg:text-3xl"
                      key={index}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              }
              showBgImg={shinycoin2}
            ></ServiceWrapper>
          </div>
        </div>
      </div>
      <div className="pb-10 relative bg-primaryBlack-100 border-amber-600">
        <div className="flex items-center justify-center">
          <img src={footercoin} className="object-contain pl-0 mmd:pl-50" />
        </div>

        <div className="px-4 md:px-0">
          <HeroTitle
            heading={"Be part of the early"}
            title={"community"}
            description={`Borderless money, powered by crypto. For work, family, and everything in between.`}
          />
          <SearchComponent mt="mt-5" />
        </div>
        <StaggeredFlags />
        <div className="flex items-center justify-between px-5 md:px-20 mt-25">
          <div>
            <img src={logo} className="object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <img src={linkedin} className="object-contain" />
            <img src={instagram} className="object-contain" />
            <img src={twitter} className="object-contain" />
          </div>
        </div>
        <div className="text-center mt-20">
          <p className="text-white font-normal text-sm max-w-150 m-auto">
            Sendcoins, a Canadian corporation with incorporation number
            1500473-0, is registered with FINTRAC as a Money Services Business
            (MSB) with registration number M23176043.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
