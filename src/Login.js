import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [mensaje, setmensaje] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const comprobar = async () => {
    const userLogin = {
      email: email,
      password: password,
    };
    console.log(userLogin);

    const url = 'https://app-ecommerce69.herokuapp.com/users';
    try {
      const { data } = await axios.get(url);
      console.log(data);

      const userFound = data.find((user) => user.email === userLogin.email);
      console.log(userFound, 'userencontrado');
      if (!!userFound) {
        setLogin(true);
      } else {
        setmensaje('su correo no esta registrado');
      }
    } catch (error) {
      setLogin(false);
      console.log(error);
    }
  };

  const eliminar = async (userFound) => {
    console.log('eliminando', userFound.id);
    const url = 'https://app-ecommerce69.herokuapp.com/delete/' + userFound.id;
    console.log(url);
    try {
      const response = await axios.delete(url);
      console.log(response);
      const deleteMessage =
        userFound.email + 'ha sido eliminado de nuestra base de datos';
      setDeleteMessage(deleteMessage);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const encontrarParaBorrar = async () => {
    const userLogin = {
      email: email,
      password: password,
    };
    console.log(userLogin);

    const url = 'https://app-ecommerce69.herokuapp.com/users';
    try {
      const { data } = await axios.get(url);
      console.log(data);

      const userFound = data.find((user) => user.email === userLogin.email);
      console.log(userFound, 'userencontrado');
      if (!!userFound) {
        eliminar(userFound);
      } else {
        setmensaje('su correo no esta registrado');
      }
    } catch (error) {
      setLogin(false);
      console.log(error);
    }
  };

  if (login) {
    const history = useHistory();
    history.push('/');
  }

  return (
    <div className="fondototal2">
      <div className="row p-5 tarjeta-Contacto  d-block m-auto">
        <div className="registrar card  p-3 mt-5">
          <h1 className="text-center login pb-4">MI CUENTA</h1>
          <input
            value={email}
            onChange={changeEmail}
            className="form-control mb-3"
            type="text"
            placeholder="Nombre de usuario"
          />
          <input
            value={password}
            onChange={changePassword}
            className="form-control"
            type="password"
            placeholder="Contraseña"
          />
          <a
            onClick={comprobar}
            className="botonesLogin d-block m-auto mt-4 mb-3 text-white"
          >
            Ingresar
          </a>
          <a
            href="/update"
            className="botonesLogin d-block m-auto mt-3  text-white"
          >
            Actualizar
          </a>

          <a
            onClick={encontrarParaBorrar}
            className="botoneseliminar d-block m-auto mt-3 mb-2 text-white"
          >
            Eliminar cuenta
          </a>

          {!login && mensaje.length > 0 ? (
            <h5 className="alert-danger mt-3 p-3 ">{mensaje}</h5>
          ) : null}
          {deleteMessage.length > 0 ? (
            <h5 className="alert-warning mt-3 p-3 ">{deleteMessage}</h5>
          ) : null}
        </div>
      </div>
    </div>
  );
}
