import React from 'react';
import { Outlet } from 'react-router-dom';
import AlarmTextBar from 'components/AlarmTextBar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return <div className="min-h-screen bg-dark font-oxanium text-secondary">
    <Header />
    <div className='pt-20 xl:pt-25'>
      <AlarmTextBar>
        LIVE YOUR ESPORTS PASSION AND BECOME AN ESPORTS PRO!
      </AlarmTextBar>
      <Outlet />
      <AlarmTextBar>
        LIVE YOUR ESPORTS PASSION AND BECOME AN ESPORTS PRO!
      </AlarmTextBar>
      <Footer />
    </div>
  </div>
}

export default Layout;