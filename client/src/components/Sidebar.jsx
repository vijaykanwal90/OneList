import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaHome, FaSearch , FaHeart ,FaCloudUploadAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ThemeButton from '../context/ThemeButton';
// import { Button } from '@mui/material';

const Sidebar = () => {
//   const menuItems = [
//     {
//     link:"/",
//     name:"Dashboard",
//     icon:<FaHome />
//   },
//   {
//     link:"/search",
//     name:"Search",
//     icon:<FaSearch/>
//   },
//   {
//     link:"/favourites",
//     name:"Favourites",
//     icon: <FaHeart />
//   },
 
// ]
// const button = [
//   {
//     fun :()=>{},
//     name:"Upload",
//     icon: <FaCloudUploadAlt />
//   },
//   {
//     fun :()=>{},
//     name:"LightMode",
//     icon:<MdLightMode/>
//   },
//   {
//     link:"/",
//     name:"Logout",
//     icon:<IoLogOutOutline/>
//   },
// ]
  return (
    <div className='ml-4 flex flex-col '>
      <div className='flex flex-row mt-6 item-center w-[30%]'>
      <div className='text-2xl font-bold text-purple-800 mx-auto '>
        AllTogether
      </div>
      <div className='text-gray-800 block lg:hidden'>
      <IoClose size={30} className=''/>
      </div>
      </div>
      
      <div className=''>
      <ul>
       
        
        
       <Link to="/">
        <li className="flex items-center py-2 pl-2 hover:bg-gray-400"> 
        <FaHome className="mr-2 " /> 
        DashBoard
      </li>
      </Link>
      <Link to="/search">
      <li className="flex items-center py-2 pl-2 hover:bg-gray-400"> 
        <FaSearch className="mr-2" /> 
        Search
      </li>
      </Link>
      <Link to="/favourites">
      <li className="flex items-center py-2  pl-2 hover:bg-gray-400"> 
        <FaHeart className="mr-2" /> 
        Favourites
      </li>
      </Link>

      <hr className="border-gray-300 my-2" />
      <div className=' flex flex-col '>
        
      <button to="/">
      <li className="flex items-center py-2 pl-2 hover:bg-gray-400"> 
        <FaCloudUploadAlt className="mr-2" /> 
        Upload
      </li>
      </button>
      <ThemeButton className="w-[100%]">
           </ThemeButton>
      <button to="/">
        <li className="flex items-center py-2 pl-2 hover:bg-gray-400"> 
        <IoLogOutOutline className="mr-2" /> 
        Logout
      </li>      </button>
      </div>
        
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
