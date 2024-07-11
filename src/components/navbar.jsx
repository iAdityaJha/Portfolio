import React, { useState } from 'react'
import pic from "../pics/profile-pic.jpg"
import { LuMenu } from "react-icons/lu";
import { MdOutlineRestaurantMenu } from "react-icons/md";
function Navbar() {
    const [menu, setMenu] = useState(true)
    const navItems=[
        {
            id:1,
            text:"Home"
        },{
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"PortFolio"
        },
        {
            id:4,
            text:"Contact"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='  mx-1 hover:cursor-pointer my-2 h-12 w-12 rounded full' alt="" />
                       <div className='my-2'>
                        <h1 className='font-semibold text-xl cursor-pointer'>Adit
                            <span className='text-red-500 text-xl'>ya</span>
                            <p className='text-sm'>Software Developer</p>
                        </h1>
                       </div>
                    </div>
                    {/* desktop navbar */}
                    <div >
                        <ul className='hidden md:flex space-x-8 '>
                           {
                            navItems.map(({id,text})=>(
                                <li className='hover:scale-125 duration-200 cursor-pointer' key={id}>{text}</li>
                            ))
                           }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden '>{menu ? <LuMenu size={24} /> : <MdOutlineRestaurantMenu size={24} />}</div>
                        <div>{ }</div>
                    </div>
                </div>
                {/*  mobile navbar */}
                {!menu && (
                        <div>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl font-bold'>
                            {
                            navItems.map(({id,text})=>(
                                <li className='hover:scale-125 font-semibold duration-200 cursor-pointer' key={id}>{text}</li>
                            ))
                           }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar

// export
