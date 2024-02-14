import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../../Context/CarritoContext";
import { db } from "../../../services/config";
import { addDoc, collection, updateDoc, getDoc, doc } from "firebase/firestore";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("por favor completar todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "Inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )

      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => console.log("error al crear la orden", error));
      })

      .catch((error) => {
        console.log("No se pudo actualizar el stock", error);
        setError("No se pudo actualizar el stock");
      });

    // addDoc(collection(db, "ordenes"),orden)
    // .then(docRef=>{
    //     setOrdenId(docRef.id);
    //     vaciarCarrito();
    // })
    // .catch(error=>{
    //     console.log("Error al crear la orden", error);
    //     setError("No se pudo crear la orden")
    // })
  };

  return (
    <div>
      <Navbar />

      <div class="main-container">
        <section class="registration-section">
          <div class="registration-container">
            <div class="registration-content">
              <div class="registration-form">
                <h2 class="form-heading">Checkout</h2>
                <form
                  method="POST"
                  class="custom-register-form"
                  id="custom-register-form"
                  onSubmit={manejadorSubmit}
                >
                  <div class="form-group">
                    <label className="iconoUser" for="custom-name">
                    <FontAwesomeIcon className="zmdi zmdi-account material-icons-name" icon={faUser} />
                    </label>
                    <input
                      type="text"
                      name="custom-name"
                      id="custom-name"
                      placeholder="Nombre"
                      onChange={(e)=>setNombre(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label className="iconoUser" for="custom-name">
                    <FontAwesomeIcon className="zmdi zmdi-account material-icons-name" icon={faUser} />
                    </label>
                    <input
                      type="text"
                      name="custom-name"
                      id="custom-name"
                      placeholder="Apellido"
                      onChange={(e)=>setApellido(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label className="iconoUser" for="custom-name">
                    <FontAwesomeIcon className="tu-clase-personalizada" icon={faPhone} />
                    </label>
                    <input
                      type="text"
                      name="custom-name"
                      id="custom-name"
                      placeholder="Telefono"
                      onChange={(e)=>setTelefono(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label className="iconoUser" for="custom-email">
                    <FontAwesomeIcon className="tu-clase-personalizada" icon={faEnvelope} />
                    </label>
                    <input
                      type="email"
                      name="custom-email"
                      id="custom-email"
                      placeholder="Email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label className="iconoUser" for="custom-email">
                    <FontAwesomeIcon className="tu-clase-personalizada" icon={faEnvelope} />
                    </label>
                    <input
                      type="email"
                      name="custom-email"
                      id="custom-email"
                      placeholder="Confirmar Email"
                      onChange={(e)=>setEmailConfirmacion(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="checkbox"
                      name="custom-agree-term"
                      id="custom-agree-term"
                      class="custom-agree-term"
                    />
                    <label
                      for="custom-agree-term"
                      class="custom-label-agree-term"
                    >
                      <span>
                        <span></span>
                      </span>
                       Acepto todas las {" "}
                      <a href="#" class="custom-term-service">
                      condiciones de servicio
                      </a>
                    </label>
                  </div>
                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="custom-signup"
                      id="custom-signup"
                      class="custom-form-submit"
                      value="Finalizar Orden"
                    />
                  </div>
                  <div className="erroresCheck">
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>

                  <div className="erroresCheck">{ordenId && (
                    <strong>
                      ¡Gracias por su compra! tu numero de orden es:{ordenId}
                    </strong>
                  )}</div>

                  
                </form>
              </div>
              <div class="registration-image">
                <figure>
                  <img src="../../../Imagenes/compra.svg" alt="imagen relacionada con la compra" />
                </figure>
                {/* <a href="#" class="registration-image-link">
                  I am already a member
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
