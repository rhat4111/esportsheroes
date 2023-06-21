import React from 'react';

const AlarmTextBar = ({ children }) => {
  return <div className="flex items-center w-full h-10 xl:h-19 bg-alarm font-bold text-2xl xl:text-[32px] text-alarm uppercase overflow-hidden">
    <p className='whitespace-nowrap will-change-transform animate-alarm'>
      {Array.from(Array(4)).map((item, index) => <span key={index}>{children}&nbsp;</span>)}
    </p>
    <p className='whitespace-nowrap will-change-transform animate-alarm'>
      {Array.from(Array(4)).map((item, index) => <span key={index}>{children}&nbsp;</span>)}
    </p>
  </div>
}

export default AlarmTextBar;