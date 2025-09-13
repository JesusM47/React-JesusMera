import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { CardItem } from "../CardItem/CardItem"

import './Cart.css'


export const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if(cantidadTotal === 0){
        return(
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to="/ ">Comprar libro</Link>
            </>
        )
    }

  return (

<div className="resumen-compra">
  {
    carrito.map(producto => (
      <CardItem key={producto.item.id} {...producto}/>
    ))
  }

  <div className="resumen-detalles">
    <h3>Total: ${total}</h3>
    <h3>Cantidad Total: {cantidadTotal}</h3>
  </div>

  <div className="resumen-botones">
    <button className="btn-vaciar" onClick={() => vaciarCarrito()}>
      Vaciar Carrito
    </button>
    <Link className="btn-finalizar" to="/checkout">
      Finalizar Compra
    </Link>
  </div>
</div>


  )
}
