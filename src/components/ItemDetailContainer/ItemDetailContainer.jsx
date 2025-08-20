import { useEffect, useState } from "react"
import { getUnLibro } from "../../asyncapi"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {

    const [libro, setLibro] = useState(null)

    useEffect (( ) => {
        getUnLibro(10)
        .then(respuesta => setLibro(respuesta))
    },[])

  return (
    <div>
        <ItemDetail {...libro}/>
    </div>
  )
}


