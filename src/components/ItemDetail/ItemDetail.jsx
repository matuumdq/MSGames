import { isRouteErrorResponse, Link, useParams } from "react-router-dom"
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useCartContext } from '../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Error from "../Error/Error";





export const  ItemDetail = ({products}) => {

        const [isCount, setIsCount] = useState(true)
        const { addItem, errores } = useCartContext()
        const {nombre, imagen, precio, detalleu, detalled, detallet, stock, id} = products
        
        const onAdd = (count) => {
            addItem ({...products, count})
            setIsCount(false)
                if (errores.length) {
                    setTimeout(() => {
                        errores.splice(0,errores.length)
                    }, 2000);
                }
        }

  return (  
    <div className='detalle'>  
        <div className='detallado'>
            <div 
                key={id}
                className='detail'>                                         
                <p className="titulo">{nombre}</p> 
                <img src={imagen} 
                style={{ width: '15rem', display: 'block' }}/>
                <h3>Precio: $ {precio}</h3>

                <p className="texto-detalle">{detalleu}</p>
                <p className="texto-detalle">{detalled}</p>
                <p className="texto-detalle">{detallet}</p>
                <p className="texto-detalle"> Ultimas <span style={{color:'red'}}>{stock} unidades en Stock!</span></p>     
               
            </div> 
            <div className='centrar-boton'>
            {errores.length ? <Error>{errores}</Error> : null}
            {isCount ? 
                    <ItemCount onAdd={onAdd} stock={products.stock} key={id}/>    
                    :
                    <div>
                        <br/>
                        <Link to='/'>
                        <Button>Seguir Comprando</Button>
                        </Link>
                        <br/><br/>
                        <Link to='/cart'>
                        <Button>Terminar compra</Button>
                        </Link>
                    </div>
            }
            </div>
        </div>   
    </div> 
  )
}