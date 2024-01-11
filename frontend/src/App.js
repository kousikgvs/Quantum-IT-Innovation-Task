import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard"
import Signup from "./Signup/Signup"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App