import React from 'react'
import './App.css'
import { Homepage, Items, Login, News, Profile, SignUp, Support } from './components/index'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/support" element={<Support />} />
      </Routes>
  )
}

export default App
