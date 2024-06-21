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
      <div className="flex-1 bg-white">
        <DashNav />
        <div className="py-4 px-4">
            <div className="circlePosition w-[220px] h-[200px] bg-purple-500 rounded-full absolute z-1 top-[25%] left-[25%] translate-x-[-50%] translate-y-[-50%] blur-[130px]">
            </div>
            <div className="circlePosition w-[220px] h-[200px] bg-pink-500 rounded-full absolute z-1 top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[130px]">
            </div>
            <div className="circlePosition w-[220px] h-[200px] bg-green-500 rounded-full absolute z-1 top-[75%] left-[25%] translate-x-[-50%] translate-y-[-50%] blur-[130px]">
            </div>
            <div className="circlePosition w-[220px] h-[200px] bg-yellow-500 rounded-full absolute z-1 top-[65%] left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[130px]">
            </div>
            <div className="circlePosition w-[220px] h-[200px] bg-blue-500 rounded-full absolute z-1 top-[45%] left-[85%] translate-x-[-50%] translate-y-[-50%] blur-[130px]">
            </div>
            <Outlet />
        </div>
        <DashFooter />
      </div>
    </div>
  )
}

export default Dashboard