import "./TarjetaCompra.css";
import { Link } from "react-router-dom";

const TarjetaCompra = ({ id, nombre, precio, imagen, info }) => {
  return (
    <div className="contenedorTarjeta">
      <div>
        <ul className="ulTarjeta">
          <li className="alineacionTarjeta">
            <div className="contenedorinter">
              <div className="margenesconten">
                <div className="container">
                  <div className="card">
                    <div className="imgBx">
                      <img src={imagen} alt={nombre} />
                    </div>
                    <div className="contentBx">
                      <h2>{nombre}</h2>
                      <div className="size contenInfo info2">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                      </div>
                      <div className="color contenInfo">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="size contenInfo">
                        <h3>Precio : {precio}</h3>
                        <h3>Id : {id}</h3>
                      </div>
                      <Link to={info}>
                        Comprar Ahora
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TarjetaCompra;
