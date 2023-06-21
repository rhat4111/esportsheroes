import React from 'react';

import { ReactComponent as Twitter } from 'assets/images/social/twitter.svg';
import { ReactComponent as Facebook } from 'assets/images/social/facebook.svg';
import { ReactComponent as Youtube } from 'assets/images/social/youtube.svg';
import { ReactComponent as Zoomietube } from 'assets/images/social/zoomietube.svg';
import { ReactComponent as Discord } from 'assets/images/social/discord.svg';

const Footer = () => {
  return <div className='flex flex-col items-center font-roboto bg-success p-11 pb-9 text-black'>
    <ul className='flex mb-1.5'>
      <li className='w-15 h-15 flex items-center justify-center mx-0 md:mx-2.5'>
        <Twitter />
      </li>
      <li className='w-15 h-15 flex items-center justify-center mx-0 md:mx-2.5'>
        <Facebook />
      </li>
      <li className='w-15 h-15 flex items-center justify-center mx-0 md:mx-2.5'>
        <Youtube />
      </li>
      <li className='w-15 h-15 flex items-center justify-center mx-0 md:mx-2.5'>
        <Zoomietube />
      </li>
      <li className='w-15 h-15 flex items-center justify-center mx-0 md:mx-2.5'>
        <Discord />
      </li>
    </ul>
    <p className='text-sm mb-5 md:mb-0'>Esport Heroes 2022- ALL rights reserved</p>
    <ul className='flex flex-col md:flex-row items-center text-sm'>
      <li className='mx-1.5'>Privacy Policy</li>
      <li className='mx-1.5'>Cookies</li>
      <li className='mx-1.5'>Terms & Conditions</li>
      <li className='mx-1.5'>Contact Us</li>
    </ul>
  </div>
}

export default Footer;