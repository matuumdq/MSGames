import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../context/cartContext';


export const CartWidget = () => {
  const { cartList } = useCartContext()
  const numero = cartList.length

  return (
    <>
    {cartList.length ? 
        <div className='iconSize'> {numero} <AiOutlineShoppingCart size={35}/>
        </div> 
    :
    <div className='iconSize'>
        <AiOutlineShoppingCart size={35}/>
        </div>
    }
    
    </>
  )
}