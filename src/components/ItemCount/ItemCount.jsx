import { useState } from "react"
import Button from "react-bootstrap/esm/Button"



const ItemCount = ({stock, onAdd}) => {

const [count, setCount] = useState(1)

  return (
    <div className=''>
        <div className="column-div text-center">
            
            {(count<stock) ? 
                <Button onClick={() => setCount(count + 1)}>+</Button> 
            : 
                <Button size="sm" disabled variant='danger'> No se puede agregar Items </Button>}
                <h5>{count}</h5>
            
            {(count > 1) ? 
                <Button onClick={() => setCount(count - 1)}> - </Button>
            : 
                <Button size="sm" disabled variant='danger'> No se puede restar Items </Button>} 
                <br/>
        </div>
        <Button variant='success' onClick={()=> onAdd(count)}>
        Agregar al Carrito 
        </Button>
    </div>
  )
}

export default ItemCount