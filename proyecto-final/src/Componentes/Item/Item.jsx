import "./Item.css";
import {Link} from "react-router-dom"

const Item = ({ id, nombre, precio, imagen, idCategoria, stock }) => {
  let brandClass = '';

  switch (idCategoria) { 
    case '1':
      brandClass = 'nikeStyle';
      break;
    case '2':
      brandClass = 'pumaStyle';
      break;
    case '3':
      brandClass = 'converStyle';
      break;
    case '4':
      brandClass = 'lacoseStyle';
      break;
    case '5':
      brandClass = 'adidasStyle';
      break;
    case '6':
      brandClass = 'rebookStyle';
      break;
    default:
      break;
  }
  return (
    // <div>
    //     <img src={imagen} alt={nombre} />
    //     <h3>nombre:{nombre} </h3>
    //     <p>precio:{precio}</p>                ejemplo de la segunda entrega
    //     <p>id:{id}</p>
    //     <button>ver detalles</button>
    // </div>

    <div className="contenedorTarjeta">
      <div>
        <ul className="ulTarjeta">
          <li className="alineacionTarjeta">
            <div className="contenedorinter">
              <div className="margenesconten">
                <div className="container14">
                  <div className={`card14 ${brandClass}`}>
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
                        {/* <h3>Stock:{stock}</h3> ajustar con css para que se visualice el stock sin descuadrar la tarjeta*/} 
                      </div>
                      {/* <a className="contenInfo" href="#">
                        Comprar Ahora
                      </a> */}
                      <Link to={`/Item/${id}`}>Comprar Ahora</Link>
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

export default Item;
