//VERSION CON DESCUENTO DE STOCK

import { useContext, useState } from "react"
import { CarritoContext} from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

export const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)

    //Funciones y validación

        const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificación de campos vacíos
        if(!nombre || !apellido || !telefono || !email || !emailConfirm){
            setError("Por favor ingresa todos los campos")
            return
        }
        if(email !== emailConfirm){
            setError("Los emails no coinciden")
            return
        }
    

    //1.- Creamos un objeto con totdos los datos de la orden de compra

    const orden = {
        items: carrito.map (libro => ({
            id: libro.item.id,
            nombre: libro.item.nombre,
            cantidad: libro.cantidad
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
    }

    //Modificar el código para ejecutar varias promesas en paralelo, 1.-Actualizar el stock, 2.- Generar la orden de compra
    //Promise.All
    //2.- Guardar la orden en la base de datos: 
    Promise.all(
        orden.items.map( async (libroOrden) => {
            const libroRef = doc(db, "libros", libroOrden.id)
            //Por cada producto en la colección "productos" obtengo una referencia, y a partir de esa referencia obtengo el DOC 
            const libroDoc = await getDoc(libroRef)
            const stockActual = libroDoc.data().stock
            //Data es un método que me permite acceder a la información del documento

            await updateDoc ( libroRef, {
                stock: stockActual - libroOrden.cantidad
            })
            //Modifico el stock y subo la información actualizada
        })
    )
    .then(() => {
        //Guardamos la orden en la base de datos
        addDoc(collection(db, "ordenes"), orden)
    .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito()
    })
    .catch(error => {
        console.log("Error al crear la orden", error)
        setError("Se produjo un error al crear la orden")
    })

    })
    .catch((error) => {
        console.log("No se pudo actualizar el stock", error)
        setError("No se puede actualizar el stock, intente en otra tienda")
    })

    
    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {carrito.map(libro => (
                <div key={libro.item.id}>
                    <p>{libro.item.nombre} X {libro.cantidad}</p>
                    <p>{libro.item.precio}</p>
                </div>
            ))}
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Teléfono</label>
                <input type="number" onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">EmailConfirm</label>
                <input type="email" onChange={(e) => setEmailConfirm(e.target.value)}/>
            </div>
            {
                error && <p style={{color: "red"}}>{error}</p>
            }

            <button type="submit">Confirmar Compra</button>
            {
                ordenId && (
                    <strong>Gracias por tu compra!! Tu numero de orden es: {ordenId}</strong>
                )
            }

        </form>
    </div>
  )
}
