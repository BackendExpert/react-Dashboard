import React from 'react'
import { BsChevronCompactDown, BsChevronDown, BsPersonCircle } from 'react-icons/bs'

const DashNav = () => {
  return (
    <div className='bg-gray-800 text-white py-5 px-4'>
        <div className="flex justify-between">
            <div className="">
              ABC Campus
            </div>
            <div className="md:block hidden">
              <div className="flex">
                <BsPersonCircle className='text-2xl'/> 
                <p className="pl-2">JehanKandy</p>
                <p className="">

                  <BsChevronDown className='pl-2 text-xl font-bold'/>
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashNav