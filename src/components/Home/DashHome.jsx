import React from 'react'
import { BsCarFront } from 'react-icons/bs'

const DashHome = () => {
    
const dashMenu = [
    {name: "cars", icons: <BsCarFront />, value: 50, borderStyle: 'border-green-500', style: "green-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, borderStyle: 'border-red-500', style: "red-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, borderStyle: 'border-purple-500', style: "purple-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, borderStyle: 'border-yellow-500', style: "yellow-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, borderStyle: 'border-blue-500', style: "blue-500"},    
]
  return (
    <div>
        <div className="">
            <h1 className="text-xl font-semibold pb-4 text-gray-500">Dashboard</h1>
            <div className="md:grid grid-cols-4 gap-4">
                {
                    dashMenu.map((dash) => {
                        return (
                            <div className={`md:my-0 my-2 bg-gray-200 text-white px-4 py-8 rounded border-l-4 drop-shadow-md  shadow-red ${dash.borderStyle}`}>
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-3xl font-semibold">{dash.value}</h1>
                                        <p className={`text-${dash.style}`}>{dash.name}</p> 
                                    </div>
                                    <div className="">
                                        <p className={`text-4xl text-${dash.style} pt-2`}>{dash.icons}</p>
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

export default DashHome