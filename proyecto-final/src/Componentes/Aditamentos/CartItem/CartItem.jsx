import { useContext } from "react"
import { CarritoContext } from "../../../Context/CarritoContext"
import "./CartItem.css";

const CartItem = ({item,cantidad}) => {
    const{eliminarProducto}=useContext(CarritoContext);

  return (
    <div className="contenedorCartItem">
        <h3>{item.nombre}</h3>
        <p className="CartItemP">cantidad:{cantidad}</p>
        <p className="CartItemP">precio: {item.precio}</p>
        {/* <button className="CartItemButton" onClick={()=>eliminarProducto(item.id)}>Eliminar</button> */}
    </div>
  )
  
}

export default CartItem