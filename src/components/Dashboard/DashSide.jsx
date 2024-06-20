import React, { useState } from 'react'
import DashSideImag from '../../assets/DashSide.jpg'
import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard, BsList, BsX, BsCalendarEvent, BsBell, BsFilesAlt, BsFileText, BsCashCoin, BsMortarboardFill, BsCaretDownFill, BsBoxArrowDownRight, BsTicketDetailedFill, BsFileTextFill, BsHouseGearFill, BsPassFill, BsCashStack, BsCarFrontFill, BsPersonArmsUp, BsPersonFillLock, BsBuildingFill, BsPeopleFill } from "react-icons/bs";


const DashSide = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const divStyle = {
        backgroundImage: `linear-gradient(to right, #18181b, rgba(0,0,0,0.2)), url(${DashSideImag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const SideLink = [
        {style: 'orange-500', id: 1, name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},    
        {style: 'yellow-500', id: 2, name: "Leaves", link: "Leaves", icons: <BsBoxArrowDownRight />},  
        {style: 'green-500', id: 3, name: "Reservation", link: "Reservation", icons: <BsTicketDetailedFill />},  
        {style: 'purple-500', id: 4, name: "SRNs", link: "SRNs", icons: <BsFileTextFill />},  
        {style: 'pink-500', id: 5, name: "Work Requests", link: "WorkRequests", icons: <BsHouseGearFill />},  
        {style: 'red-500', id: 7, name: "GatePass", link: "GatePass", icons: <BsPassFill />},  
        {style: 'blue-500', id: 8, name: "Increment", link: "Increment", icons: <BsCashStack />},  
        {style: 'green-500', id: 9, name: "Vehicle", link: "Vehicle", icons: <BsCarFrontFill />},  
        {style: 'yellow-500', id: 10, name: "SiteAdmin", link: "SiteAdmins", icons: <BsPersonFillLock />},  
        {style: 'purple-600', id: 11, name: "Employee", link: "Employee", icons: <BsPeopleFill />},          
    ]

  return (
    <div className="">
        <button className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
            {
                !isOpen ? <BsList /> : <BsX />
            }
        </button>
        <div style={divStyle} className={`w-full md:w-auto md:min-h-screen  md:relative fixed overflow-auto top-0 left-0 h-full  bg-gray-800 text-white w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
           <div className="py-4 px-8">
                <h1 className="uppercase text-xl font-semibold">jehan</h1>
           </div>
           <hr className='border border-gray-500'/>
           <div className="my-4 pr-16 px-4">
                {
                    SideLink.map((side) => {
                        return (
                            <div className="">
                                <div className={`w-full my-2 py-3 px-2 rounded cursor-pointer duration-500 hover:backdrop-blur-sm hover:bg-white/10`}>
                                    <div className="flex">
                                        <p className={`text-2xl text-${side.style} `}>{side.icons}</p>
                                        <p className="pl-2">{side.name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
           </div>
        </div>
    </div>
  )
}

export default DashSide