import React from 'react'
// import { Switch ,Route } from 'react-router-dom'
import { Route,Routes,Navigate } from 'react-router'

import Home from './Home'
import Contact from './Contact';
import About from './about/About';
import Explore from './Explore';
import Navbar from './Nav/Navbar'
import Header from './Header'
import FeedBack from './about/Feedback';
import Error from './Error'
import Menu from './Component/Menu';
import Footer from './about/Footer'
import Registration from './Registration';





const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>

      <Route exact path = "/"  element = {<Home />} />
      <Route exact  path = "/About" element = {<About />} />
      <Route exact  path = "/Contact" element = {<Contact />} />
      <Route exact  path = "/registration" element = {<Registration/>} />
      <Route exact  path = "/Explore" element = {<Menu/>} />
      <Route path = "*" element = {<Error/>} />
 
     
     </Routes>
     <Footer />
    </>
  )
}

export default App;