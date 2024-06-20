import React from 'react'

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