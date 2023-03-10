import { Link, useLocation, useParams } from "react-router-dom";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const SideNavbar = () => {
  const { userId } = useParams();
  const activeLink = useLocation();
 
  return (
    <nav className="p-8">
      <div className=" bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[45rem] rounded-3xl">
        <div className=" text-left py-44 leading-[4rem] font-semibold">
          <ul>
            <li>
              <Link
                to={`/profile/${userId}`}
                className={`${
                  activeLink.pathname === `/profile/${userId}`
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Profile
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/posts"
                className={`${
                  activeLink.pathname === "/profile/posts"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Posts
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/gallery"
                className={`${
                  activeLink.pathname === "/profile/gallery"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                Gallery
              </Link>
            </li>
            <hr />
            <li>
              <Link
                to="/profile/todo"
                className={`${
                  activeLink.pathname === "/profile/todo"
                    ? `text-white`
                    : "text-gray-400"
                }`}
              >
                ToDo
              </Link>
            <hr />
            </li>
            {activeLink.pathname === "/profile/posts" && (
              <div style={{ marginTop: "-11rem " }} className="indicator">
                <style>
                  {`
        .indicator::before {
          background-color: #664bd5;
        }
        .indicator::after {
          background-color: #664bd5;
        }
      `}
                </style>
                <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
              </div>
            )}
            {activeLink.pathname === "/profile/todo" && (
              <div style={{ marginTop: "-3rem " }} className="indicator">
                <style>
                  {`
        .indicator::before {
          background-color: #6740c9;
        }
        .indicator::after {
          background-color: #6740c9;
        }
      `}
                </style>
                <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
              </div>
            )}
            {activeLink.pathname === `/profile/${userId}` && (
              <div style={{ marginTop: "-15rem " }} className="indicator">
                <style>
                  {`
        .indicator::before {
          background-color: #6652db;
        }
        .indicator::after {
          background-color: #6652db;
        }
      `}
                </style>
                <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
              </div>
            )}
            {activeLink.pathname === "/profile/gallery" && (
              <div style={{ marginTop: "-7rem " }} className="indicator">
                <style>
                  {`
        .indicator::before {
          background-color: #6646cf;
        }
        .indicator::after {
          background-color: #6646cf;
        }
      `}
                </style>
                <RiArrowDropRightLine className="text-[2.1rem] text-gray-400" />
              </div>
            )}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
