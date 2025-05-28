import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
