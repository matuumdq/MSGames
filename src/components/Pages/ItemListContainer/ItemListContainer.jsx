import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryCollector = collection(db, 'productos')
        const queryFilter = idCategoria ? query(queryCollector, where('categoria', '==', idCategoria))
            : query(queryCollector, orderBy('categoria', 'desc'))
        getDocs(queryFilter)
            .then(resp => setProductos(resp.docs.map(prod=>({id:prod.id, ...prod.data()}))))
            .catch(()=>console.error())
            .finally(()=> setLoading(false))
    },[idCategoria])


      return (
          <div className='card-prod m-auto' >

            {loading ? 
                <Loading/>
            :
                <ItemList productos={productos} />
            }
          </div>
      )
  }
  
  export default ItemListContainer