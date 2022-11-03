import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../../Loading/Loading"
import  {ItemDetail} from '../../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const { idProducto } = useParams()
    const [ products, setProducts ] = useState({})
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', idProducto)
        getDoc(queryDoc)
        .then(resp => setProducts( {id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

  return (
    <div>
        {loading ? 
            <Loading/>
        :
            <ItemDetail products={products} key={products.id}/>
        }
    </div>
    )
}