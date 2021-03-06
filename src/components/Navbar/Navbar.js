import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../../imgs/logo.png'
import 'bootstrap';



const Navbar = () => {

    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });


  return <div id="page-top">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container">
        <div className="row ">
          <div className="col-9">
            <a className="navbar-brand" href="#page-top"><img className="imagen" src={logo} style={{ width: '55%' }} alt="logo de la empresa" /></a>
          </div>
          <div className="col-3">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" style={{ width: '100%' }} data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          </div>
        </div>
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


