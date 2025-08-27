import { createContext, useState } from "react";

export const CarritoContext = createContext({

    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = () => {
    //Creamos el estado para el carrito, total y cantidadTotal
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //agregar algunas funciones auxiliares para la logica del carrito

    const agregarAlCarrito = (item, cantidad) => {

        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente){
            setCarrito(prev => [...prev, {item,cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev=> prev +(item.precio * cantidad))
            //La sintaxis: prev -> [...prev, {item,cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el producto agregado.
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod
                }
            })
        }
    }

    return(
        <>
        </>
    )
}