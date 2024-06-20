import React from 'react'
import DashSide from './DashSide'
import DashFooter from './DashFooter'
import DashNav from './DashNav'
import { Outlet } from 'react-router'
import DashSideImag from '../../assets/DashSide.jpg'

const Dashboard = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(to right, #18181b, rgba(0,0,0,0.2)), url(${DashSideImag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
  return (
    <div className="flex">
      <DashSide />
      {/* <DashSideTest /> */}
      <div className="flex-1 bg-[#323132] " style={divStyle}>
        <DashNav />
        <div className="py-4 px-4">
            <Outlet />
        </div>
        <DashFooter />
      </div>
    </div>
  )
}

export default Dashboard