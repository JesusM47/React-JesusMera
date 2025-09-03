import { useContext, useState } from "react"
import { CarritoContext} from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

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

    //2.- Guardar la orden en la base de datos
    addDoc(collection(db, "ordenes"), orden)
    .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito()
    })
    .catch(error => {
        console.log("Error al crear la orden", error)
        setError("Se produjo un error al crear la orden")
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
