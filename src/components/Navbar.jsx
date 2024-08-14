// import  { useState } from 'react';
import { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import themeContext from "./store/theme-context";
const Navbar = () => {
    const {theme , toggleTheme}=useContext(themeContext);

  return (
    <nav className={`text-2xl ${theme === "light" ? "text-black bg-white" : "text-white bg-[#111827]"} p-4`}>
    <div className="text-lg font-bold text-left h-20 ml-3">
        <a href="#" className="text-[28px]">Book AI</a>
    </div>
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="hidden md:flex space-x-4">
          <a href="#" className=" hover:text-[#22d3ee] text-[20px]">Home</a>
          <a href="#" className=" hover:text-[#22d3ee] text-[20px]">About</a>
          <a href="#" className=" hover:text-[#22d3ee] text-[20px]">Services</a>
          <a href="#" className=" hover:text-[#22d3ee] text-[20px]">Contact</a>
        </div>
        <div className="flex space-x-4 ">
            <button onClick={toggleTheme} className={`${theme=='light'? 'text-black' : 'text-white'} text-[30px]`}>{theme=='light' ?  <GoMoon /> : <FaSun />}</button>
            <button className="text-white rounded-md bg-[#1E83D5] px-4 py-2 hover:bg-[#22d3ee] text-[20px]">Login / Sign UP </button>
        </div>
        <div className="md:hidden">
          
        </div>
      </div>

      {/* Mobile Menu */}
      
    </nav>
  );
};

export default Navbar;
