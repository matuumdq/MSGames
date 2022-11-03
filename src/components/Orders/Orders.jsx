import { useCartContext } from '../context/cartContext'
import './Orders.css'

const Orders = () => {

      const { isId } = useCartContext()

  return (
      <>
            <ul className='orders'> Sus Ordenes: 
                {isId.map (ord => 
                <li className='order-list' key={ord.id}>{ord.id}</li>
          )}</ul>
      </>
  )
}

export default Orders