import React , {useState} from 'react'
import { IoClose } from "react-icons/io5";
import { FaHome, FaSearch , FaHeart ,FaCloudUploadAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ThemeButton from '../context/ThemeButton';
// import { Button } from '@mui/material';

const Sidebar = () => {
  const [menuOpen , setMenuOpen] = useState(true)
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
    <div className={` flex flex-col min-h screen ${menuOpen ? 'w-72':'w-16'} duration-500 bg-black dark:bg-white text-white dark:text-black`}>
      <div className='flex py-3 justify-end'>
      <div className='text-2xl font-bold text-purple-800 mx-auto '>
        AllTogether
      </div>
      <div className='text-gray-800'>
      <IoClose size={36} className='bg-white' onClick={()=>{
        console.log('clicked')
        setMenuOpen(!menuOpen)
      }}/>
      </div>
      </div>
      
      <div className='ml-4 flex flex-col gap-4 relative'>
      <ul>        
       <Link to="/">
        <li className={` ${!menuOpen && 'opacity-0 translate-x-28 overflow-hidden' } flex items-center py-2  hover:bg-gray-400`}> 
        <FaHome className="mr-2 " /> 
        DashBoard
      </li>
      </Link>
      <Link to="/search">
      <li className="flex items-center py-2  hover:bg-gray-400"> 
        <FaSearch className="mr-2" /> 
        Search
      </li>
      </Link>
      <Link to="/favourites">
      <li className="flex items-center py-2   hover:bg-gray-400"> 
        <FaHeart className="mr-2" /> 
        Favourites
      </li>
      </Link>

      <hr className="border-gray-300 my-2" />
      <div className=' flex flex-col '>
        
      <button to="/">
      <li className="flex items-center py-2  hover:bg-gray-400"> 
        <FaCloudUploadAlt className="mr-2" /> 
        Upload
      </li>
      </button>
      <ThemeButton className="w-[100%]">
           </ThemeButton>
      <button to="/">
        <li className="flex items-center py-2  hover:bg-gray-400"> 
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
