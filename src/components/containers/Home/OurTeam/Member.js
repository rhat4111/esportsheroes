import React from 'react';

const Member = ({ name, role, about, avatar }) => {
  return <div className='w-full max-w-[280px] flex flex-col items-center text-xl text-light leading-6'>
    <img src={avatar} className="mb-8 xl:mb-14" alt={name} />
    <p className='font-bold uppercase'>{name}</p>
    <p className='text-success uppercase my-1.5'>{role}</p>
    <p className='w-full max-w-57 text-center'>{about}</p>
  </div>
}

export default Member;