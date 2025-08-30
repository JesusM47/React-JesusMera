import { useEffect, useState } from "react"
import { getUnLibro } from "../../asyncapi"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [libro, setLibro] = useState(null)

    const {idItem} = useParams()


    // useEffect(() => {
    //   const nuevoDoc = doc(getDoc, "productos", idItem)

    //   getDoc(nuevoDoc)
    //     .then(res => {
    //       const data = res.data()
    //       console.log(data)
    //       const nuevosLibros = {id: res.id, ...id}
    //       console.log(nuevosLibros)
    //       setLibro(nuevosLibros)
    //     })
    //     .catch(error => console.log(error))
    // })



    useEffect (( ) => {
        getUnLibro(idItem)
        .then(respuesta => setLibro(respuesta))
    },[idItem])

  return (
    <div>
        <ItemDetail {...libro}/>
    </div>
  )
}


