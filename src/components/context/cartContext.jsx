import { useEffect } from "react"
import { useContext, createContext, useState } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
      // estadoGlobal

      const [cartList, setCartList] = useState([])
      const errores = []
      const [isId, setIsId] = useState([])

      useEffect(()=> {
            const takeLS = () => {
                  const LS = JSON.parse(localStorage.getItem('cartList')) ?? []
                  setCartList(LS)
            }
            takeLS()
      },[])

      useEffect(() => {
            localStorage.setItem('cartList', JSON.stringify(cartList))
      }, [cartList])

      useEffect(()=> {
            const takeLSOrders = () => {
                  const LSOrders = JSON.parse(localStorage.getItem('isId')) ?? []
                  setIsId(LSOrders)
            }
            takeLSOrders()
      },[])

      useEffect(() => {
            localStorage.setItem('isId', JSON.stringify(isId))
      }, [isId])
      

      const addItem = async(producto) => {
            const isInCart = (cartList.findIndex(prod => prod.id === producto.id) )
            if(isInCart<0){
                  setCartList([...cartList, producto])
            } else {
                  const newCount = cartList[isInCart].count + producto.count
                  if(newCount > cartList[isInCart].stock){ 
                        errores.push('No se Puede Superar el stock')
                  } else {
                        cartList[isInCart].count = cartList[isInCart].count + producto.count
                        setCartList([...cartList])
                  }
            } 
      }

      const clearCart = () => {
            const confirmation = confirm('Desea Vaciar el carrito?')
            if (confirmation ){
                  setCartList([])
            }
      }

      const totalPrice = () => {
            return cartList.reduce((acum, prod) => acum + (prod.count * prod.precio) , 0)
      }

      const totalCount = () => {
            return cartList.reduce((acum, prod) => acum += prod.count , 0)
      }

      const removeProd= (id) => {
            const confirmation  = confirm('Desea eliminar el articulo?')
            if (confirmation ){
            setCartList( cartList.filter(prod => prod.id !== id) )
            return
            }
      }

      return (
            <CartContext.Provider value = { { 
                  cartList,
                  setCartList,
                  addItem,
                  isId, 
                  setIsId,
                  errores,
                  totalPrice,
                  totalCount,
                  removeProd,
                  clearCart
            }}>
                  {children}
            </CartContext.Provider>
      )
}

export default CartContextProvider