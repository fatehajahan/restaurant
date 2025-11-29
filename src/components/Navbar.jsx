import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-2 z-50 absolute top-0 left-0">
      <nav
        className="container mx-auto flex justify-between items-center px-4"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a href="/" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Cafe Delights official logo"
            className="w-[50px] sm:w-[90px]"
          />
        </a>

        {/* Hamburger Icon (Mobile & Tablet) */}
        <button
          onClick={() => setOpen(true)}
          className="text-3xl lg:hidden"
          aria-label="Open mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <HiMenuAlt3 className="text-white" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 font-poppins text-[17px] font-semibold text-white">
          <Link to="/" className="hover:text-[#E9BD8C] duration-500">Home</Link>
          <a href="/blog" className="hover:text-[#E9BD8C] duration-500">Blog</a>
          <a href="/contact" className="hover:text-[#E9BD8C] duration-500">Contact Us</a>
          <a href="/services" className="hover:text-[#E9BD8C] duration-500">Services</a>
        </div>

        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 lg:hidden"
          ></div>
        )}

        {/* Right Slide Menu */}
        <div
          id="mobile-menu"
          className={`
            fixed top-0 right-0 h-full w-[75%] sm:w-[50%] bg-white shadow-xl z-50 p-6
            flex flex-col gap-6 font-poppins text-[18px] font-semibold
            transition-transform duration-500
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
          role="menu"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-3xl"
              aria-label="Close mobile menu"
            >
              <HiX />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <a href="/" className="hover:text-[#E9BD8C] duration-500">Home</a>
          <a href="/blog" className="hover:text-[#E9BD8C] duration-500">Blog</a>
          <a href="/contact" className="hover:text-[#E9BD8C] duration-500">Contact Us</a>
          <a href="/services" className="hover:text-[#E9BD8C] duration-500">Services</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
