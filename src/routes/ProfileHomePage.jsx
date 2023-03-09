import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Components/Navbar"

const ProfileHomePage = () => {
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
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="flex flex-col items-center">
    {user && (
      <div className="flex flex-col items-center justify-center w-full">
        <div className='h-[12rem] bg-indigo-600'>
          <h1>Rajkumar</h1>
        </div>
        <Navbar username={user.name} avatar={user.profilepicture} userEmail={user.email}/>
        <img className="w-32 h-32 rounded-full" src={user.profilepicture} alt="Profile" />
        <div className="text-xl font-bold my-2">{user.name}</div>
        <div className="text-gray-500 my-2">@{user.username}</div>
      </div>
    )}
    <div className="my-8 w-full flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="text-xl font-bold mb-4">Profile Details</div>
        <div className="w-full flex justify-between mb-4">
          <div className="text-gray-500">Name</div>
          <div>{user?.name}</div>
        </div>
        <div className="w-full flex justify-between mb-4">
          <div className="text-gray-500">Email</div>
          <div>{user?.email}</div>
        </div>
        <div className="w-full flex justify-between mb-4">
          <div className="text-gray-500">Phone</div>
          <div>{user?.phone}</div>
        </div>
        <div className="w-full flex justify-between mb-4">
          <div className="text-gray-500">Website</div>
          <div>{user?.website}</div>
        </div>
      </div>
    </div>
    <div className="my-8 w-full flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="text-xl font-bold mb-4">Posts Details</div>
        <div className="text-gray-500 mb-4">Coming soon</div>
      </div>
    </div>
    <div className="my-8 w-full flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="text-xl font-bold mb-4">Gallery</div>
        <div className="text-gray-500 mb-4">Coming soon</div>
      </div>
    </div>
    <div className="my-8 w-full flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="text-xl font-bold mb-4">ToDo</div>
        <div className="text-gray-500 mb-4">Coming soon</div>
      </div>
    </div>
  </div>
  </>
  );
};

export default ProfileHomePage;


