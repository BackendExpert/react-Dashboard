import React from 'react'
import { BsCarFront } from 'react-icons/bs'

const DashHome = () => {
    
const dashMenu = [
    {name: "cars", icons: <BsCarFront />, value: 50, style: "green-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, style: "red-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, style: "purple-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, style: "yellow-500"},
    {name: "cars", icons: <BsCarFront />, value: 50, style: "blue-500"},    
]
  return (
    <div>
        <div className="">
            <div className="md:grid grid-cols-4 gap-4">
                {
                    dashMenu.map((dash) => {
                        return (
                            <div className="bg-neutral-900 text-white px-4 py-8 rounded">
                                <div className="flex justify-between">
                                    <div className="">
                                        <h1 className="text-3xl font-semibold">{dash.value}</h1>
                                        <p className="">{dash.name}</p> 
                                    </div>
                                    <div className="">
                                        <div className={`bg-${dash.style} rounded-xl p-2`}>
                                            <p className="text-3xl">{dash.icons}</p>
                                        </div>
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