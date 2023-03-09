import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Panorbit
      </Link>
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <button className="flex items-center">
              <span className="mr-2">John Doe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.928 7.07a1 1 0 011.414 0L10 13.586l5.657-5.657a1 1 0 011.414 1.414l-6.364 6.364a2 2 0 01-2.828 0L1.515 8.484a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute top-10 right-0 bg-white rounded-lg shadow-md py-2">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 mt-1"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
