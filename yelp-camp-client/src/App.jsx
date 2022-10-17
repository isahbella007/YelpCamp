import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'
import LandingPage from './Pages/LandingPage/LandingPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = <LandingPage></LandingPage> ></Route>
        <Route path='/home' element = <HomePage></HomePage> ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
