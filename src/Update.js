import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [mensaje, setmensaje] = useState('');
  const [updateMessage, setupdateMessage] = useState('');

  const changeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const changePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const changeNewEmail = ({ target: { value } }) => {
    setNewEmail(value);
  };

  const actualizar = async (userFound) => {
    const newUser = {
      username: userFound.username,
      name: userFound.username,
      email: newEmail,
      password: '1234',
    };
    console.log('actualizando', newUser);
    const url = 'https://app-ecommerce69.herokuapp.com/update/' + userFound.id;
    console.log(url);

    try {
      const response = await axios.put(url, newUser);
      console.log(response);
      const updateMessage = userFound.email + 'ha sido actualizado';
      setupdateMessage(updateMessage);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const encontrarParaActualizar = async () => {
    const userUpdate = {
      email: email,
      password: password,
    };
    // console.log(userUpdate);

    const url = 'https://app-ecommerce69.herokuapp.com/users';
    try {
      const { data } = await axios.get(url);
      // console.log(data);

      const userFound = data.find((user) => user.email === userUpdate.email);
      if (!!userFound) {
        actualizar(userFound);
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
        <div className="registrar card tarjeta p-3 d-block m-auto mt-5">
          <h1 className="text-center login pb-4">ACTUALIZAR</h1>
          <input
            value={email}
            onChange={changeEmail}
            className="form-control mb-3"
            type="text"
            placeholder="E-mail"
          />
          <input
            value={newEmail}
            onChange={changeNewEmail}
            className="form-control mb-3"
            type="text"
            placeholder="Nuevo email"
          />
          <input
            value={password}
            onChange={changePassword}
            className="form-control mb-3"
            type="password"
            placeholder="Contraseña"
          />

          <a
            onClick={encontrarParaActualizar}
            className="botonesLogin  d-block m-auto mt-4 mb-3 text-white"
          >
            Guardar
          </a>

          {mensaje.length > 0 ? (
            <h5 className="alert-danger mt-3 p-3 ">{mensaje}</h5>
          ) : null}

          {updateMessage.length > 0 ? (
            <h5 className="alert-warning mt-3 p-3 ">{updateMessage}</h5>
          ) : null}
        </div>
      </div>
    </div>
  );
}
