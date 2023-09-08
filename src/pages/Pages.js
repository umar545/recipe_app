import React from 'react'
import Home from './Home'
import Categories from '../components/Categories'
import Cusine from './Cusine'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <BrowserRouter >  

    <div className='recipe-container'>
      <Categories />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine' element={<Cusine />} />
      </Routes>
      {/* <Home />
      <Cusine /> */}
    </div>
    </BrowserRouter>
  )
}

export default Pages
