"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Image src="/logo-light.svg" width={80} height={80} alt="Keys Animation Logo" className="cursor-pointer" onClick={() => router.push("/")} />
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-[40px] h-[50px] flex flex-col justify-around">
              <div
                className={`h-[2px] w-[35px] bg-white border-2 duration-1000 border-white ${isOpen ? "transform origin-left rotate-45 z-10" : ""}`}
              ></div>
              <div className={`h-[2px] w-[35px] bg-white border-2  border-white ${isOpen ? "hidden" : ""}`}></div>
              <div
                className={`h-[2px] w-[35px] bg-white border-2 duration-1000 border-white ${isOpen ? "transform origin-left -rotate-45 z-10" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <nav className="hidden md:flex">
        <a href="#" className="block px-2 py-1 text-white font-semibold hover:text-[#ffffff90]">
          Obtener Presupuesto
        </a>
        <a href="#" className="block px-2 py-1 text-white font-semibold hover:text-[#ffffff90]">
          Pedir cita
        </a>
        <a href="#" className="block px-2 py-1 text-white font-semibold hover:text-[#ffffff90]">
          Quiénes Somos
        </a>
        <a href="#" className="block px-2 py-1 text-white font-semibold hover:text-[#ffffff90]">
          Testimonio
        </a>
        <a href="#" className="block px-2 py-1 text-white font-semibold hover:text-[#ffffff90]">
          Galeria
        </a>
      </nav>
      <nav className={`md:hidden duration-500 backdrop-filter backdrop-blur-lg w-screen ${isOpen ? "absolute right-0" : "absolute -right-[800px]"}`}>
        <a href="#" className="block px-2 py-2 text-white font-semibold hover:text-[#ffffff90]">
          Obtener Presupuesto
        </a>
        <a href="#" className="block px-2 py-2 text-white font-semibold hover:text-[#ffffff90]">
          Pedir cita
        </a>
        <a href="#" className="block px-2 py-2 text-white font-semibold hover:text-[#ffffff90]">
          Quiénes Somos
        </a>
        <a href="#" className="block px-2 py-2 text-white font-semibold hover:text-[#ffffff90]">
          Testimonio
        </a>
        <a href="#" className="block px-2 py-2 text-white font-semibold hover:text-[#ffffff90]">
          Galeria
        </a>
      </nav>
    </header>
  );
};
