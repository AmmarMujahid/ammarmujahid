"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { NavOpen, NavClose } from "./assets";

const navItems = [
  { title: "Home", id: "#home" },
  { title: "About me", id: "#aboutme" },
  { title: "Projects", id: "#projects" },
  { title: "Contact", id: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpn] = useState(false);

  const toggleMenu = () => {
    setIsOpn(!isOpen);
  };

  return (
    <section className="bg-[#181824] mb-12">
      <nav className="flex justify-between items-center container mx-auto">
        <div>
          <h3 className="text-primaryColor text-[28px] font-semibold py-[20px]">
            Ammar Mujahid
          </h3>
        </div>

        <ul className="hidden md:flex items-center gap-[50px]">
          {navItems.map((item) => (
            <li key={item.id} className="text-[18px] text-white font-semibold">
              <Link href={item.id} className="hover:text-primaryColor">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Small Screen Navbar */}
        <ul
          className={`flex flex-col items-center gap-8 top-[85px] md:hidden fixed bg-[#181824] ease-in duration-300 z-30 ${
            isOpen
              ? "py-[30px] w-full right-0 left-0 bottom-0"
              : "left-[-100%] py-[30px] w-full right-0 bottom-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="text-[18px] text-white font-semibold">
              <Link href={item.id} className="hover:text-primaryColor">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <NavClose /> : <NavOpen />}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
