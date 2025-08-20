import React from 'react'

export const Item = ({id, nombre, precio, foto}) => {
  return (
    <div>
        <img src={foto} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <button>Ver detalles</button>
    </div>
  )
}
