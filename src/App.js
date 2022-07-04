
import { useState } from 'react';
import './App.css';
import About from './Components/About';

import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
const [mode,setMode]=useState('light');

const toggleSwitch=()=>{
  if(mode==='light'){
setMode('dark');
document.body.style.backgroundColor = '#3F3351';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='#ADCF9F';
      }
}

  return (
   <>
   <Router>
   <Navbar title="TextUtils" about="About TextUtils" mode={mode} switch={toggleSwitch}/>
   <div className="container my-3">
   <Routes>
          <Route exact path='/about' element={<About />}/>
            
          
          <Route exact path='/' element={<TextForm head="Enter the text below to Analyze" mode={mode} />}/>
          
          
        </Routes>
   
    {/* <About /> */}
    
   </div>
   </Router>
   </>


  );
}

export default App;
