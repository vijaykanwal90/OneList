import { useEffect, useState } from 'react'
import { ThemeContext } from './context/theme';
import './App.css';
import useTheme from './context/theme';
import ThemeButton from './context/ThemeButton';

import { ThemeProvider } from './context/theme';
import Sidebar from './components/Sidebar';
function App() {
  const [themeMode, setThemeMode] = useState('light')
  

  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
  
    setThemeMode('light')
  }
  useEffect (() =>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (

  <ThemeProvider value={
    {themeMode, darkTheme, lightTheme}
   
  } >
    <div className='flex flex-row justify-between bg-white dark:bg-black text-black dark:text-white h-[100vh] w-[100vw]'>
  <Sidebar className=" "/>
   <div>
    PodStream
   </div>
   </div>
  <ThemeButton />
</ThemeProvider>
  )
}

export default App
