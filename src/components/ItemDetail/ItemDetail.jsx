import { gFetch } from '../../helpers/gFetch'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





export const ItemDetail = () => {

      // estados
      const { idProducto } = useParams()
      const [ productos, setProductos ] = useState([])
      const [count, setCount] = useState(1)

      useEffect(()=>{
            if (idProducto) {
              gFetch()  
              .then(resSgte => setProductos(resSgte.find(producto=>producto.id===idProducto)))
              .catch(err => console.log(err))
            } else {
                    gFetch()  
                    .then(resSgte => setProductos(resSgte))
                    .catch(err => console.log(err))
            }
            
        }, [idProducto])

        const {nombre, categoria, precio, detalleu, detalled, detallet, id, imagen, stock} = productos

  return (         
          <div 
            key={id}
            style={{ marginLeft: 100}}
            className='col-md-3 mt-5 text-center m-auto'>          
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

                <Card.Footer>Stock: {stock}</Card.Footer>
                <div className="d-grid gap-2">
                {(count <= (stock-1)) ? <Button onClick={() => setCount((count) => count + 1)}>
                  +
                </Button> : <Button size="sm" disabled variant='danger'> No se puede agregar Items </Button>}
          {count}
          { (count >= 1) ? <Button onClick={() => setCount((count) => count - 1)}> - </Button> : <Button size="sm" disabled variant='danger'> No se puede restar Items </Button>} 
          <Button>Agregar Al Carrito</Button></div>
                                                      </Card.Body>
                                                </Card>
                                              </div>  
  )
}