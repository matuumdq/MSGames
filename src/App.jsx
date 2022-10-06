import './App.css'
import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category' element={ <ItemListContainer />}/>
        <Route path='/category/:idCategoria' element={ <ItemListContainer />}/>
        <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
      
    )
}

export default App
