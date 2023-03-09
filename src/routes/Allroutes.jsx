import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import ProfileHomePage from './ProfileHomePage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/profile/:userId' element={<ProfileHomePage />} />
      </Routes>
    </div>
  )
}

export default Allroutes
