import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading"
import  {ItemDetail} from '../../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const { idProducto } = useParams()
    const [ productos, setProductos ] = useState({})
    const [ loading, setLoading ] = useState(true)
    
  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryDoc = doc(db, 'productos', idProducto)
  //   getDoc(queryDoc)
  //     .then(resp=> setProductos(resp => ({id: resp.id, ...resp.data()})))
  //     .catch(()=>console.error())
  //     .finally(()=> setLoading(false))
  //     console.log(idProducto)
  // }, [idProducto])

  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryDoc = doc(db, 'productos', idProducto)
  //   getDoc(queryDoc)
  //     .then(resp=> setProductos({id: resp.id, ...resp.data()}))
  //     .catch(()=>console.error())
  //     .finally(()=> setLoading(false))
  // }, [])


    //traer un producto de firebase
    
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', idProducto)
        getDoc(queryDoc)
        .then(resp => setProductos( {id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

  return (
    <div>
        {loading ? 
            <Loading/>
        :
            <ItemDetail productos={productos} key={productos.id}/>
        }
    </div>
    )
}