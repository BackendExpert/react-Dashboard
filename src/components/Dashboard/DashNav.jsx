import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const DashNav = () => {
  return (
    <div className='bg-gray-800 text-white py-5 px-4'>
        <div className="flex justify-between">
            <div className="">
              ABC Campus
            </div>
            <div className="md:block hidden">
              <BsPersonCircle className='text-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default DashNav