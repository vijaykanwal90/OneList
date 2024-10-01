import { useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { CiMenuFries } from "react-icons/ci";

const Navbar = ({ setSidebarOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-14 ml-[-1] flex flex-row justify-between items-center bg-black text-white dark:bg-white dark:text-black'>
      {/* Icon Button */}
      <button
        className="md:hidden  text-white fixed top-4 left-4 z-50"
        onClick={() => { 
          setMenuOpen(!menuOpen); 
          setSidebarOpen(!menuOpen); 
        }}
      >
        {menuOpen ? <IoClose size={30} /> : <CiMenuFries size={30} />}
      </button>

      {/* Login Button at the end */}
      <button className='flex flex-row items-center h-10 w-auto px-3 bg-gray-500 text-white cursor-pointer rounded transition duration-300 ease-in-out hover:bg-gray-600 ml-auto mr-4'>
        <FaRegUser size={20} className="mr-1" />
        <span>Login</span>
      </button>
    </div>
  );
};

export default Navbar;
