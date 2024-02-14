import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto } = useContext(CarritoContext);
  const [mostrarBotonFinalizar, setMostrarBotonFinalizar] = useState(true);

  useEffect(() => {
    // Oculta el botón "Finalizar Compra" si el carrito está vacío
    setMostrarBotonFinalizar(cantidadTotal > 0);
  }, [cantidadTotal]);

  const manejarVaciarCarrito = () => {
    vaciarCarrito();
    setMostrarBotonFinalizar(false);
  };

  useEffect(() => {
    if (cantidadTotal === 0) {
      const confirmar = window.confirm("No hay productos en el carrito. ¿Deseas ver productos?");
      
      if (confirmar) {
        // Si el usuario hace clic en "Aceptar", redirige a la página de productos
        window.location.href = "/Productos";
      }
      // No es necesario manejar la otra opción, ya que si el usuario hace clic en "Cancelar" o cierra el cuadro de diálogo, no hacemos nada.
    }
  }, [cantidadTotal]);

  return (
    <div>
      <Navbar />

      <div className="my-cart-container">
        {carrito.map((producto) => (
          <div className="my-product" key={producto.item.id}>
            <CartItem {...producto} />
            <button className="my-button" onClick={() => eliminarProducto(producto.item.id)}>
              Eliminar
            </button>
          </div>
        ))}

        <div className="my-total">
          <p className="CartP">
            Total: $<span id="total">{total}</span>
          </p>
          <p className="CartP">
            Cantidad Total: <span id="cantidadTotal">{cantidadTotal}</span>
          </p>
        </div>

        <div className="my-actions">
          <button className="my-button" onClick={manejarVaciarCarrito}>
            Vaciar Carrito
          </button>
          {mostrarBotonFinalizar && (
            <Link to="/checkout">
              <button className="my-button">Finalizar Compra</button>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
