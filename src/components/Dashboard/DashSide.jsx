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
        </div>
    </div>
  )
}

export default DashSide