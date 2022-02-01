import React from 'react';
import './contact.css'

const Contact = () => {
  return <div className="contacto container-fluid">
    <div className="row  ">
      <div className="col  gx-0">
        <div className="header">
          <div className="inner-header flex">
            <h2 >Nos encantaria atender tus solicitudes, escríbenos para responderte lo más pronto posible.</h2>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <a className="mensaje text-decoration-none text-dark" href="https://wa.me/573203934252/?text=Hola, me podrian brindar más información" target="_blank">
                  <div className="mb-2"><img src="https://img.icons8.com/fluency/96/000000/whatsapp.png" /></div>
                  <h3 className="h4 mb-2">Envianos un mensaje</h3>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5 text-dark">
                <div className="mb-2"><img src="https://img.icons8.com/fluency/96/000000/shared-mail.png" /></div>
                <h3 className="h4 mb-2">Correo Ejecutivo</h3>

              </div>
            </div>

          </div>
          <div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>


        </div>
      </div>
    </div>


  </div>
};

export default Contact;
