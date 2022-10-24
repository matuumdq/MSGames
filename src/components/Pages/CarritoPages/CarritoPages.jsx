import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/cartContext"

// import  useContext from 'react'
// import CartContext from '../context/cartContext'


export default function CarritoPage(){

  // const generarOrden = async(e) => {
  //   e.preventDefault()
  //   const orden = { 
  //     buyer: {
  //       nombre: 'Mateo',
  //       phone: 11111,
  //       email: 'mateo@mateo.com'
  //     },
  //     items = items.map(prod {
  //       const {id, name:nombre, precio} = producto
  //       return

  //     }
  //   }
  // }

  //update
  // const db = getFirestore()
  // const orderDoc = doc(db, 'productos', 'DQI3UNleLD3DZElHNwwE')
  // updateDoc(orderDoc, {
  //   stock: (stock-1)
  // })
  // .then(resp=> console.log('prod act'))
  // .catch(err=> console.log(err))


  const { cartList, vaciarCarrito } = useCartContext()
  console.log(cartList)

  const [tot, setTot] = useState(0)

  return (
    <div>

      <h1>Carrito</h1>
      <ul><p>
        {cartList.map(producto => <li> {<img className='card-img-carrito' src={producto.imagen} alt="" /> } Producto: {producto.nombre} {producto.categoria} precio: {producto.precio} Cantidad: {producto.count} </li> )}</p>
      </ul>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}