
import Item from "../Item/Item"


const ItemList = ({productos}) => {
        return (
            <div
               className="card-prod"
            >
                {productos.map( 
                    prod => <Item key={prod.id} prod={prod} /> 
                )}
        </div>
        )
    }


export default ItemList