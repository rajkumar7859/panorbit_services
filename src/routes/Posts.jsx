import React, { useContext } from "react";
import Chat from "../Components/Chat";
import Navbar from "../Components/Navbar";
import SideNavbar from "../Components/SideNavbar";
import { userContext } from "../Context/UserProvider";

const Posts = () => {
  const {users} =useContext(userContext)
  console.log("check",users);
  console.log(users.id);

  return (
    <div className="">
      <div className=" flex ">
        <div className=" w-[24%]">
          <SideNavbar />
        </div>
        <div className="py-12 px-8 w-[76%]">
          <Navbar username={users.name} avatar={users.profilepicture} userEmail={users.email} />
          <hr />
          <div className="mt-4 p-8">
            <div className="text-center font-bold text-gray-400 text-[5rem] opacity-25 p-40">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Posts;
