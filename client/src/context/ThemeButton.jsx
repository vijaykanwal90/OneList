import React from 'react'
import useTheme from './theme';
import { useEffect, useState } from 'react'
import {MdLightMode} from "react-icons/md"
const ThemeButton = ({menuOpen}) => {
  const {themeMode, darkTheme, lightTheme} = useTheme()
  const [theme , setTheme] = useState('light');


const handleClick  = ()=>{
    if(theme=='light'){
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
    if(theme=='dark'){
      lightTheme()
    }
    else {
       darkTheme()
    }
}


  return (
    <div>
      <button className='w-[100%]' onClick={handleClick}>
      <li className="flex items-center py-2 hover:bg-gray-400"> 
        <MdLightMode className="w-6 h-6 rounded-md" /> 
        <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Mode</span>
      </li> 
      </button>
    </div>
  )
}

export default ThemeButton
