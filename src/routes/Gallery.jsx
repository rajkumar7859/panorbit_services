import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";

const Gallery = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div><img style={{margin:"auto"}} src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading"/></div>;
  }


  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar />
          <hr />
          <div className="mt-4 p-8">
            <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
        
        g Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
