import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { IoClose, IoLogOutOutline } from 'react-icons/io5';
import { FaHome, FaSearch, FaHeart, FaCloudUploadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeButton from './context/ThemeButton';
import { FaRegUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
// import {Upload} from './pages/Upload';
// import {Logout} from './pages/Logout';
import PodcastDetails from './pages/PodcastDetails';
import DisplayPodcast from './pages/DisplayPodcast';
function App() {
  const [themeMode, setThemeMode] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
        <BrowserRouter>
          {/* Sidebar */}
          <div className={`h-full flex-shrink-0 ${menuOpen ? 'w-72' : 'w-16'} md:w-72 transition-all duration-300`}>
            <button
              className="md:hidden text-white p-4 fixed top-4 left-4 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* {menuOpen ? <IoClose size={30} /> : <CiMenuFries size={30} />} */}
            </button>

            <div className="h-full flex flex-col border-r shadow-sm bg-black dark:bg-white text-white dark:text-black">
              <div className="p-4 pb-2 flex justify-between items-center">
                <div className={`text-2xl font-bold text-purple-800 mx-auto ${!menuOpen && 'hidden md:block'}`}>
                  AllTogether
                </div>
                <div className={`text-gray-800 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
                  {/* <IoClose size={36} className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} /> */}
                </div>
              </div>

              <div className="ml-4 mt-8 flex flex-col gap-4 relative">
                <ul className="p-0">
                  <Link to="/">
                    <li className="flex items-center py-2 hover:bg-gray-400 cursor-pointer">
                      <FaHome size={24} className="mr-2" />
                      <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Dashboard</span>
                    </li>
                  </Link>
                  <Link to="/search">
                    <li className="flex items-center py-2 hover:bg-gray-400 cursor-pointer">
                      <FaSearch size={24} className="mr-2" />
                      <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Search</span>
                    </li>
                  </Link>
                  <Link to="/favourites">
                    <li className="flex items-center py-2 hover:bg-gray-400 cursor-pointer">
                      <FaHeart size={24} className="mr-2" />
                      <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Favourites</span>
                    </li>
                  </Link>
                  <hr className="border-gray-300 my-2" />
                  <div className="flex flex-col">
                    <li className="flex items-center py-2 hover:bg-gray-400 cursor-pointer">
                      <FaCloudUploadAlt size={24} className="mr-2" />
                      <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Upload</span>
                    </li>
                    <ThemeButton className="w-full" menuOpen={menuOpen} />
                    <li className="flex items-center py-2 hover:bg-gray-400 cursor-pointer">
                      <IoLogOutOutline size={24} className="mr-2" />
                      <span className={`${menuOpen ? 'block' : 'hidden'} md:block`}>Logout</span>
                    </li>
                  </div>
                </ul>
              </div>

              {/* Login Button at the end of the sidebar */}
              <div className="mt-auto p-4">
                
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-grow flex flex-col">
            <Navbar setSidebarOpen={setMenuOpen} />
            {/* <div className="flex-grow overflow-y-auto p-4">
              <h1 className="text-3xl font-bold text-black dark:text-white">Hello world</h1>
              <p>This is the main content area.</p>
              <div className="mt-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur enim ac elit tincidunt, a congue lectus elementum. Sed auctor eros nec velit gravida euismod. Aenean interdum sollicitudin nisl, nec tempor quam tincidunt a. Cras vehicula nisi ut justo ultricies, et fermentum neque egestas. Quisque bibendum ante vitae mi ullamcorper, ut scelerisque risus gravida.</p>
              </div> */}
            {/* </div> */}
            <Routes>
              <Route path="/" exact element={<Dashboard/>}/>
              <Route path="/search" exact element={<Search/>}/>
              <Route path="/profile" exact element={<Profile/>}/>
              <Route path="/favourites" exact element={<Favourites/>}/>
              <Route path="/podcast/:id" exact element={<PodcastDetails/>}/>
              <Route path="/showpodcasts/:type" exact element={<DisplayPodcast/>}/>

              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
