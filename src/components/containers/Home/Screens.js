import React, { memo, useRef, useState } from "react";
import { Element } from "react-scroll";
import HelperText from "components/HelperText";
import Pagination from "components/Pagination";
import Title from "components/Title";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import Screen1 from "assets/images/screens/1.png";
import Screen2 from "assets/images/screens/2.png";
import Screen3 from "assets/images/screens/3.png";
import Screen4 from "assets/images/screens/4.png";
import LeftArrow from "assets/images/left.svg";
import RightArrow from "assets/images/right.svg";

export const data = [Screen1, Screen2, Screen3, Screen4];

const Card = memo(({ data, dataIndex, isCenterSlide }) => {
  const image = data[dataIndex];
  return (
    <div>
      <img
        draggable={false}
        className={`w-78 h-[518px] sm:h-[674px] select-none border-2 border-success ${
          isCenterSlide ? `scale-100` : `scale-80 opacity-40`
        }`}
        src={image}
        alt=":( Not Found"
      />
    </div>
  );
});

const Screens = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();
  const handleNext = () => sliderRef.current.goNext();
  const handleBack = () => sliderRef.current.goBack();
  const handleChange = (index) => setSelectedIndex(index);

  return (
    <Element name="screens">
      <div className="relative bg-main py-20 xl:pt-56 px-6 xl:pb-40 xl:mb-14 bg-bottom">
        <HelperText align="right">-Legendary Play-</HelperText>
        <div className="w-full max-w-8xl flex flex-wrap mx-auto">
          <div className="w-full xl:w-1/2 order-2 xl:order-1">
            <div className="relative mb-10">
              <img
                src={LeftArrow}
                onClick={handleBack}
                className="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 z-10 -translate-x-[calc(150px+50%)] sm:-translate-x-[calc(210px+50%)]"
                alt="previous"
              />
              <img
                src={RightArrow}
                onClick={handleNext}
                className="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 z-10 translate-x-[calc(150px-50%)] sm:translate-x-[calc(210px-50%)]"
                alt="next"
              />
              <ResponsiveContainer
                carouselRef={sliderRef}
                render={(parentWidth, carouselRef) => {
                  return (
                    <StackedCarousel
                      ref={carouselRef}
                      slideComponent={Card}
                      slideWidth={parentWidth > 640 ? 312 : 240}
                      carouselWidth={parentWidth}
                      data={data}
                      fadeDistance={0.2}
                      currentVisibleSlide={3}
                      maxVisibleSlide={3}
                      useGrabCursor
                      onActiveSlideChange={handleChange}
                    />
                  );
                }}
              />
            </div>
            <div className="flex justify-center">
              <Pagination active={selectedIndex} length={data.length} />
            </div>
          </div>
          <div className="w-full xl:w-1/2 order-1 xl:order-2 flex flex-col items-center xl:items-start justify-center">
            <Title title="Screens" className="mb-10 lg:mb-15" />
            <p className="text-2xl lg:text-[28px] leading-6 lg:leading-[34px] xl:pl-[86px] mb-16 lg:mb-30 text-center xl:text-left">
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue. Esports has hit this
              stratosphere in large part because of the social component of live
              streaming and gaming.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Screens;
