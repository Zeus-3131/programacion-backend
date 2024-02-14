import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div className="cartdiv">
      <ul className="cartul">
        <Link className="cartLink" to="/cart">
          <li className="cartLi">
            <FontAwesomeIcon className="carrito" bounce size="sm" icon={faCartArrowDown}
            />
            {console.log("cantidadToltal:", cantidadTotal)}
            {cantidadTotal > 0 && <strong className="carritost">{cantidadTotal}</strong>}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default CartWidget;
