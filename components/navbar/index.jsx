import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-4 bg-nemo px-4 md:px-12">
      <div className="text-white font-bold text-3xl md:text-5xl">NEMO</div>
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-nemo text-xl md:text-2xl hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-nemo text-xl md:text-2xl hover:text-gray-300">
            Data
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
