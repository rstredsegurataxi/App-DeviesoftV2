import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './prueba1.png'

// import '../../../src/styles.css'



const Navbar = () => {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top"><img className="imagen" src={logo}  style={{width: '40%'}}  alt="logo de la empresa" /></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item"> <Link className="text nav-link " aria-current="page" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="text nav-link " to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="text nav-link " to="/contacto">Contacto</Link></li>            
          </ul>
        </div>
      </div>
    </nav>
  </div>;
};

export default Navbar;
