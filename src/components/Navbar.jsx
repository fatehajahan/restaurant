import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full p-2 z-30 absolute top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <img src={logo} alt="navLogo" className="w-[120px] sm:w-[100px]" />

        {/* Hamburger Icon (Mobile & Tablet) */}
        <button
          onClick={() => setOpen(true)}
          className="text-3xl lg:hidden"
        >
          <HiMenuAlt3 />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 font-poppins text-[17px] font-semibold">
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Home</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Blog</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Contact Us</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Services</p>
        </div>

        {/* Overlay (Background Blur) */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 lg:hidden"
          ></div>
        )}

        {/* Right Slide Menu */}
        <div
          className={`
            fixed top-0 right-0 h-full w-[75%] sm:w-[50%] bg-white shadow-xl z-50 p-6
            flex flex-col gap-6 font-poppins text-[18px] font-semibold transition-transform duration-500
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close Icon */}
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="text-3xl">
              <HiX />
            </button>
          </div>

          {/* Menu Items */}
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Home</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Blog</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Contact Us</p>
          <p className="hover:text-[#E9BD8C] cursor-pointer duration-500">Services</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
