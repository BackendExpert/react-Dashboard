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
        {id: 1, name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},    
        {id: 2, name: "Leaves", link: "Leaves", icons: <BsBoxArrowDownRight />},  
        {id: 3, name: "Reservation", link: "Reservation", icons: <BsTicketDetailedFill />},  
        {id: 4, name: "SRNs", link: "SRNs", icons: <BsFileTextFill />},  
        {id: 5, name: "Work Requests", link: "WorkRequests", icons: <BsHouseGearFill />},  
        {id: 7, name: "GatePass", link: "GatePass", icons: <BsPassFill />},  
        {id: 8, name: "Increment", link: "Increment", icons: <BsCashStack />},  
        {id: 9, name: "Vehicle", link: "Vehicle", icons: <BsCarFrontFill />},  
        {id: 10, name: "SiteAdmin", link: "SiteAdmins", icons: <BsPersonFillLock />},  
        {id: 11, name: "Employee", link: "Employee", icons: <BsPeopleFill />},          
    ]

  return (
    <div className="">
        <button className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
            {
                !isOpen ? <BsList /> : <BsX />
            }
        </button>
        <div style={divStyle} className={`w-full md:w-auto md:min-h-screen md:pr-16 md:relative fixed overflow-auto top-0 left-0 h-full px-4 bg-gray-800 text-white w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
           <div className="py-4">
                <h1 className="">J. Weerasuriya</h1>
           </div>

           <div className="my-4">
                {
                    SideLink.map((side) => {
                        return (
                            <div className="my-2 py-2 w-full cursor-pointer duration-500 hover:bg-gray-800 px-4">
                                <h1 className="">{side.name}</h1>
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