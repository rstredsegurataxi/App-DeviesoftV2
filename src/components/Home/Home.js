import React from 'react';
import { Link } from 'react-router-dom'
import '../../../src/styles.css'
import './home.css'
import './fuente/style.css'


const Home = () => {
    return <div id="page-top">
        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-center">
                        <h1 class="titulo text-white font-weight-bol ">DeVieSoft</h1>
                        <h3 class="span loader">
                            <span class='m'>D</span>
                            <span class='m'>E</span>
                            <span class='m'>S</span>
                            <span class='m'>A</span>
                            <span class='m'>R</span>
                            <span class='m'>R</span>
                            <span class='m'>O</span>
                            <span class='m'>L</span>
                            <span class='m'>L</span>
                            <span class='m'>O</span>
                            <span class='m'>&nbsp;</span>
                            <span class='m'>d</span>
                            <span class='m'>e</span>
                            <span class='m'>&nbsp;</span>
                            <span class='m'>S</span>
                            <span class='m'>O</span>
                            <span class='m'>F</span>
                            <span class='m'>T</span>
                            <span class='m'>W</span>
                            <span class='m'>A</span>
                            <span class='m'>R</span>
                            <span class='m'>E</span>
                        </h3>
                    </div>
                </div>
            </div>
        </header>

        <section class="info page-section " id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                    <div class="col-lg-8 text-center ">
                        <h2 class="text-black mb-5">Piénsalo, suéñalo y construyamos algo único.</h2>
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
    </div>
};

export default Home;
