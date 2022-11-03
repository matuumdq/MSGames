import './App.css'
import NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './components/context/cartContext'
import CarritoPage from './components/Pages/CarritoPages/CarritoPages'
import PageNotFound from './components/PageNotFound/PageNotFound'




function App() {

  return (
    <CartContextProvider >
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category' element={ <ItemListContainer />}/>
        <Route path='/category/:idCategoria' element={ <ItemListContainer />}/>
        <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CarritoPage/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
      
    )
}

export default App