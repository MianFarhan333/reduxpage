import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginpage from './Pages/Loginpages'
import Signuppage from './Pages/Signuppages'
import Profilepage from './Pages/Profilepages'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path='/Profile' element={<Profilepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App