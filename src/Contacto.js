import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [inquietudes, setInquietudes] = useState('');
  const [comentario, setComentario] = useState('');

  const [registro, setRegistro] = useState(false);

  const changeName = ({ target: { value } }) => {
    setName(value);
  };

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changeTelefono = ({ target: { value } }) => {
    setTelefono(value);
  };
  const changeInquietudes = ({ target: { value } }) => {
    setInquietudes(value);
  };
  const changeComentario = ({ target: { value } }) => {
    setComentario(value);
  };

  const guardar = async () => {
    const newUser = {
      username: email,
      name: name,
      email: email,
      telefono: telefono,
      inquietudes: inquietudes,
      comentario: comentario,
    };
    console.log(newUser);

    const url = 'https://misiontic-g02.herokuapp.com/contacto/';
    try {
      const response = await axios.post(url, newUser);
      console.log(response);
      if (response.status === 201) {
        setRegistro(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fondototal2 ">
      <div className="row p-5 tarjeta-Contacto  d-block m-auto">
        <div className="registrar card p-3  mb-3 mt-5">
          <h1 className="text-center contacto pb-4">CONTACTANOS</h1>
          <input
            value={name}
            onChange={changeName}
            className="form-control mb-3"
            type="text"
            placeHolder="Nombre"
          />
          <input
            value={telefono}
            onChange={changeTelefono}
            className="form-control mb-3"
            type="number"
            placeHolder="Telefono"
          />
          <input
            value={email}
            onChange={changeEmail}
            className="form-control mb-3"
            type="text"
            placeHolder="E-mail"
          />
          <textarea
            value={inquietudes}
            onChange={changeInquietudes}
            className="form-control mb-3"
            type="text"
            placeHolder="Inquietudes"
          />
          <textarea
            value={comentario}
            onChange={changeComentario}
            className="form-control mb-3"
            type="text"
            placeHolder="Comentarios"
          />

          <button
            onClick={guardar}
            className="botonesLogin d-block m-auto mt-4 mb-3 text-white"
          >
            Enviar
          </button>
          {registro ? (
            <div className="alert-success p-3 mt-3">
              Su mensaje ha sido enviado exitosamente!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
