import React from 'react'
import DashSide from './DashSide'
import DashFooter from './DashFooter'
import DashNav from './DashNav'
import { Outlet } from 'react-router'


const Dashboard = () => {
  return (
    <div className="flex">
      <DashSide />
      {/* <DashSideTest /> */}
      <div className="flex-1 bg-[#323132]">
        <DashNav />
        <div className="">
            <Outlet />
        </div>
        <DashFooter />
      </div>
    </div>
  )
}

export default Dashboard