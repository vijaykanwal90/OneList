import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaHome, FaSearch , FaHeart ,FaCloudUploadAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className=''>
      <div className='flex flex-row mt-6 item-center'>
      <div className='text-2xl font-bold text-purple-800 mx-auto '>
        AllTogether
      </div>
      <div className='text-gray-800'>
      <IoClose size={30}/>
      </div>
      </div>
      
      <div>
      <ul>
       
        <li><FaHome/>DashBoard</li>
        
        <li > <FaSearch />Search</li>
    
        <li><FaHeart /> Favourites</li>
        
        <li><FaCloudUploadAlt />Upload</li>
    
        <li> <MdLightMode />LightMode</li>
       
        <li> <IoLogOutOutline />Logout</li>
        
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
