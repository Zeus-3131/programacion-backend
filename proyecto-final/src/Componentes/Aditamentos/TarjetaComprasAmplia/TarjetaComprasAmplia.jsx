import "./TarjetaComprasAmplia.css";
import { Link } from "react-router-dom";

const TarjetaComprasAmplia = ({ id, nombre, precio, imagen, info }) => {
  return (
    <>
      <div className="container1">
        <div className="card" id="nike-lime">
          <div className="image-box">
            <img src={imagen} alt={nombre} />
          </div>
          <div className="content-box">
            <h2>{nombre}</h2>
            <div className="size">
              <h3>Sizes :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Colors :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="size">
              <h3>Precio : {precio}</h3>
              <h3>Id : {id}</h3>
            </div>
            <div className="button">
              <Link to={info}>Comprar Ahora</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetaComprasAmplia;
