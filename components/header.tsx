"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="overflow-x-hidden overflow-y-hidden">
      <section className="dark:bg-gray-800 bg-[#ffffff] shadow md:shadow sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
        <div className="flex h-18 items-center justify-between px-4 py-3 sm:p-0">
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
          <a href="#" className="block px-2 py-1 font-semibold hover:text-[#00000070] dark:text-white dark:hover:text-[#ffffff90]">
            Obtener Presupuesto
          </a>
          <a href="#" className="block px-2 py-1 font-semibold hover:text-[#00000070] dark:text-white dark:hover:text-[#ffffff90]">
            Novedades
          </a>
          <a href="#" className="block px-2 py-1 font-semibold hover:text-[#00000070] dark:text-white dark:hover:text-[#ffffff90]">
            Multimedia
          </a>
          <a href="#" className="block px-2 py-1 font-semibold hover:text-[#00000070] dark:text-white dark:hover:text-[#ffffff90]">
            Testimonios
          </a>
          <a href="#" className="block px-2 py-1 font-semibold hover:text-[#00000070] dark:text-white dark:hover:text-[#ffffff90]">
            Galeria
          </a>
          <button
            type="button"
            onClick={handleDarkMode}
            className="text-black text-2xl w-10 h-10 mx-8 flex items-center justify-center dark:dark:text-white text-bold hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-2.5"
          >
            {isDarkMode ? "☾" : "☀"}
          </button>
        </nav>
      </section>
      <nav
        className={`w-screen p-5 fixed top-0 h-screen md:hidden duration-500 backdrop-filter backdrop-blur-lg ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="w-full flex items-end justify-start mt-2 mb-10">
          <button
            type="button"
            onClick={handleDarkMode}
            className="text-black w-10 h-10 dark:dark:text-white text-bold border-2 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {isDarkMode ? "☾" : "☀"}
          </button>
        </div>
        <a href="#" className="block px-2 py-2 font-semibold  dark:text-white dark:hover:text-red" onClick={() => setIsOpen(!isOpen)}>
          Obtener Presupuesto
        </a>
        <a href="#" className="block px-2 py-2 font-semibold  dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          Novedades
        </a>
        <a href="#" className="block px-2 py-2 font-semibold  dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          Multimedia
        </a>
        <a href="#" className="block px-2 py-2 font-semibold  dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          Testimonios
        </a>
        <a href="#" className="block px-2 py-2 font-semibold  dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          Galeria
        </a>
      </nav>
    </header>
  );
};
