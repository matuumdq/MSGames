import { gFetch } from '../../helpers/gFetch'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCartContext } from '../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loading from '../Loading/Loading';
import './ItemDetail.css'




export const  ItemDetail = ({productos}) => {
console.log(productos)
      // estados
      const [count, setCount] = useState(1)
      const [isCount, setIsCount] = useState(true)
      const { addItem } = useCartContext()
      
      // useEffect(() => {
      //   const db = getFirestore()
      //   const queryDoc = doc(db, 'productos', idProducto)
      //   getDoc(queryDoc)
      //     .then(resp=> setProductos({id: resp.id, ...resp.data()}))
      //     .catch(()=>console.error())
      //     .finally(()=> setLoading(false))
      // }, [])



      // useEffect(()=> {
      //   if (idCategoria){
      //   const db = getFirestore()
      //   const queryCollector = collection(db, 'productos')

      //   const queryFilter = query(queryCollector, where('categoria', '==', idCategoria))
        
      //   // const queryFilter = query(queryCollector, where('precio', '>', 85000), limit(5), orderBy('precio', 'desc'))

      //   getDocs(queryFilter)
      //       .then(resp => setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))

      //       .catch(()=>console.error())
      //       .finally(()=> setLoading(false))
      //   } else {
      //       const db = getFirestore()
      //       const queryCollector = collection(db, 'productos')
      //       getDocs(queryCollector)
      //       // .then(resp2=>console.log(resp2.docs.map(prod=>({...prod.data()})))
      //       // .then(resp => console.log(resp.docs.map(prod=>({id:prod.id, ...prod.data(), ...prod.categoria}))))
      //       .then(resp => setProductos(resp.docs.map(prod=>({...prod.data()}))))
      //       .catch(()=>console.error())
      //       .finally(()=> setLoading(false))
      //   }
      // },[idCategoria])
      // useEffect(()=>{
      //       if (idProducto) {
      //         gFetch()  
      //         .then(resSgte => setProductos(resSgte.find(producto=>producto.id===idProducto)))
      //         .catch(err => console.log(err))
      //         .finally(()=> setLoading(false))
      //       } else {
      //         gFetch()  
      //         .then(resSgte => setProductos(resSgte))
      //         .catch(err => console.log(err))
      //         .finally(()=> setLoading(false))
      //       }
            
      //   }, [idProducto])

     const {nombre, imagen, precio, detalleu, detalled, detallet, stock, id} = productos

        const onAdd = (count) => {
            console.log(count)
            addItem ({...productos, count})
            setIsCount(false)
        }

  return (  
    <>
    <div className='center-div bg'>    
            <div 
                key={id}
                className='detail'>                                         
                <p>{nombre}</p> 
                <img src={imagen} 
                style={{ width: '15rem', display: 'block' }}/>
                Precio: $ {precio}

                <p>{detalleu}</p>
                <p>{detalled}</p>
                <p>{detallet}</p>
                <p> Ultimas <span style={{color:'red'}}>{stock} unidades en Stock!</span></p>     

            </div> 
            <div className=''>
                <div className="column-div text-center">
                    {(count <= (stock-1)) ? <Button onClick={() => setCount(count + 1)}>
                        + 
                    </Button> 
                        : 
                    <Button size="sm" disabled variant='danger'> No se puede agregar Items </Button>}<br/>
                        {count}
                        <br/><br/>{(count > 1) ? <Button onClick={() => setCount(count - 1)}> - </Button> : <Button size="sm" disabled variant='danger'> No se puede restar Items </Button>} 
                   
                        <br/>
                        {isCount ? 
                        <Button variant='success' onClick={()=> onAdd(count)}><ItemCount/></Button>
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
    </>
  )
}