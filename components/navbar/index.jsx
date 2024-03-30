import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-nemo p-4">
      <div className="text-white font-bold text-xl">NEMO</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-nemo hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-nemo hover:text-gray-300">
            Data
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
