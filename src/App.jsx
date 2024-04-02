import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home/Home';
import About from './Components/About/About';
import Aboutone from './Components/About/Aboutone';
import Abouttwo from './Components/About/Abouttwo';
import Project from './Components/Projects/Project';
import Contact from "./Components/Contect/Contact"
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
       <Navbar/>
      <Home/>
      <About/>
      <Aboutone/>
      <Abouttwo/>
      <Project/>
      <Contact/> 
      <Footer/>
      </div>
    
  )
}

export default App

