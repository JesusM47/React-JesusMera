import { useEffect, useState } from "react"

// import { getLibros, getLibrosCategoria } from "../../asyncapi"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { db } from "../../services/config"
import { collection,getDocs, query, where } from "firebase/firestore"
import { Loader } from "../Loader/Loader"



 const ItemListContainer = () => {

  const [libros, setLibros] = useState([])

  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()

  useEffect (() => {

    setLoading(true)

    const misLibros = idCategoria ? query(collection(db, "libros"), where("genero", "==", idCategoria)) : collection(db, "libros")

    getDocs(misLibros)
      .then(res => {
        const nuevosLibros = res.docs.map(doc => {
          const data = doc.data()
          return{id: doc.id, ...data}
        })
          setLibros(nuevosLibros)
      })
      .catch(error => console.log(error))
      .finally(() => {
        console.log("Proceso Terminado")
        setLoading(false)
      })
  },[idCategoria])



  // useEffect(() => {
 
  //   const funcionLibros = idCategoria ? getLibrosCategoria : getLibros

  //   funcionLibros(idCategoria)
  //     .then(res =>  setLibros(res))

  //   // getLibros()
  //   // .then (respusta => setLibros(respusta))
  //   // .catch(error => console.log(error))
  // },[idCategoria])

  // console.log(libros)

  

  return (
      <>
    
          {loading ? <Loader /> : <ItemList libros={libros} /> }
          
       
    
     
      
     </>

  )
}

export default ItemListContainer