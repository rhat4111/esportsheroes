import React, { memo, useRef, useState } from "react";
import { Element } from "react-scroll";
import Pagination from "components/Pagination";
import Title from "components/Title";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import Gear1 from "assets/images/gear/1.png";
import Gear2 from "assets/images/gear/2.png";
import Gear3 from "assets/images/gear/3.png";
import HelperText from "components/HelperText";

export const data = [Gear1, Gear2, Gear3];

const Card = memo(({ data, dataIndex, isCenterSlide }) => {
  const image = data[dataIndex];
  return (
    <div>
      <img
        draggable={false}
        className={`w-[700px] h-[240px] md:h-[538px] select-none ${
          isCenterSlide ? `scale-100` : `scale-80 opacity-40`
        }`}
        src={image}
        alt="items"
      />
    </div>
  );
});

const Gear = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef();
  const handleChange = (index) => setSelectedIndex(index);

  return (
    <Element name="gear">
      <div className="relative bg-main bg-[length:100%_100%] pt-20 px-6 pb-20 xl:pb-40 xl:mb-14 bg-top">
        <HelperText align="right">-Legendary Play-</HelperText>
        <div className="w-full max-w-8xl mx-auto flex flex-col items-center">
          <Title title="This is you" className="mb-10 xl:mb-16" />
          <p className="w-full max-w-[640px] text-xl lg:text-[28px] leading-6 lg:leading-[34px] text-center lg:text-start mb-12">
            The pop-culturization of the esports industry has helped power the
            explosions in esports investment and revenue. Esports has hit this
            stratosphere in large part because of the social component of live
            streaming and gaming.
          </p>
          <ResponsiveContainer
            carouselRef={sliderRef}
            render={(parentWidth, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={parentWidth > 700 ? 700 : 300}
                  carouselWidth={parentWidth}
                  data={data}
                  fadeDistance={0.2}
                  currentVisibleSlide={1}
                  maxVisibleSlide={1}
                  useGrabCursor
                  onActiveSlideChange={handleChange}
                />
              );
            }}
          />
          <Pagination active={selectedIndex} length={data.length} />
        </div>
      </div>
    </Element>
  );
};

export default Gear;
