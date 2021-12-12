import React, { useState, useEffect } from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/carrito">Carrito</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/tienda">Paquetes turisticos</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/login">Mi cuenta</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
