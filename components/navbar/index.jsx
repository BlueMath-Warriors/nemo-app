import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="top-0 left-0 right-0 z-10 flex justify-between items-center py-2 bg-nemo-dark px-4 md:px-12 drop-shadow-md">
      <Link
        href="/"
        className="flex gap-4 items-center justify-center cursor-pointer"
      >
        <Image src="/images/nemo-logo.jpg" width={15} height={50} alt="nemo-logo" />
        <p className="text-white font-bold text-xl md:text-2xl">NEMO</p>
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/about"
            className="text-nemo-light text-lg md:text-xl hover:text-gray-300"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="/data"
            className="text-nemo-light text-lg md:text-xl hover:text-gray-300"
          >
            Data Pipeline
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
