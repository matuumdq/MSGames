
import Item from "../Item/Item"


const ItemList = ({productos}) => {
    console.log(productos)
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {productos.map( 
                    prod => <Item key={prod.id} prod={prod} /> 
                )}
        </div>
        )
    }


export default ItemList