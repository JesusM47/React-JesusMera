import { useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount.jsx/ItemCount"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from 'react'
import { toast } from 'react-toastify';

import './ItemDetail.css';


export const ItemDetail = ({id, nombre, precio , foto, author, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} =useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    //Ahora crear un objeto con el item y la cantidad
    const item = {id,nombre,precio}
    agregarAlCarrito(item, cantidad);
    toast.success('Libro agregado al carrito',{ 
      autoClose: 3000, 
      position:"top-center", 
      theme: "dark",
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined})
  }

  return (
    <div className="card">


        <h2>Nombre: {nombre}</h2>
        <h3>Autor: {author}</h3>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={foto} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem nulla? Modi libero exercitationem delectus voluptatibus est incidunt, in quibusdam consectetur quia corporis cupiditate vero maxime tenetur officiis dolorum corrupti!</p>

      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }


    </div>
  )
}
