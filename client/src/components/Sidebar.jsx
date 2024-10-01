import React, { useState } from 'react';
import { IoClose, IoLogOutOutline } from 'react-icons/io5';
import { FaHome, FaSearch, FaHeart, FaCloudUploadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeButton from '../context/ThemeButton';
import { CiMenuFries } from "react-icons/ci";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Initially closed on small screens

  return (
    <div >
      {/* Toggle button for small screens */}

    </div>
  );
};

export default Sidebar;
