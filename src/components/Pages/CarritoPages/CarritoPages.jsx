import { collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import './CarritoPage.css'


export default function CarritoPage(){

    const { cartList, vaciarCarrito, precioTotal, removeItem} = useCartContext()

    const  [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email:''

    })

    const generarOrden = async (e)=>{
        e.preventDefault()

        console.log('Orden Generada')
        const orden = {}
        
        orden.buyer= {
            name: dataForm.name,
            phone: dataForm.phone,
            email: dataForm.email
        }

        orden.products= cartList.map(prod => {
            const {id, name: title, price} = prod
            return {id, title, price}
        })

        orden.total= precioTotal()

        const db = getFirestore()
        const orders = collection(db, 'orders')
        .then(resp => console.log('resp'))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }

  //update
  // const db = getFirestore()
  // const orderDoc = doc(db, 'productos', 'DQI3UNleLD3DZElHNwwE')
  // updateDoc(orderDoc, {
  //   stock: (stock-1)
  // })
  // .then(resp=> console.log('prod act'))
  // .catch(err=> console.log(err))

  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}

  return ( 
    <>
    { cartList.length ? 
            <div className="centrado">
            <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom:'50px'}}>Finaliza tu compra!</h1>
            <ul className="lista">
                {cartList.map(producto => 
                <li key={producto.id}>
                    <div 
                    className="flex-carrito" > 
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
            <form onSubmit={generarOrden}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    name="phone" 
                    value={dataForm.phone}
                    placeholder="Teléfono" 
                    onChange={handleInputChange}
                />
                <input 
                    type="text" 
                    name="email"
                    value={dataForm.email}
                    placeholder="Email" 
                    onChange={handleInputChange}
                />
                <Button type="submit">Generar Orden</Button>
            </form>
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