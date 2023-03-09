import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import LandingPage from './LandingPage'
import ProfileHomePage from './ProfileHomePage'

const Allroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/profile/:id' element={<ProfileHomePage />} />
      </Routes>
    </div>
  )
}

export default Allroutes
