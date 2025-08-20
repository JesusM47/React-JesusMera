import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, nombre, precio, foto}) => {
  return (
    <div>
        <img src={foto} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
        </Link> 
    </div>
  )
}
