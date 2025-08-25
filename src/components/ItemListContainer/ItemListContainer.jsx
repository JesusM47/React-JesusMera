import { useEffect, useState } from "react"

import { getLibros, getLibrosCategoria } from "../../asyncapi"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



 const ItemListContainer = () => {

  const [libros, setLibros] = useState([])

  const {idCategoria} = useParams()

  useEffect(() => {

    const funcionLibros = idCategoria ? getLibrosCategoria : getLibros

    funcionLibros(idCategoria)
      .then(res =>  setLibros(res))

    // getLibros()
    // .then (respusta => setLibros(respusta))
    // .catch(error => console.log(error))
  },[idCategoria])

  console.log(libros)

  

  return (
      <>
    
          <ItemList libros={libros} />
       
    
     
      
     </>

  )
}

export default ItemListContainer