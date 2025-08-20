
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>

<BrowserRouter>

<NavBar />
<ItemDetailContainer />

<Routes>

  <Route path='/' element={<ItemListContainer />}/>
  <Route />
  <Route />

</Routes>
</BrowserRouter>

    </>
  )
}

export default App
