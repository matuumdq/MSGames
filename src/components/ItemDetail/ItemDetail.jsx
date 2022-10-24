import { gFetch } from '../../helpers/gFetch'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCartContext } from '../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loading from '../Loading/Loading';



export const  ItemDetail = ({productos}) => {

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
          addItem ({...productos, count})
          setIsCount(false)
        }

  return (  
   <div className='center-div'>    
          <div 
            key={id}
            className=''>          
              <Card  bg='dark' text='light' style={{ width: '18rem' }}>
                <Card.Title as='h4' className="mb-2 mt-4 p-3">{nombre}</Card.Title>
                <Card.Img className='card-img p-4' variant="top" src={imagen} />
                  <Card.Body>                                  
                    <Card.Subtitle as='h5' className="mb-2">
                      Precio: $ {precio}
                    </Card.Subtitle>

                      <p>{detalleu}</p>
                      <p>{detalled}</p>
                      <p>{detallet}</p>

                    <Card.Footer><p>Ultimas <span  className='resaltado'>{stock} unidades en Stock!</span></p></Card.Footer>
                  </Card.Body>
                  </Card>

          </div> 
          <div className=''>
                    <div className="column-div text-center">
                        {(count <= (stock-1)) ? <Button onClick={() => setCount(count + 1)}>
                          +
                        </Button> : <Button size="sm" disabled variant='danger'> No se puede agregar Items </Button>}
                          {count}
                        {(count > 1) ? <Button onClick={() => setCount(count - 1)}> - </Button> : <Button size="sm" disabled variant='danger'> No se puede restar Items </Button>} 

                       
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
  )
}