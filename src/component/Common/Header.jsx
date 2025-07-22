import React, { useEffect, useRef, useState } from "react";
import herobg from "../../assets/images/herobg.png";
import leftherobg from "../../assets/images/leftheropng.png";
import rightherobg from "../../assets/images/rightheropng.png";
import germany from "../../assets/images/Germany.png";
import avatar from "../../assets/images/Avatar.png";
import progress from "../../assets/images/progress.png";
import nigeria from "../../assets/images/Nigeria.png";
import philippines from "../../assets/images/philippines.png";
import vector from "../../assets/images/Vector.png";
import uk from "../../assets/images/uk.png";
import Navbar from "./Navbar";
import CustomInputfield from "../inputfield/CustomInputfield";
import Button from "../inputfield/Button";
import { MdEmail } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";

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

  function getRandomIndex(excludeIndices = [], max) {
    let index;
    do {
      index = Math.floor(Math.random() * max);
    } while (excludeIndices.includes(index));
    return index;
  }

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

      // Update refs
      prevActiveIndex.current = newActive;
      prevLastItem.current = newLast;
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const text =
    "Low fees. • No banks. • Real control. • Crypto-powered. • Global reach. • Secure & transparent. • Fast transfers. • Low fees. • No banks. • Real control. • Crypto-powered. • Global reach. • Secure & transparent. • ";

  //    useEffect(() => {
  //   const interval = setInterval(() => {
  //     let firstIndex = Math.floor(Math.random() * imageArray.length);
  //     let secondIndex = Math.floor(Math.random() * imageArray.length);

  //     // Ensure the two indices are different
  //     while (secondIndex === firstIndex) {
  //       secondIndex = Math.floor(Math.random() * imageArray.length);
  //     }

  //     if(firstIndex === activeIndex){
  //       firstIndex = Math.floor(Math.random() * imageArray.length);
  //     }
  //     if(secondIndex === activeIndex){
  //       secondIndex = Math.floor(Math.random() * imageArray.length);
  //     }

  //     setActiveIndex(firstIndex);
  //     setLastItem(secondIndex);
  //   }, 3000); // update every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <header className="relative h-[800px]">
      <div
        className={`h-11/12 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${herobg})`,
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${herobg})`,
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center lg:justify-between mt-12 px-3 md:px-15">
          <div className="hidden lg:flex mt-4">
            <img src={leftherobg} className="w-[260px] object-contain" />
          </div>

          <div className="text-center">
            <div className=" flex items-center justify-center space-x-2 w-24 h-8.5 m-auto rounded-full bg-white p-2">
              <CountryImage source={imageArray[activeIndex]} />

              <AiOutlineSwap />
              <CountryImage source={imageArray[lastItem]} />
            </div>

            <div className="mt-6 ">
              <h1 className="font-extrabold font-migra lg:text-hero text-white leading-tight">
                Send. Get paid. Move
                <br />
                money freely.
              </h1>
              <p className="text-white max-w-120 m-auto font-geist font-medium text-lg">
                Fast, low-fee transfers that work across borders, currencies,
                and life situations. Powered by crypto
              </p>
              <div className="mt-8 md:mt-20 bg-primaryWhite rounded-full h-14 w-full md:w-100 m-auto flex items-center py-6 px-3">
                <div className="flex-1/2">
                  <CustomInputfield
                    placeholder="Enter your email"
                    icon={MdEmail}
                  />
                </div>
                <div className="flex-1/3 h-10">
                  <Button type="secondary">Get started</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <img src={rightherobg} className="w-[260px] object-contain" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-textbg text-primaryBlack-100 py-2 font-geist font-medium text-xl">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-sm font-medium px-4">{text}</span>
          <span className="text-sm font-medium px-4">{text}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
