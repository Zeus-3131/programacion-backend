import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext.jsx";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const ItemDetail = ({ nombre, precio, stock, id, imagen }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrrito(item, cantidad);
  };
  return (
    <>
      {/* <h2>nombre: {nombre}</h2>
            <p className="pDetail">precio: {precio}</p>
            <p>id:{id}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non autem ipsam repellendus consequatur, quas aut! Vero quaerat sint esse cum aliquam sed, ex atque, ducimus in perspiciatis praesentium. Id, sit.</p>
            <img src={imagen} alt={nombre} />
            {
              agregarCantidad> 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            } */}

      <Navbar />
      <div className="contenedorItemD">
        <div className="urban-feet-container">
          <div className="urban-feet-imgBx">
            <img src={imagen} alt={nombre} />
            {/* <div className="urban-feet-counter">1</div> */}
          </div>
          <div className="urban-feet-details">
            <div className="urban-feet-content">
              <h2>
                {nombre} <br />
                <span>Running Collection</span>
              </h2>
              <p className="ItemP">
                Featuring soft foam cushioning and lightweight, woven fabric in
                the upper, the Jordan Proto-Lyte is made for all-day, bouncy
                comfort. Lightweight Breathability: Lightweight woven fabric
                with real or synthetic leather provides breathable support.
                Cushioned Comfort: A full-length foam midsole delivers
                lightweight, plush cushioning. Secure Traction: Exaggerated
                herringbone-pattern outsole offers traction on a variety of
                surfaces.
              </p>
              <p className="product-colors">
                Available Colors:
                <span
                  className="black active"
                  data-color-primary="#000"
                  data-color-sec="#212121"
                ></span>
                <span
                  className="red"
                  data-color-primary="#D5212E"
                  data-color-sec="#bd072d"
                ></span>
                <span
                  className="orange"
                  data-color-primary="#CE5B39"
                  data-color-sec="#F18557"
                ></span>
              </p>
              <div className="urban-feet-buttons">
                {/* <button className="urban-feet-add">+</button>
        <div className="urban-feet-counter">1</div>
        <button className="urban-feet-subtract">-</button> */}
                {agregarCantidad > 0 ? (
                  <Link className="enlaceTerminarCompra" to="/cart">Terminar Compra</Link>
                ) : (
                  <ItemCount
                    inicial={1}
                    stock={stock}
                    funcionAgregar={manejadorCantidad}
                  />
                )}
              </div>
              <h3>$ {precio}</h3>
              {/* <button onClick={() => funcionAgregar(contador)}>
                Agregar al carrito32
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemDetail;
