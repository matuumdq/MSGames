import { addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"
import Error from "../../Error/Error"
import './CarritoPage.css'




export default function CarritoPage(){

    const { cartList, setCartList, clearCart, totalPrice, removeProd} = useCartContext()

    const [error, setError] = useState(false)
    const [errorMail, setErrorMail] = useState(false)
    const [isId, setIsId] = useState('')

    const  [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email:'',
        remail: ''
    })

    const orderGenerator = async (e)=>{
        e.preventDefault()
        if (dataForm.name !== '' && dataForm.phone !== '' && dataForm.email !== '' && dataForm.remail !== ''){
            if (dataForm.email === dataForm.remail){
    
                const orden = {}
                
                orden.buyer= {
                    name: dataForm.name,
                    phone: dataForm.phone,
                    email: dataForm.email
                }
        
                orden.products= cartList.map(prod => {
                    const {id, nombre, precio, count} = prod
                    return {id, nombre, precio, count}
                })
        
                orden.total= totalPrice()
        
                const db = getFirestore()
                const orders = collection(db, 'orders')
                addDoc(orders, orden) 
                .then(resp => setIsId(resp.id))
                .catch(err => console.log(err))
                .finally(()=>setCartList([]))
            } else {
                setErrorMail(true)
                setTimeout(() => {
                    setErrorMail(false)
                }, 3000);
            }

        } else {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            }

        const db = getFirestore()
        const queryCollection = collection(db, 'productos')

        const queryActulizarStock = await query(
          queryCollection,
          where( documentId() , 'in', cartList.map(prod => prod.id) )          
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
          .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(prod => prod.id === res.id).count
        }) ))

        batch.commit()
        console.log('stock actualizado')

        }



  const handleInputChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
}

  return ( 
    <>
    { isId && <p className="order">Su orden fue generada con Exito: <span className="order-span">{isId}</span> </p>}
    { cartList.length ? 
            <div className="centrado">
            <h1 style={{textAlign: 'center', marginTop: '40px', marginBottom:'50px'}}>Finaliza tu compra!</h1>
            <ul className="lista">
                {cartList.map(product => 
                <li key={product.id}>
                    <div 
                    className="flex-carrito" > 
                        {<img className='card-img-carrito' src={product.imagen} alt="" /> } 
                        <div className="flex-lista">
                            <p className="parrafos">Producto: {product.nombre}</p>
                            <p className="parrafos">Precio: {product.precio} </p>
                            <p className="parrafos">Cantidad: {product.count}</p> 
                        </div>
                        <Button className="boton" variant='danger' onClick={()=>removeProd(product.id)}> Quitar </Button>
                    </div>
                </li> 
            )}
            </ul>

            <div className="footer">
            <h3>Total: ${totalPrice()}</h3>
            
            <form 
                onSubmit={orderGenerator}
                className='formulario'>
                {error && <Error> Todos los campos son Obligatorios </Error> }
                {errorMail && <Error> El Mail debe ser el mismo </Error> }  
                <input 
                    type="text" 
                    name="name"
                    placeholder="Nombre" 
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input 
                    type="number"
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
                <input 
                    type="text" 
                    name="remail"
                    value={dataForm.remail}
                    placeholder="Confirmar Email" 
                    onChange={handleInputChange}
                />
                <Button variant='success' type="submit">Generar Orden</Button>
            </form>
                  
            </div>
            <div className="d-grid ">
                <Button variant='danger' onClick={clearCart} size="lg" className="d-grid">Vaciar carrito</Button>
                </div> 
            </div>
        :
            <div className="carrito-empty">
                <p>Agrega un Articulo para empezar a comprar</p>
                <Link to='/'>
                    <Button>Empezar a comprar</Button>
                </Link>
            </div>
    }
    </>
  )
}