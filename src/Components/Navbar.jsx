import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Context/UserProvider";

const Navbar=({username , avatar ,userEmail})=>{
  const {users} =useContext(userContext)
// console.log("user" ,users.name);
  const [ open , setOpen]=useState(false)
  const handleOpenNavbar=()=>{
 open?setOpen(false):setOpen(true)
  }

  return (
    <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Profile
      </Link>
      <div className="flex items-center">
        <div className="mr-4">
          <img
            src={avatar}
            alt={username}
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <button onClick={handleOpenNavbar} className="flex items-center">
              <span className="mr-2">{username}</span>
            </button>
            {open ?(<div style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }} className="absolute top-10 right-0 bg-white rounded-lg shadow-md p-4 w-[19rem]">
              <div className="block hover:bg-gray-100">
              <img src={avatar} className="rounded-full w-16 h-16 m-auto" alt={username} />
              <p className="text-xl font-semibold text-gray-700">{username}</p>
              <p className="text-gray-400">{userEmail}</p>
              </div>
              <hr/>
              { users.slice(0, 3).map((user)=><li key={user.id} className=" mt-4 list-none ">
                    <div className="flex items-center pb-4 bg-white">
                      <img
                        src={user.profilepicture}
                        alt={user.username}
                        className="w-11 h-11 rounded-full mr-2"
                      />
                      <div className="font-medium text-gray-700">{user.name}</div>
                    </div>
                  
              <hr/>
                </li>)}
              
              <Link
                to="/"
                className="block hover:bg-gray-100 mt-1"
              >
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-[2rem]">Sign out</button>
              </Link>
            </div>):""}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
