import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import './CarritoPage.css'


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

//   if (cartList.length > 0 ) {
//     setisCart(true)
//     return
//   }

//   console.log(isCart)

  return ( 
    <>
    { cartList.length ? 
            <div className="centrado">
            <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom:'50px'}}>Finaliza tu compra!</h1>
            <ul className="lista">
                {cartList.map(producto => 
                <li>
                    <div 
                    className="flex-carrito" 
                    key={producto.id}> 
                        {<img className='card-img-carrito' src={producto.imagen} alt="" /> } 
                        <div className="flex-lista">
                            <p className="parrafos">Producto: {producto.nombre}</p>
                            <p className="parrafos">Precio: {producto.precio} </p>
                            <p className="parrafos">Cantidad: {producto.count}</p> 
                        </div>
                        <Button className="boton" variant='danger' onClick={()=>removeItem(producto.id)}> Quitar </Button>
                    </div>
                </li> 
            )}
            </ul>

            <div className="footer">
            <h3>Total: ${precioTotal()}</h3>
                <div className="d-grid ">
                <Button variant='danger' onClick={vaciarCarrito} size="lg" className="d-grid">Vaciar carrito</Button>
                </div>   
            </div>
            </div>
        :
            <div>
                <h1>Agrega un Articulo para empezar a comprar</h1>
                <Link to='/'>
                    <Button>Empezar a comprar</Button>
                </Link>
            </div>
    }
    </>
  )
}