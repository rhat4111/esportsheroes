import React from 'react';

const Title = ({ className, title }) => {
  return <div className={`font-bold text-5xl lg:text-[120px] leading-8 lg:leading-[80px] uppercase ${className}`}>
    <p className='text-transparent text-stroke-2 text-stroke-success opacity-30 pl-8 lg:pl-[86px] mb-5'>
      {title}
    </p>
    <p className='text-light'>{title}</p>
  </div>
}

export default Title;