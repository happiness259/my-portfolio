import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons (install lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 text-center">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
