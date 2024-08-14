import { useContext, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import themeContext from "./store/theme-context";
const Navbar = () => {
    const {theme , toggleTheme}=useContext(themeContext);
    const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className={`text-2xl ${theme === "light" ? "text-black bg-white" : "text-white bg-[#111827]"} p-4`}>
    <div className="text-lg font-bold text-left h-20 ml-7 pt-5">
        <a href="#" className="text-[28px] ">Book AI</a>
    </div>
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="hidden md:flex space-x-5 text-[18px]">
        <a href="#" className={`block hover:text-[#22d3ee]`}>Features</a>
          <a href="#" className="block  hover:text-[#22d3ee]">How It Workes</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Roadmap</a>
          <a href="#" className="block  hover:text-[#22d3ee]">API</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Price</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Models</a>
        </div>
        <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className={`${theme==='light' ? 'text-black' : 'text-white'} hover:text-[#22d3ee]`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="flex space-x-4 ">
            <button onClick={toggleTheme} className={`${theme=='light'? 'text-black' : 'text-white'} text-[30px]`}>{theme=='light' ?  <BsFillMoonStarsFill /> : <FaSun />}</button>
            <button className="text-white rounded-md bg-[#1E83D5] px-4 py-2 hover:bg-[#22d3ee] text-[20px]">Login / Sign UP </button>
        </div>
      </div>
        {isOpen && (
        <div className={`md:hidden mt-4 space-y-2 text-[18px] ${theme=='light'? 'text-black' : 'text-white'}`}>
          <a href="#" className={`block hover:text-[#22d3ee]`}>Features</a>
          <a href="#" className="block  hover:text-[#22d3ee]">How It Workes</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Roadmap</a>
          <a href="#" className="block  hover:text-[#22d3ee]">API</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Price</a>
          <a href="#" className="block  hover:text-[#22d3ee]">Models</a>
        </div>
      )}

      {/* Mobile Menu */}
      
    </nav>
  );
};

export default Navbar;
