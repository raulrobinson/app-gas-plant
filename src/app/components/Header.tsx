"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { menuItems } from "@/utils/menuItems";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleAccordion = (index: number) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

  return (
      <header className="w-full fixed top-0 bg-green-300 text-gray-700 p-4 shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center">
              <a href="/" className="text-xl font-bold">GAS PLANT : BQ57MOX101</a>

              {/* Button menu */}
              <button onClick={toggleMenu} className="lg:hidden">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Menu */}
              <nav className={`text-white absolute lg:static top-16 left-0 w-full bg-green-400 lg:flex lg:items-center lg:w-auto transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                  <ul className="lg:flex">
                      {menuItems.map((item, index) => (
                          <li key={index} className="relative">
                              {item.submenu ? (
                                  <>
                                      <button
                                          onClick={() => toggleAccordion(index)}
                                          className="flex items-center w-full p-3 text-left lg:px-4 hover:bg-green-700"
                                      >
                                          {item.title}
                                          <ChevronDown size={18} className="ml-2" />
                                      </button>

                                      {/* Submenú */}
                                      {activeMenu === index && (
                                          <ul className="bg-green-600 lg:absolute lg:top-full lg:left-0 lg:w-48 shadow-md">
                                              {item.submenu.map((subItem, subIndex) => (
                                                  <li key={subIndex} className="p-3 hover:bg-green-700">
                                                      <Link href="mailto:rasysbox@hotmail.com">{subItem.label}</Link>
                                                  </li>
                                              ))}
                                          </ul>
                                      )}
                                  </>
                              ) : (
                                  <Link href="mailto:rasysbox@hotmail.com" className="block p-3 lg:px-4 hover:bg-green-700">
                                      Send an e-mail to rasysbox@hotmail.com
                                  </Link>
                              )}
                          </li>
                      ))}
                  </ul>
              </nav>
          </div>
      </header>
  );
}