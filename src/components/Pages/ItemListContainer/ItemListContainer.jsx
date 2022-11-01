import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import ItemList from "../../ItemList/ItemList";
import Loading from "../../Loading/Loading";


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()

// Todos los productos

// useEffect(() => {
//         const db = getFirestore()
//         const queryCollection = collection(db, 'productos')
//         getDocs(queryCollection)
//         .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))
//     },[])

//     console.log(productos)


// un prod de firebase
    // useEffect(() => {
    //   const db = getFirestore()
    //   const queryDoc = doc(db, 'productos', 'DQI3UNleLD3DZElHNwwE')
    //   getDoc(queryDoc)
    //     .then(resp=> console.log(resp => ({id: resp.id, ...resp.data()})))
    //     .catch(()=>console.error())
    //     .finally(()=> setLoading(false))
    // }, [])


    // Productos filtrados

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

    //   useEffect(()=>{
    //       if (idCategoria) {
    //         gFetch()  
    //             .then(resSgte => setProductos(resSgte.filter(producto=>producto.categoria===idCategoria)))
    //             .catch(err => console.log(err))
    //             .finally(()=> setLoading(false))
    //       } else {
    //         gFetch()  
    //             .then(resSgte => setProductos(resSgte))
    //             .catch(err => console.log(err))
    //             .finally(()=> setLoading(false))
    //       }
          
    //   }, [idCategoria])


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