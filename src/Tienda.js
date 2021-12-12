import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Tienda({ listaCarrito, setListaCarrito }) {
  const [listaProductos, setListaProductos] = useState([]);

  const url = 'https://apimintic.herokuapp.com/api/product/';

  useEffect(() => {
    axios
      .get(url) // post(url, {})
      .then((res) => {
        setListaProductos(res.data);
      })
      .catch((e) => console.log(e, 'error'));
  }, []);

  console.log(listaProductos);

  const addToCart = (idProduct) => {
    const tempCarrito = listaCarrito;
    tempCarrito.push(idProduct);
    setListaCarrito(tempCarrito);
  };
  return (
    <div className="mt-5 fondototal">
      <h1 className="titulotienda pt-5">PAQUETES TURISTICOS</h1>
      <h2 className="frase pt-5">
        "UN VIAJE SE VIVE 3 VECES: CUANDO LO SOÑAMOS, CUANDO LO VIVIMOS Y CUANDO
        LO RECORDAMOS"
      </h2>
      <div className="row p-5">
        {listaProductos.map((producto) => (
          <div className="col-sm-4 pb-3">
            <div className="card producto maximotienda p-3">
              <img className="img-fluid imagenes" src={producto.img} />
              <h5 className="relleno">
                <b>{producto.title}</b>
              </h5>
              <h4 className="relleno">${producto.price}</h4>
              <p className="relleno">{producto.info}</p>
              <button
                onClick={() => {
                  addToCart(producto);
                }}
                className=" botonesLogin mb-2 text-white"
              >
                Agregar
              </button>
              <Link
                className=" btn btn-info mb-4 text-white"
                to={'paquetesolo/' + producto.id}
              >
                Ver
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
