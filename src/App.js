import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}
