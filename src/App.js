import React, { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Publication from './components/Publication/Publication';
import Awards from './components/Awards/Awards';




const App = () => {
    const [userName, setUserName] = useState(" ");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName("")
    })
  }, []);
  return (
    <div>
    
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/award' element={<Awards/>} />
          <Route  path="/login" element={<Login />} /> 
          <Route  path="/signup" element={<Signup />} /> 
          <Route  path="/paper" element={<Publication />} /> 
          {/* <Route  path="/" element={<Home />} />  */}
        </Routes>
    </div>
  )
}

export default App;
