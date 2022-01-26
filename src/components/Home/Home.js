import React from 'react';
import { Link } from 'react-router-dom'
import '../../../src/styles.css'
import './home.css'
import './fuente/style.css'


const Home = () => {
    return <div id="page-top">
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-center">
                        <h1 className="titulo text-white font-weight-bol ">DeVieSoft</h1>
                        <h3 className="span loader">
                            <span className='m'>D</span>
                            <span className='m'>E</span>
                            <span className='m'>S</span>
                            <span className='m'>A</span>
                            <span className='m'>R</span>
                            <span className='m'>R</span>
                            <span className='m'>O</span>
                            <span className='m'>L</span>
                            <span className='m'>L</span>
                            <span className='m'>O</span>
                            <span className='m'>&nbsp;</span>
                            <span className='m'>d</span>
                            <span className='m'>e</span>
                            <span className='m'>&nbsp;</span>
                            <span className='m'>S</span>
                            <span className='m'>O</span>
                            <span className='m'>F</span>
                            <span className='m'>T</span>
                            <span className='m'>W</span>
                            <span className='m'>A</span>
                            <span className='m'>R</span>
                            <span className='m'>E</span>
                        </h3>
                    </div>
                </div>
            </div>
        </header>

        <section className="info page-section " id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center align-items-center">
                    <div className="col-lg-8 text-center ">
                        <h2 className="text-black mb-5">¿Lo ideaste? ¡Ahora construyamos algo único!</h2>
                        <Link to="/contacto" className="cta">
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
