import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import homePageImg from "../assets/home.png"

function LandingPage() {
  const [users, setUsers] = useState([]);

const getData= async()=>{
    const res= await axios.get(`https://panorbit.in/api/users.json`)
    const userData=res.data.users
    console.log("data" , userData);
    setUsers(userData)
}
useEffect(()=>{
    getData()
})

  return (
    <div className="py-28" style={{ backgroundImage: `url(${homePageImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
      
  
    <div className="border-2 w-2/5 m-auto  rounded-[3rem]  ">
      <div className=" bg-gray-100 rounded-t-[2.8rem]">
      <h1 className="text-2xl text-zinc-600 font-semibold p-8">Select User Account</h1>
      </div>
      <div className="bg-white rounded-b-[2.8rem]">
      <div className="p-8 overflow-y-auto h-[30rem] h-screen scrollbar-thin" >
      {users.map(user => (
        <li key={user.id} className="mb-4 list-none ">
        <Link to={`/profile/${user.id}`} className="block  rounded hover:bg-gray-100 ">
          <div className="flex items-center pb-4 bg-white">
            <img src={user.profilepicture} alt={user.username} className="w-11 h-11 rounded-full mr-2" />
            <div className="font-medium">{user.name}</div>
          </div>
          <hr />
        </Link>
      </li>
        ))}
    </div>
      </div>
    </div>
    </div>
  );
  
  function handleUserClick(userId) {
    // Redirect to profile home page for selected user
    console.log("User selected:", userId);
  }
}

export default LandingPage;

        // <div key={user.id} className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
        //   <img className="w-full" src={user.profilepicture} alt={user.username} />
        //   <div className="px-6 py-4">
        //   <div onClick={() => handleUserClick(user.id)}><div className="font-bold text-xl mb-2">{user.name}</div></div> 
        //   </div>
        // </div>  rgb(81,70,200)  rgb(220,214,243)