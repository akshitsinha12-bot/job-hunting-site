import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Auth from './views/Auth'
import Dashboard from './views/Dashboard'
import './index.css'

function App(){ 
  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto p-4">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/auth" className="text-blue-600">Login/Register</Link>
          <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
