import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
  console.log(prod.id)
  return (
    <>  
        <div 
              key={prod.id}
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
        </>
  )
}

export default Item