import React from 'react';
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return <div className="nosotros">

        <section className="infoo page-section" id="servicios">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">
                    <div className="wrapper">
                        <div className="typing-demo ">
                            ¿Quiénes somos?
                        </div>
                    </div>
                </h2>

                <div className="box row gx-4 gx-lg-5 mb-4 py-5 px-3 align-items-center mt-4">
                    <div className="col-lg-4 col-md-12 text-center">
                        <div className="">
                            <img className="imagenservicios mb-2  justify-content-center" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/D0C8/production/_89984435_gay2.jpg" alt="inspeccion pista de despegue mantenimiento" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 text-center">
                        <p className="texto">Somos una compañía de Desarrollo de Software
                            creada por amigos, con un fin en común,
                            lograr solucionar las problemáticas del día a día respaldados con la tecnología,
                            actualmente estamos enfocados en las problemáticas de las medianas y pequeñas empresas, ayudandolas
                            para que logren llegar al mercado compitiendo mano a mano con empresas de alto calibre y experiencia.
                        </p>
                    </div>
                </div>
                <h2 className="text-center mt-0">
                    <div className="wrapperr">
                        <div className="typing-demos ">
                            ¿Por qué elegirnos?
                        </div>
                    </div>
                </h2>
                <div className="box row gx-4 gx-lg-5 mb-4 py-5 px-3 align-items-center mt-4">
                    <div className="col-lg-4 col-md-12 text-center">
                        <div className="">

                            <img className="imagenservicios mb-2  justify-content-center" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/D0C8/production/_89984435_gay2.jpg" alt="inspeccion pista de despegue mantenimiento" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 text-center">
                        <p className="texto ">Estamos siempre enfocados en buscar las soluciones
                         más optimas acorde a las necesidades de nuestros clientes. Desarrollando
                          productos escalables de acuerdo a las exigencias de la empresa y de los
                           mercados actuales para que nuestros clientes puedan ser más competitivos
                            es sus nichos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="boton">
        <Link className=" " to="/contacto"><h1 className="comencemos">Comencemos</h1></Link>
        </div>
        

    </div>
};
export default About;

