import React from 'react';
import AlarmTextBar from 'components/AlarmTextBar';
import Hero from 'components/containers/Home/Hero';
import GamePlay from 'components/containers/Home/GamePlay';
import OurTeam from 'components/containers/Home/OurTeam';
import Partners from 'components/containers/Home/Partners';
import RoadMap from 'components/containers/Home/RoadMap';
import Screens from 'components/containers/Home/Screens';
import Gear from 'components/containers/Home/Gear';
import Web3Intro from 'components/containers/Home/Web3Intro';

const Home = () => {
  return <div className="pb-12">
    <Hero />
    <AlarmTextBar>
      LIVE YOUR ESPORTS PASSION AND BECOME AN ESPORTS PRO!...
    </AlarmTextBar>
    <Screens />
    <GamePlay />
    <Gear />
    <Web3Intro />
    <RoadMap />
    <div className='xl:-mt-15'>
      <OurTeam />
    </div>
    <Partners />
  </div>
}

export default Home;