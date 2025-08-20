import { useState } from "react"
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount.jsx/ItemCount";

export const ItemDetail = ({id, nombre, precio , foto, author, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados" + cantidad)
  }

  return (
    <div>
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
