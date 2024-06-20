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
      <div className="flex-1 bg-[#242423]">
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