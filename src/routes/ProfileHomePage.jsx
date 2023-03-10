import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Components/Navbar"
import SideNavbar from '../Components/SideNavbar';
import Chat from '../Components/Chat';

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
    return <div><img style={{margin:"auto"}} src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="loading"/></div>;
  }

  return (
    <>
    <div >
    <div className=' flex '>
      <div className=' w-[24%]'>
      <SideNavbar  />
      </div>
      { user && (<div className='py-12 px-8 w-[76%]'>
        <Navbar username={user.name} avatar={user.profilepicture} userEmail={user.email} />
        <hr/>
      <div className=' flex flex-warp justify-between mt-4 p-8'>
        <div className='p-4 w-[40%]'>
          <div>
            <img className='w-52 h-52 rounded-full m-auto '  src={user.profilepicture} alt={user.username}/>
            <p className='text-gray-700 text-xl font-medium pt-2' >{user?.name}</p>
          </div>
          <div className='leading-8  '>
            <p className='text-gray-500 font-medium'>Username : <b className='text-gray-700' >{user?.username}</b></p>
            <p className='text-gray-500 font-medium'>e-mail : <b className='text-gray-700' >{user?.email}</b></p>
            <p className='text-gray-500 font-medium'>Phone : <b className='text-gray-700' >{user?.phone}</b></p>
            <p className='text-gray-500 font-medium'>Website : <b className='text-gray-700' >{user?.website}</b></p>
          </div>
        <hr/>
        <div className='leading-10 '>
          <heading className="text-gray-500 font-medium">Company</heading>
          <p className='text-gray-500 font-medium'>Name : <b className='text-gray-700' >{user?.company.name}</b></p>
          <p className='text-gray-500 font-medium flex'>catchphrase : <div className='w-[60%]'><b className='text-gray-700 ' >{user?.company.catchPhrase}</b></div></p>
          <p className='text-gray-500 font-medium flex justify-center'>bs : <div className='w-[60%]'><b className='text-gray-700 ' >{user?.company.bs}</b></div></p>
        </div>
        </div>
        <hr className='border border-gray-300 h-auto'/>
        <div className=' w-[50%] p-4 '>
         <div className='leading-8 '>
          <heading className="text-gray-500 font-medium">Address</heading>
          <p className='text-gray-500 font-medium'>Street : <b className='text-gray-700' >{user?.address.street}</b></p>
          <p className='text-gray-500 font-medium'>Suite : <b className='text-gray-700' >{user?.address.suite}</b></p>
          <p className='text-gray-500 font-medium'>City : <b className='text-gray-700' >{user?.address.city}</b></p>
          <p className='text-gray-500 font-medium'>Zipcode : <b className='text-gray-700' >{user?.address.zipcode}</b></p>
         </div>
         <hr />
         <div className='pt-4'>
          <img className='rounded-2xl' src="https://static.toiimg.com/thumb/msid-79949586,imgsize-128601,width-400,resizemode-4/79949586.jpg" alt="map" />
          <div className='flex justify-end gap-4'>
           <p className='text-gray-500 font-medium flex'>Lat: <p className='text-gray-700' >{user?.address.geo.lat}</p></p>
           <p className='text-gray-500 font-medium flex'>Lng: <p className='text-gray-700' >{user?.address.geo.lng}</p></p>
          </div>
         </div>
        </div>
      </div>
      </div>)
      }
    </div>
    <Chat />
      </div>
  </>
  );
};

export default ProfileHomePage;