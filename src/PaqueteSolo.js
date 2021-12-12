import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.css';

export default function PaqueteSolo({ listaCarrito, setListaCarrito }) {
  const [productoMostrar, setProductoMostrar] = useState();
  let { id } = useParams();
  const url = 'https://apimintic.herokuapp.com/api/product/';

  useEffect(async () => {
    const { data } = await axios.get(url);
    console.log(data, id);
    const producto = data.find((p) => p.id === parseInt(id));
    setProductoMostrar(producto);
  }, []);

  const addToCart = (idProduct) => {
    console.log(idProduct);
    const tempCarrito = listaCarrito;
    tempCarrito.push(idProduct);
    setListaCarrito(tempCarrito);
    console.log(listaCarrito);
  };

  return (
    <div className="mt-5 fondototal2">
      <div className="row pb-5 mt-5">
        <div className=" col-sm-8">
          <div className="card p-3 maximoProducto">
            <img className="img-fluid imagenP " src={productoMostrar?.img} />
          </div>
        </div>

        <div className="col-sm-4 ">
          <div className="card p-3 maximoProducto">
            <h1 className="relleno">
              <b>{productoMostrar?.title}</b>
            </h1>
            <h2 className="relleno">{productoMostrar?.price}</h2>
            <p className="relleno">{productoMostrar?.info}</p>
            <button
              onClick={() => {
                addToCart(productoMostrar);
              }}
              className=" botonesLogin text-white  mb-4"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
