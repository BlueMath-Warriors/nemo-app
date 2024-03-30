import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-4 bg-nemoDark px-4 md:px-12 drop-shadow-md">
      <div className="flex gap-4 items-center justify-center">
      <Image
        src="/images/nemo-logo.jpg"
        width={20}
        height={60}
      />
        <p className="text-white font-bold text-2xl md:text-4xl">NEMO</p>
      </div>
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-nemoLight text-xl md:text-2xl hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-nemoLight text-xl md:text-2xl hover:text-gray-300">
            Data
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
