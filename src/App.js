import React from 'react'

import {BrowserRouter,Routes,Route} from"react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'

import Register from './Pages/Register.Js'


import Layout from'./Components/Ui/Layout'
import './Style2.css'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="login" element={<Login/>}></Route>
    <Route path="register" element={<Register/>}></Route>



    </Route>


  </Routes>
  </BrowserRouter>
  )
}
