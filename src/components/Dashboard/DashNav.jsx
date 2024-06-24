import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp, BsPersonCircle } from 'react-icons/bs'

const DashNav = () => {
    const [UserDropDown, SetUserDropDown] = useState(false)
    const toggleDropDown = () => {
      SetUserDropDown(!UserDropDown)
    }

  return (
    <div className='bg-gray-800 text-white py-5 px-4'>
        <div className="flex justify-between">
            <div className="">
              ABC Campus
            </div>
            <div className="md:block hidden">
              <div className="flex cursor-pointer" onClick={toggleDropDown}>
                <BsPersonCircle className='text-2xl'/> 
                <p className="pl-2">JehanKandy</p>
                <p className="">
                  {
                    !UserDropDown ? <BsChevronDown className='pl-2 text-xl font-bold'/> : <BsChevronUp className='pl-2 text-xl font-bold'/>
                  }
                </p>
              </div>
              <div className="">

              </div>
            </div>
        </div>
    </div>
  )
}

export default DashNav