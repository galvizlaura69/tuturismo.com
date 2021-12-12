import React, { useState, useEffect } from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Blog from './Blog';
import Login from './Login';
import Registro from './Registro';
import Update from './Update';
import Contacto from './Contacto';
import Tienda from './Tienda';
import PaqueteSolo from './PaqueteSolo';
import Carrito from './Carrito';

export default function App() {
  const [listaCarrito, setListaCarrito] = useState([]);
  console.log(listaCarrito, 'from router');
  return (
    <div className="container-fluid">
      <Router listaCarrito={listaCarrito}>
        <div className="row content-menu ">
          {' '}
          <Menu />
        </div>
        <div className="row">
          {' '}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/carrito">
              <Carrito
                listaCarrito={listaCarrito}
                setListaCarrito={setListaCarrito}
              />
            </Route>
            <Route path="/update">
              <Update />
            </Route>
            <Route path="/tienda">
              <Tienda
                listaCarrito={listaCarrito}
                setListaCarrito={setListaCarrito}
              />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/paquetesolo/:id/">
              <PaqueteSolo
                listaCarrito={listaCarrito}
                setListaCarrito={setListaCarrito}
              />
            </Route>
            <Route path="/registro">
              <Registro />
            </Route>
            <Route path="/">
              <Blog />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
