import { useEffect, useState } from "react"
import { getUnLibro } from "../../asyncapi"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



export const ItemDetailContainer = () => {

    const [libro, setLibro] = useState(null)

    const {idItem} = useParams()

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


