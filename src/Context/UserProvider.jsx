import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const userContext=createContext()
const UserProvider = ({children}) => {

  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users`);
    const userData = res.data;
    setUsers(userData);
  };

  useEffect(()=>{
    getData()
  } ,[])

  return (
      <userContext.Provider value={{users , setUsers , getData}}>{children}</userContext.Provider>
  )
}

export default UserProvider
