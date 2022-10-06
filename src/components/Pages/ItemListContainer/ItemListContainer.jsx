import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from '../../../helpers/gFetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const ItemListContainer = () => {
      const [ productos, setProductos ] = useState([])
      const [ loading, setLoading ] = useState(true)
  
      const {idCategoria} = useParams()


      useEffect(()=>{
          if (idCategoria) {
            gFetch()  
            .then(resSgte => setProductos(resSgte.filter(producto=>producto.categoria===idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
          } else {
                  gFetch()  
                  .then(resSgte => setProductos(resSgte))
                  .catch(err => console.log(err))
                  .finally(()=> setLoading(false))
          }
          
      }, [idCategoria])


      return (
          <div className='card-prod m-auto'>

              { loading ? 
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div> 
                      :
                  productos.map( prod => 
                                            <div 
                                                  key={prod.id}
                                                  style={{ marginLeft: 70}}
                                                  className='card-producto text-center'
                                                  
                                              >          
                                                  <Card 
                                                    bg='dark'
                                                    text='light'
                                                    border= 'primary'
                                                    className="m-card"
                                                    style={{ width: '19rem' }}>
                                                      <Card.Title className="mb-3 p-4" as='h4'>{prod.nombre}</Card.Title>
                                                      <Card.Img className='card-img p-4' variant="top" src={prod.imagen}/>
                                                      <Card.Body>
                                                      
                                                      <Card.Text as='h5' className="mb-2 mt-4">
                                                            Precio: $ {prod.precio}
                                                      </Card.Text>
                                                      <Card.Footer>
                                                      <Link to={`/item/${prod.id}`}><Button className='rounded-pill' variant="primary">Detalles</Button></Link>
                                                      </Card.Footer>
                                                      </Card.Body>
                                                </Card>
                                              </div> 
                  ) 
              }
          </div>
      )
  }
  
  export default ItemListContainer