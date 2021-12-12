import React, { useState, useEffect } from 'react';
import './style.css';

export default function Blog() {
  return (
    <div className="fondototal">
      <div className="row portadaHome">
        <div className="col-sm-12">
          <h1 className="titulo">TU TURISMO BOG-COL</h1>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <h2 className="frase mb-5 mt-5">
          "UN VIAJE SE VIVE 3 VECES: CUANDO LO SOÑAMOS, CUANDO LO VIVIMOS Y
          CUANDO LO RECORDAMOS"
        </h2>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <h4 className="parrafo pb-4">¿PORQUE VIAJAR?</h4>
          <p className="parrafo pb-5">
            Las razones para viajar son incalculables y diferentes porque
            dependen de cada persona. Viajamos para romper con la rutina, para
            tomar distancia de lo cotidiano. Para conocer y experimentar de
            primera mano nuevas culturas, formas de vida. ... Porque viajar es
            un ejercicio de tolerancia, paciencia, audacia y perspicacia.
          </p>
          <a className="botonesblog" href="/tienda">
            Conoce nuestros paquetes
          </a>
        </div>
        <div className="col-sm-6">
          <img
            className="imagenes"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/viajes-para-aprender-ingles.jpg?alt=media&token=d312ace4-4dca-41e8-a894-90590d7e748e"
          />
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <img
            className="imagenes"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/viajar-feliz_0.jpg?alt=media&token=08a5bea3-7c3d-463d-9880-1190beb549b6"
          />
        </div>
        <div className="col-sm-6">
          <h4 className="parrafo pb-4">VIAJAR TE HACE FELICES</h4>
          <p className="parrafo mb-5">
            Viajar nos hace felices porque nos ofrece la oportunidad de salirnos
            de nuestra trillada y plebeya realidad, y nos provee una plataforma
            para explorar y practicar nuestras visiones ideales de nosotros
            mismos, quiénes seríamos si no estuviéramos casados con nuestros
            miedos y ansiedades.
          </p>
          <a className="botonesblog botones" href="/tienda">
            Conoce nuestros paquetes
          </a>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6">
          <h4 className="parrafo mb-4">CONOCOCER LUGARES NUEVOS</h4>
          <p className="parrafo mb-5">
            Abres tu mente: Conocer nuevas culturas permite ampliar los
            horizontes, nos educa y ayuda a entender el mundo mucho mejor.
            Salir, viajar, conocer es una oportunidad de darnos cuenta todas las
            maravillas multiculturales que existen, vivir nuevas experiencias
            que permanecerán como buenos recuerdos.
          </p>
          <a className="botonesblog" href="/tienda">
            Conoce nuestros paquetes
          </a>
        </div>
        <div className="col-sm-6">
          <img
            className="imagenes"
            src="https://firebasestorage.googleapis.com/v0/b/tienda-5bf0e.appspot.com/o/vivir-viajando-es-barato-3.jpg?alt=media&token=4f1d8db5-fb86-4cea-9884-ac565dbbabfd"
          />
        </div>
      </div>
    </div>
  );
}
