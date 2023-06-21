import React from "react";
import { Element } from "react-scroll";
import Title from "components/Title";
import Step from "./Step";
import HelperText from "components/HelperText";

const RoadMap = () => {
  const roadmap = [
    { title: "Q4 2022", todo: ["Strategic Raise"] },
    { title: "Q1 2023", todo: ["NFT Drop"] },
    { title: "Q2 2023", todo: ["Private token sale"] },
    { title: "Q3 2023", todo: ["Early Access", "Public Token Sale"] },
    { title: "Q4 2023", todo: ["Game updates", "Testing"] },
    { title: "Phase 06", todo: ["Full Global Game Release"] },
  ];

  return (
    <Element name="roadmap">
      <div className="relative px-6 py-20 xl:pt-16 xl:pb-67 bg-main bg-[length:100%_100%]">
        <HelperText align="right">-Legendary Play-</HelperText>
        <div className="w-full flex flex-col items-center xl:items-start max-w-8xl mx-auto">
          <Title title="Roadmap" className="mb-10 xl:mb-40" />
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <div className="w-full min-w-5xl flex px-10 xl:px-20">
              {roadmap.map((item, index) => (
                <Step
                  key={index}
                  {...item}
                  active={index === 0}
                  isOdd={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default RoadMap;
