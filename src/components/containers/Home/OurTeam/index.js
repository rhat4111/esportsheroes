import React from "react";
import { Element } from "react-scroll";
import Title from "components/Title";
import Member from "./Member";

import Roman from "assets/images/team/roman.png";
import Philipp from "assets/images/team/philipp.png";
import Benjamin from "assets/images/team/benjamin.png";
import Arvid from "assets/images/team/arvid.png";
import HelperText from "components/HelperText";

const OurTeam = () => {
  const members = [
    {
      name: "ROMAN FRANK",
      role: "CEO & co-Founder",
      about: "Entrepreneur Founded two gaming companies",
      avatar: Roman,
    },
    {
      name: "PhilipP Karstaedt",
      role: "COO & co-Founder",
      about: "Previously at GREE, experience in publishing and launching games",
      avatar: Philipp,
    },
    {
      name: "Benjamin Schug",
      role: "CTO",
      about: "10 years with 5 shipped games on different platforms",
      avatar: Benjamin,
    },
    {
      name: "Arvid Hahn",
      role: "GD & co-Founder",
      about: "10 years in free to play and mobile games",
      avatar: Arvid,
    },
  ];

  return (
    <Element name="team">
      <div className="relative px-6 py-20 xl:pt-0 xl:mb-35">
        <HelperText>Esposrts Heroes -</HelperText>
        <div className="w-full flex flex-col items-center xl:items-start max-w-8xl mx-auto">
          <Title title="Our Team" className="mb-10 xl:mb-14" />
          <div className="w-full flex flex-wrap xl:px-20">
            {members.map((member, index) => (
              <div
                className="w-full flex justify-center sm:w-1/2 lg:w-1/4 mb-10 last:mb-0 xl:mb-0"
                key={index}
              >
                <Member {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OurTeam;
