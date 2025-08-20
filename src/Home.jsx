
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Error } from './components/Error/Error'

const App = () => {

  return (
    <>

<BrowserRouter>

<NavBar />


<Routes>

  <Route path='/' element={<ItemListContainer />}/>
  <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
  <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
  <Route path='*' element={<Error />}></Route>

</Routes>
</BrowserRouter>

    </>
  )
}

export default App
