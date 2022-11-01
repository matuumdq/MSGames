import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../context/cartContext';


export const CartWidget = () => {
  const { cartList, totalCount } = useCartContext()

  return (
    <>
    {cartList.length ? 
        <div className='iconSize'> {totalCount()} <AiOutlineShoppingCart size={35}/>
        </div> 
    :
    <div className='iconSize'>
        <AiOutlineShoppingCart size={35}/>
        </div>
    }
    
    </>
  )
}