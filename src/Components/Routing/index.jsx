import React from 'react'
import { Route, Routes } from 'react-router'
import AllRecipes from '../../Pages/AllRecipes'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login/Login'

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/recipes' element={<AllRecipes/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default Routing