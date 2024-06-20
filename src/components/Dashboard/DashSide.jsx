import React, { useState } from 'react'
import DashSideImag from '../../assets/DashSide.jpg'

const DashSide = () => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="">
        <div style={{ backgroundImage: '../../assets/DashSide.jpg'  }} className={`bg-[url(../../assets/DashSide.jpg)] lg:min-h-screen lg:pr-16 md:relative fixed overflow-auto top-0 left-0 h-full px-4 bg-gray-800 text-white w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
           <div className="">

           </div>
        </div>
    </div>
  )
}

export default DashSide