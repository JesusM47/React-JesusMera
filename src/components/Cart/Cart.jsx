import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { CardItem } from "../CardItem/CardItem"


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
    <div>
        {
            carrito.map(producto => <CardItem key={producto.id} {...producto}/>)
        }
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout">Finalizar Compra</Link>
    </div>
  )
}
