import React from "react";
import { Element } from "react-scroll";
import HelperText from "components/HelperText";
import Title from "components/Title";
import Video from "assets/videos/gameplay.mp4";

const GamePlay = () => {
  return (
    <Element name="gameplay">
      <div className="px-6 py-20 xl:pt-17 xl:pb-33 relative">
        <HelperText>Esposrts Heroes -</HelperText>
        <div className="flex flex-wrap w-full max-w-8xl mx-auto">
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start xl:pt-17 mb-16 xl:mb-0">
            <Title title="Gameplay" className="mb-10 xl:mb-14" />
            <p className="text-xl lg:text-[28px] leading-6 lg:leading-[34px] xl:pl-[86px] text-center lg:text-start">
              The pop-culturization of the esports industry has helped power the
              explosions in esports investment and revenue. Esports has hit this
              stratosphere in large part because of the social component of live
              streaming and gaming.
            </p>
          </div>
          <div className="flex justify-center w-full xl:w-1/2">
            <video
              autoPlay
              muted
              width={310}
              loop={true}
              className="border-2 border-success"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default GamePlay;
