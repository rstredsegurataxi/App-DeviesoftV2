import React from 'react';
import hands from '../../imgs/Captura.PNG'

const About = () => {
  return <div>
   
      <section class="info page-section mt-5" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center align-items-center">
                    <div class="col-lg-8 text-center ">
                        <h2 class="text-black mb-5">¿Quiénes somos?</h2>

                        <div class="card" >
                            {/* <img src={hands} class="card-img-top cardwith" alt="..."/> */}
                            <div class="card-body">
                               <p><strong>Deviesoft</strong>, Somos una compañía de Desarrollo de Software
                               creada por amigos, con un fin en común,
                               lograr solucionar las problemáticas del día a día respaldados con la tecnología, 
                               actualmente estamos enfocados en las problemáticas de las medianas y pequeñas empresas, ayudandolas 
                               para que logren llegar al mercado compitiendo mano a mano con empresas de alto calibre y experiencia.
                              </p>
                            </div>
                        </div>
                    </div>                    
                </div>             
            </div>
        </section>
    </div>
};
export default About;

