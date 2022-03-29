import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}
