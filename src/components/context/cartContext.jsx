import { useContext, createContext, useState } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
      // estadoGlobal

      const [cartList, setCartList] = useState([])

      const addItem = (producto) => {
            const estaCarrito = (cartList.findIndex(prod => prod.id === producto.id) )
            if(estaCarrito<0){
                  setCartList([...cartList, producto])
            } else {
                  // cartList[estaCarrito].count = cartList[estaCarrito].count + producto.count
                  const nuevaCant = cartList[estaCarrito].count + producto.count
                  if(nuevaCant > cartList[estaCarrito].stock){
                              console.log('No se Puede Superar el stock')
                  } else {
                        cartList[estaCarrito].count = cartList[estaCarrito].count + producto.count
                        setCartList([...cartList])
                  }
            }
      }

      const vaciarCarrito = () => {
            const confirmar = confirm('Desea Vaciar el carrito?')
            if (confirmar){
                  setCartList([])
                  return
            }
      }

      const precioTotal = () => {
            return cartList.reduce((acum, prod) => acum + (prod.count * prod.precio) , 0)
        }

      const cantidadTotal = () => {
            return cartList.reduce((acum, prod) => acum += prod.count , 0)
      }

      const removeItem= (id) => {
            const confirmar = confirm('Desea eliminar el articulo?')
            if (confirmar){
            setCartList( cartList.filter(prod => prod.id !== id) )
            return
            }
        }


      return (
            <CartContext.Provider value = { { 
                  cartList,
                  addItem,
                  precioTotal,
                  cantidadTotal,
                  removeItem,
                  vaciarCarrito
            }}>

                  {children}
            </CartContext.Provider>
      )
}

export default CartContextProvider