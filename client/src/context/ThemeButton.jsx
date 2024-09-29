import React from 'react'
import useTheme from './theme';
import { useEffect, useState } from 'react'

const ThemeButton = () => {
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
      <button className='bg-green-300 dark:bg-black dark:text-white' onClick={handleClick}>Theme</button>
    </div>
  )
}

export default ThemeButton
