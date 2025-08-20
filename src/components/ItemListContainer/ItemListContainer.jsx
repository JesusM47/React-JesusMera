import { useEffect, useState } from "react"
import { getLibros, getLibrosCategoria } from "../../asyncapi"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

  const [libros, setLibros] = useState([])

  const {idCategoria} = useParams()

  useEffect(() => {

    const funcionLibros = idCategoria ? getLibrosCategoria : getLibros

    funcionLibros(idCategoria)
      .then(res => )

    // getLibros()
    // .then (respusta => setLibros(respusta))
    // .catch(error => console.log(error))
  },[])

  console.log(libros)


  return (
    
     <div>
      <h2 style={{ textAlign: "center"}}>Mis Libros</h2>
      <ItemList libros={libros} />
     </div>

  )
}
