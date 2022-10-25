import { useContext, createContext, useState } from "react"


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
      // estadoGlobal

      const [cartList, setCartList] = useState([])


      const addItem = (producto) => {
            console.log(producto)
            const estaCarrito = (cartList.findIndex(prod => prod.id === producto.id) )
            console.log(estaCarrito)
            if(estaCarrito<0){
                  setCartList([...cartList, producto])
            } else {
                  // cartList[estaCarrito].count = cartList[estaCarrito].count + producto.count
                  const nuevaCant = cartList[estaCarrito].count + producto.count
                  if(nuevaCant > cartList[estaCarrito].stock){
                        return (
                              <h1>No se Puede Superar el Stock</h1>
                        )
                  } else {
                        cartList[estaCarrito].count = cartList[estaCarrito].count + producto.count 
                  }
            }
      }

      const vaciarCarrito = () => {
            setCartList([])
      }

      const precioTotal = () => {
            return cartList.reduce((acum, prod) => acum + (prod.count * prod.precio) , 0)
        }

      const cantidadTotal = () => {
            return cartList.reduce((acum, prod) => acum += prod.count , 0)// acum = acum + cantidad
      }

      const removeItem= (id) => {
            setCartList( cartList.filter(prod => prod.id !== id) )
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