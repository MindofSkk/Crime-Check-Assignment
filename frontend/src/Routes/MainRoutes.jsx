import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Notice } from '../components/Notice'

export const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/notice" element={<Notice />} />
  
  </Routes>
  )
}
