import React, { memo, useRef } from "react";
import { Element } from "react-scroll";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Title from "components/Title";

import Web3Image1 from "assets/images/web3/1.png";
import Web3Image2 from "assets/images/web3/2.png";
import Web3Image3 from "assets/images/web3/3.png";
import Web3Image4 from "assets/images/web3/4.png";
import Web3Image5 from "assets/images/web3/5.png";
import Web3Image6 from "assets/images/web3/6.png";
import HelperText from "components/HelperText";

export const data = [
  Web3Image1,
  Web3Image2,
  Web3Image3,
  Web3Image4,
  Web3Image5,
  Web3Image6,
];

const Card = memo(({ data, dataIndex, isCenterSlide }) => {
  const image = data[dataIndex];
  return (
    <div>
      <img
        draggable={false}
        className={`w-auto h-[300px] md:h-[450px] select-none ${
          isCenterSlide ? `scale-100` : `scale-80 opacity-40`
        }`}
        src={image}
        alt=":( Not Found"
      />
    </div>
  );
});

const Web3Intro = () => {
  const sliderRef = useRef();

  return (
    <Element name="web3">
      <div className="relative px-6 py-20 xl:pt-0 xl:mb-35">
        <HelperText>Esposrts Heroes -</HelperText>
        <div className="w-full max-w-8xl mx-auto">
          <div className="flex flex-col items-center">
            <Title title="Web3 Intro" className="mb-10 xl:mb-14" />
            <p className="w-full max-w-160 text-xl lg:text-[28px] leading-6 lg:leading-[34px] mb-10 lg:mb-8 text-center lg:text-left">
              As competitive video games continue to integrate into popular
              culture, and consumers are all paying attention to the rise in
              popularity of esports.
            </p>
            <ResponsiveContainer
              carouselRef={sliderRef}
              render={(parentWidth, carouselRef) => {
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={Card}
                    slideWidth={parentWidth > 800 ? 400 : 270}
                    carouselWidth={parentWidth}
                    data={data}
                    fadeDistance={parentWidth > 800 ? 0.5 : 0}
                    currentVisibleSlide={3}
                    maxVisibleSlide={3}
                    useGrabCursor
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Web3Intro;
