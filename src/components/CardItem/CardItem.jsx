import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"


export const CardItem = ({item, cantidad}) => {

  const {eliminarLibro} = useContext(CarritoContext)
  
  return (
    <div>

    <h4>{item.nombre}</h4>
    <p>Cantidad: {cantidad}</p>
    <p>Precio: {item.precio}</p>
    <button onClick={()=>eliminarLibro(item.id)}>Eliminar</button>
    
    </div>
  )
}
