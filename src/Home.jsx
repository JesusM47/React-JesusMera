
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Error } from './components/Error/Error'
import { CarritoProvider } from './context/CarritoContext'
import { CardItem } from './components/CardItem/CardItem'
import { Cart } from './components/Cart/Cart'

const App = () => {

  return (
    <>

<BrowserRouter>
<CarritoProvider>

  <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
      <Route path='item/:idItem' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Error />}></Route>
    </Routes>

</CarritoProvider>
</BrowserRouter>

    </>
  )
}

export default App
