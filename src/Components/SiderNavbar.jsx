import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SideNavbar = () => {
  const { userId } = useParams();
  const navigate=useNavigate()
  const [user, setUser] = useState(null);
  const activeLink = useLocation();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  
  return (
    <nav className="p-8">
      <div className=" bg-gradient-to-b from-indigo-500 to-purple-800 p-8 h-[50rem] rounded-3xl">
          <div className=" text-left py-44 leading-[4rem] font-semibold">
           <Link to={"#"}
              className={`${
                activeLink.pathname === `/profile/${userId}`
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              Profile
            </Link>
            <hr />
            <Link
              to="/profile/posts"
              className={`${
                activeLink.pathname === "/profile/posts" ? "text-white" : "text-gray-400"
              }`}
            >
              Posts
            </Link>
            <hr />
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
            <hr />
            <Link
              to="/profile/todo"
              className={`${
                activeLink.pathname === "/profile/todo" ? "text-white" : "text-gray-400"
              }`}
            >
              ToDo
            </Link>
            <hr />
          </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
