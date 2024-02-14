import Item from "../Item/Item";
import "./ItemListTienda.css";

const ItemListTienda = ({productos}) => {
  return (
    <div className="ordenarProductosTienda">
        {
            productos.map(producto => <Item key={producto.id} {...producto} />)
        }
    </div>
  )
}

export default ItemListTienda