"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="dark:bg-gray-800 bg-[#ffffff] shadow sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Image
            src={isDarkMode ? "/logo-light.svg" : "/logo-dark.svg"}
            width={80}
            height={80}
            alt="Keys Animation Logo"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="sm:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-[40px] h-[50px] flex flex-col justify-around">
              <div
                className={`h-[2px] w-[35px] bg-black border-black dark:bg-white border-2 duration-1000 dark:border-white ${
                  isOpen ? "transform origin-left rotate-45 z-10" : ""
                }`}
              ></div>
              <div className={`h-[2px] w-[35px] bg-black border-black dark:bg-white border-2  dark:border-white ${isOpen ? "hidden" : ""}`}></div>
              <div
                className={`h-[2px] w-[35px] bg-black border-black dark:bg-white border-2 duration-1000 dark:border-white ${
                  isOpen ? "transform origin-left -rotate-45 z-10" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <nav className="hidden md:flex justify-center items-center">
        <a href="#" className="block px-2 py-1 dark:text-white font-semibold hover:text-[#ffffff90]">
          Obtener Presupuesto
        </a>
        <a href="#" className="block px-2 py-1 dark:text-white font-semibold hover:text-[#ffffff90]">
          Pedir cita
        </a>
        <a href="#" className="block px-2 py-1 dark:text-white font-semibold hover:text-[#ffffff90]">
          Quiénes Somos
        </a>
        <a href="#" className="block px-2 py-1 dark:text-white font-semibold hover:text-[#ffffff90]">
          Testimonio
        </a>
        <a href="#" className="block px-2 py-1 dark:text-white font-semibold hover:text-[#ffffff90]">
          Galeria
        </a>
        <button
          type="button"
          onClick={handleToggle}
          className="text-black w-10 h-10 dark:dark:text-white text-bold hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {isDarkMode ? "☾" : "☀"}
        </button>
      </nav>

      <nav
        className={`w-screen p-5 overflow-hidden md:hidden duration-500 backdrop-filter backdrop-blur-lg ${
          isOpen ? "absolute right-0" : "absolute -right-[800px]"
        }`}
      >
        <div className="w-full flex items-end justify-end">
          <button
            type="button"
            onClick={handleToggle}
            className="text-black w-10 h-10 dark:dark:text-white text-bold border-2 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {isDarkMode ? "☾" : "☀"}
          </button>
        </div>
        <a href="#" className="block px-2 py-2 dark:text-white font-semibold hover:text-[#ffffff90]">
          Obtener Presupuesto
        </a>
        <a href="#" className="block px-2 py-2 dark:text-white font-semibold hover:text-[#ffffff90]">
          Pedir cita
        </a>
        <a href="#" className="block px-2 py-2 dark:text-white font-semibold hover:text-[#ffffff90]">
          Quiénes Somos
        </a>
        <a href="#" className="block px-2 py-2 dark:text-white font-semibold hover:text-[#ffffff90]">
          Testimonio
        </a>
        <a href="#" className="block px-2 py-2 dark:text-white font-semibold hover:text-[#ffffff90]">
          Galeria
        </a>
      </nav>
    </header>
  );
};
