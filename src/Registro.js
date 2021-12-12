import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';

export default function Registro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registro, setRegistro] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const changeName = ({ target: { value } }) => {
    setName(value);
  };

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const guardar = async () => {
    const newUser = {
      username: email,
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);

    const url = 'https://app-ecommerce69.herokuapp.com/user';
    try {
      const response = await axios.post(url, newUser);
      console.log(response);
      if (response.status === 201) {
        setRegistro(true);
        setTimeout(() => setRedirect(true), 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    const history = useHistory();
    history.push('/login');
  }

  return (
    <div className="fondototal2">
      <div className="row p-5 tarjeta-Contacto  d-block m-auto">
        <div className="registrar card p-3  mt-5">
          <h1 className="text-center login pb-4">REGISTRAR</h1>
          <input
            value={name}
            onChange={changeName}
            className="form-control mb-3"
            type="text"
            placeHolder="Nombre completo"
          />
          <input
            value={email}
            onChange={changeEmail}
            className="form-control mb-3"
            type="text"
            placeHolder="E-mail"
          />
          <input
            value={password}
            onChange={changePassword}
            className="form-control"
            type="text"
            placeHolder="Contraseña"
          />
          <a
            onClick={guardar}
            className="botonesLogin d-block m-auto mt-4 mb-3 text-white"
          >
            Guardar
          </a>
          {registro ? (
            <div className="alert-success p-3 mt-3">
              usuario registrado con exito, serás re dirigido al login
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
