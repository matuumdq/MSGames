import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../context/cartContext';
import './CartWidget.css'


export const CartWidget = () => {
  const { cartList, totalCount } = useCartContext()

  return (
    <>
    {cartList.length ? 
      <div className='flex'> 
        <div className='iconSize'> {totalCount()} </div>
        <AiOutlineShoppingCart color='grey' size={35}/>
      </div>     
    :
        <div>
        <AiOutlineShoppingCart color='grey' size={35}/>
        </div>
    }
    
    </>
  )
}