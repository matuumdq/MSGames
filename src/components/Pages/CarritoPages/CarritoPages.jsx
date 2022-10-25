import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { useCartContext } from "../../context/cartContext"


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

  const { cartList, vaciarCarrito, precioTotal, removeItem} = useCartContext()

  return (
    <div>

      <h1>Carrito</h1>
      <ul>
        {cartList.map(producto => <li> {<img className='card-img-carrito' src={producto.imagen} alt="" /> } 
        Producto: {producto.nombre} {producto.categoria} Precio: {producto.precio}  Cantidad: {producto.count} <Button variant='danger' onClick={()=>removeItem(producto.id)}> Quitar </Button></li> 
      )}
      </ul>

      <h3>Total: ${precioTotal()}</h3>

      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}