import React from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

const About = () => {
  return <div>
    <img  src={logo} style={{width:'50%'}} />
      <section class="info page-section mt-5" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                    <div class="col-lg-8 text-center ">
                        <h2 class="text-black mb-5">Nosotros</h2>
                        <Link to="/contacto" class="cta">
                            <span>Comenzar</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </Link>
                    </div>                    
                </div>             
            </div>
        </section>
  </div>;
};

export default About;

