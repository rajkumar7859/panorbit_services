import React from 'react'
import Navbar from '../Components/Navbar'
import SideNavbar from '../Components/SiderNavbar'

const ToDo = () => {
  return (
    <div className='border-2 border-red-500'>
    <div className=' flex '>
      <div className=' w-[24%]'>
      <SideNavbar />
      </div>
    <div className='py-12 px-8 w-[76%]'>
        <Navbar/>
        <hr/>
      <div className='mt-4 p-8'>
        <div className='text-center font-bold text-gray-400 text-[3rem] p-40'>
        Comming Soon
      </div>
    </div>
    </div>
    </div>
      </div>
  )
}

export default ToDo
