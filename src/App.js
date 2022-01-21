import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    
    <Router>   
         <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/nosotros" exact={true} element={<About/>} />
        <Route path="/contacto" exact={true} element={<Contact/>} />
        <Route path="/*" exact={true} element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
