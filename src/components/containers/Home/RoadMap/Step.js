import React from 'react';

const Step = ({ title, todo, active = false, isOdd }) => {
  return <div className={`w-full flex ${!isOdd ? `flex-col` : `flex-col-reverse`} relative ${active ? `text-success` : `text-light`}`}>
    <div className={`h-49 flex ${!isOdd ? `flex-col` : `flex-col-reverse`} justify-end`}>
      <p className={`font-bold text-[38px] whitespace-nowrap leading-[44px] ${!isOdd ? `mb-5` : `mt-5`}`}>{title}</p>
      <ul className={`flex leading-5 ${active ? `text-xl` : `text-lg`} ${!isOdd ? `flex-col mb-16` : `flex-col-reverse mt-16`}`}>
        {
          todo.map((item, index) => <li key={index} className={`flex items-center relative ${!isOdd ? `mb-3` : `mt-3`}`}>
            <span className={`inline-flex w-2.5 h-2.5 ${active ? `bg-success` : `bg-light`} rotate-45`}></span>
            <span className='ml-3 whitespace-nowrap'>{item}</span>
            <span className={`w-0.5 h-15 ${active ? `bg-success` : `bg-light`} absolute ${!isOdd ? `top-3` : `-top-12`} left-1`}></span>
          </li>)
        }
      </ul>
      <span className={`${!isOdd ? `translate-y-[1px]` : `translate-y-[-1px]`} w-full h-0.5 flex-shrink-0 bg-dot`}></span>
      <div className='relative'>
        <div className='absolute top-0 left-[5px] -translate-x-1/2 -translate-y-1/2'>
          <div className={`w-11 h-11 ${active ? `bg-success` : `bg-light`} flex items-center justify-center rotate-45`}>
            <div className='w-9 h-9 border-2 border-darkgreen flex items-center justify-center'>
              <div className='w-[18px] h-[18px] bg-darkgreen'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='h-49'></div>
  </div>
}

export default Step;