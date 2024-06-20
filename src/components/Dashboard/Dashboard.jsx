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
      <div className="flex-1 px-2 py-4 bg-gray-200">
        <DashNav />
        <Outlet />
        <DashFooter />
      </div>
    </div>
  )
}

export default Dashboard