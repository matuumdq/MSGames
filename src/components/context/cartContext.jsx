import { useContext, createContext, useState } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
      // estadoGlobal

      const [cartList, setCartList] = useState([])


      const addItem = (producto) => {
            setCartList([...cartList, producto])
      }

      const vaciarCarrito = () => {
            setCartList([])
      }


      return (
            <CartContext.Provider value = { { 
                  cartList,
                  addItem,
                  vaciarCarrito
            }}>

                  {children}
            </CartContext.Provider>
      )
}

export default CartContextProvider