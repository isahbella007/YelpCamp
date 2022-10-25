import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Landing from './Pages/Landing/Landing'
import Register from './Pages/Register/Register'
import Signin from './Pages/SignIn/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = <Landing></Landing> ></Route>
        <Route path='/home' element = <Home></Home>></Route>
        <Route path='/signin' element = <Signin></Signin>></Route>
        <Route path= '/register' element = <Register></Register> ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
