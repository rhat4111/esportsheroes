import React from "react";
import { Element } from "react-scroll";
import Title from "components/Title";
import Partner from "assets/images/esl.png";
import HelperText from "components/HelperText";

const Partners = () => {
  return (
    <Element name="partners">
      <div className="px-6 py-20 xl:pt-0 xl:pb-45 relative">
        <HelperText align="right">-Legendary Play-</HelperText>
        <div className="w-full flex flex-col items-center xl:items-start max-w-8xl mx-auto">
          <Title className="mb-24 xl:mb-[220px]" title="Partners" />
          <div className="w-auto xl:w-full flex -m-2 md:-m-5 xl:m-0">
            <div className="w-1/3 p-2 md:p-5 xl:px-0">
              <img src={Partner} alt="partner logo" />
            </div>
            <div className="w-1/3 p-2 md:p-5 xl:px-0">
              <img src={Partner} alt="partner logo" />
            </div>
            <div className="w-1/3 p-2 md:p-5 xl:px-0">
              <img src={Partner} alt="partner logo" />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Partners;
