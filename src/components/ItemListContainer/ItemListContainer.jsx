import { useEffect, useState } from "react"
// import { getLibros, getLibrosCategoria } from "../../asyncapi"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../services/config"
import { collection, getDocs, query, where} from "firebase/firestore"


 const ItemListContainer = () => {

  const [libros, setLibros] = useState([])

  const {idCategoria} = useParams()

useEffect(() => {
  const misLibros = idCategoria 
    ? query(collection(db, "libros"), where("idCat", "==", idCategoria))
    : collection(db, "libros")

  getDocs(misLibros)
    .then(res => {
      const nuevosLibros = res.docs.map(doc => {
        const data = doc.data()

        return {id: doc.id, ...doc.data()}

        //   return{
        // //   id: doc.id,
        // //   ...doc.data()
        //   }
        }
      })
      setLibros(nuevosLibros)
    })
    .catch(error => console.log(error))

})


  // useEffect(() => {

  //   const funcionLibros = idCategoria ? getLibrosCategoria : getLibros


  //   funcionLibros(idCategoria)
  //     .then(res =>  setLibros(res))

  //   // getLibros()
  //   // .then (respusta => setLibros(respusta))
  //   // .catch(error => console.log(error))
  // },[idCategoria]

  //   funcionLibros(idCategoria)
  //     .then(res => () {})

  //   // getLibros()
  //   // .then (respusta => setLibros(respusta))
  //   // .catch(error => console.log(error))
  // },[])


  // console.log(libros)

  

  return (
      <>
    
          <ItemList libros={libros} />
       
    
     
      
     </>
  // return (
    
  //    <div>
  //     <h2 style={{ textAlign: "center"}}>Mis Libros</h2>
  //     <ItemList libros={libros} />
  //    </div>

  // )
)}

export default ItemListContainer