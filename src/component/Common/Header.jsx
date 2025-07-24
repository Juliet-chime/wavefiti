import { useEffect, useRef, useState } from "react";
import herobg from "../../assets/images/herobg.png";
import germany from "../../assets/images/Germany.png";
import avatar from "../../assets/images/Avatar.png";
import progress from "../../assets/images/progress.png";
import nigeria from "../../assets/images/Nigeria.png";
import philippines from "../../assets/images/philippines.png";
import vector from "../../assets/images/Vector.png";
import uk from "../../assets/images/uk.png";
import Navbar from "./Navbar";
import { AiOutlineSwap } from "react-icons/ai";
import { HeroTitle } from "./HeroTitle";
import SearchComponent from "./SearchComponent";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { text } from "../../data/navData";
import FeatureCard from "./FeatureCard";
import whitesquare from "../../assets/images/sendsquarewhite.svg";
import whiteusd from "../../assets/images/usdcoinwhite.svg";
import swaparrowwhite from "../../assets/images/arrowswapwhite.svg";

const imageArray = [
  progress,
  germany,
  avatar,
  uk,
  nigeria,
  philippines,
  vector,
];

const CountryImage = ({ source }) => {
  return (
    <div className="w-6 h-6 rounded-full">
      <img src={source} className="w-full h-full rounded-full" />
    </div>
  );
};

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastItem, setLastItem] = useState(imageArray.length - 1);

  const prevActiveIndex = useRef(activeIndex);
  const prevLastItem = useRef(lastItem);

  useEffect(() => {
    const interval = setInterval(() => {
      const total = imageArray.length;

      const newActive = getRandomIndex(
        [prevActiveIndex.current, prevLastItem.current],
        total
      );
      const newLast = getRandomIndex([newActive, prevLastItem.current], total);

      setActiveIndex(newActive);
      setLastItem(newLast);

      prevActiveIndex.current = newActive;
      prevLastItem.current = newLast;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-[800px]">
      <div
        className={`h-11/12 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${herobg})`,
        }}
      >
        <Navbar />
        <div className="flex items-center relative justify-center mt-12 px-3 md:px-15">
          <div className="absolute hidden md:flex bg-amber-950 left-10 top-18">
            <FeatureCard
              icon={<img src={whitesquare} className="object-contain" />}
              title={"Sent successfully 💸"}
              description={"You just sent ₦50,000 to Ada"}
              bgstyle="border-none bg-white/20"
              position="-top-2 rotate-0 md:rotate-12"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
            <FeatureCard
              icon={<img src={whiteusd} className="object-contain" />}
              title={"Funds received!  🎉"}
              description={"You received 120 USDC from Upwork."}
              bgstyle="border-none bg-white/6"
              position="top-25 -left-3 rotate-3"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />

            <FeatureCard
              icon={<img src={swaparrowwhite} className="object-contain" />}
              title={"Swapped successfully"}
              description={"50 USDC → ₦65,000. Converted at real-time rates."}
              bgstyle="border-none bg-white/8"
              position="top-45 -left-3"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
          </div>

          <div className="text-center">
            <div className=" flex items-center justify-center space-x-2 w-24 h-8.5 m-auto rounded-full bg-white p-2">
              <CountryImage source={imageArray[activeIndex]} />

              <AiOutlineSwap />
              <CountryImage source={imageArray[lastItem]} />
            </div>

            <div className="mt-6 ">
              <HeroTitle
                heading={" Send. Get paid. Move"}
                title={"money freely."}
                description={`Fast, low-fee transfers that work across borders, currencies,
                and life situations. Powered by crypto`}
              />
              <SearchComponent />
            </div>
          </div>

          <div className="absolute hidden md:flex right-83 top-16">
            <FeatureCard
              icon={<img src={whitesquare} className="object-contain" />}
              title={"Sent successfully 💸"}
              description={"You just sent ₦50,000 to Ada"}
              bgstyle="border-none bg-white/20"
              position="-top-2 rotate-0 md:-rotate-8"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
            <FeatureCard
              icon={<img src={whiteusd} className="object-contain" />}
              title={"Funds received!  🎉"}
              description={"You received 120 USDC from Upwork."}
              bgstyle="border-none bg-white/6"
              position="top-25 -left-3 rotate-4"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />

            <FeatureCard
              icon={<img src={swaparrowwhite} className="object-contain" />}
              title={"Swapped successfully"}
              description={"50 USDC → ₦65,000. Converted at real-time rates."}
              bgstyle="border-none bg-white/8"
              position="top-45 -left-3"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
          </div>

          <div className="flex absolute md:hidden right-83 -bottom-30">
            <FeatureCard
              icon={<img src={whitesquare} className="object-contain" />}
              title={"Sent successfully 💸"}
              description={"You just sent ₦50,000 to Ada"}
              bgstyle="border-none bg-white/20"
              position="top-25 -left-10 rotate-0 md:-rotate-8"
              animationClass="animate-float lg:block"
              iconBg="bg-primaryBlue-100"
            />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-textbg text-primaryBlack-100 py-2 font-medium text-xl">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-sm font-medium px-4">{text}</span>
          <span className="text-sm font-medium px-4">{text}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
