import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const userContext=createContext();
const dataArr = JSON.parse(localStorage.getItem("userData"))

const UserProvider = ({children}) => {

  // Set initial state for users array
  const [users, setUsers] = useState([]);

  // Function to get user data from API endpoint
  const getData = async () => {
    try {
      const res = await axios.get(`https://drab-blue-shark-robe.cyclic.app/users`);
      const userData = res.data;
      setUsers(userData);
    } catch (error) {
      console.error(error);
    }
  };

  // Call getData function on component mount
  useEffect(() => {
    getData();
  }, []);

  // Pass users state and getData function as values to userContext provider
  return (
    <userContext.Provider value={{users, getData ,dataArr}}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider;
