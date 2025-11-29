import React, { useState } from 'react'
import { GlobalLogo } from '../../assets'
import Button from '../ui/Button'
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {

  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <div className="w-full relative">

      {/* MAIN HEADER */}
      <div className="w-full p-3 px-4 flex justify-between items-center bg-secondary border-[1.5px] rounded-full border-secondary">

        {/* Logo */}
        <div className="w-40">
          <img src={GlobalLogo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <li
              key={index}
              className="text-black font-medium hover:underline underline-offset-8 decoration-2 decoration-primary cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button name="Contact Us" to="#" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden bg-white rounded-2xl mt-2 p-5 shadow-lg border
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col gap-5">
          {menu.map((item, index) => (
            <li
              key={index}
              className="text-black font-medium border-b pb-2 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Button inside mobile dropdown */}
        <div className="mt-5">
          <Button name="Contact Us" to="#" />
        </div>
      </div>

    </div>
  );
};

export default Header;
