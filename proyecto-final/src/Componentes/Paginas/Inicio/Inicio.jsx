import "./Inicio.css";
import Navbar from "../../Navbar/Navbar";
import TarjetaCompra from "../../Aditamentos/TarjetaCompra/TarjetaCompra";
import TarjetaComprasAmplia from "../../Aditamentos/TarjetaComprasAmplia/TarjetaComprasAmplia";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <Navbar />
      {/* primera seccion  */}
      <section className="contenedorSection1">
        <div className="contenidoSeccion1">
          <h1 className="seccion1H1">
            La mejor
            <br />
            Coleccion del <b style={{ color: "red" }}>2024</b>
          </h1>
          <br />
          <p className="pSecccion1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            libero veritatis laudantium vitae sequi aperiam dolorum eum ut rem
            harum cupiditate doloremque. Nihil saepe ratione et voluptates aut
            maiores alias.10
          </p>
          <br />
          <Link to="/Productos">
            <button className="botonSeccion1">Compra Ahora</button>
          </Link>
        </div>
        <div className="contenidoSeccion-1">
          <img
            src="https://tabbase.myshopify.com/cdn/shop/files/Group-1861_1.png?v=1650435865"
            alt="zapatilla"
          />
        </div>
      </section>

      {/* segunda seccion   */}
      <section className="contenidoSeccion2">
        <div className="conteSeccion2">
          <div className="contenedorpromo">
            <div className="promocion1">
              <img
                className="imgpromo1"
                src="https://tabbase.myshopify.com/cdn/shop/files/1_5.jpg?v=1650439204"
                alt="zapatillas negras "
              />
              <div className="textpromo">
                <div>
                  <h2 className="promoh">Las mejores colecciones</h2>
                  <h4 className="promoh">Colección de zapatos de cuero</h4>
                  <h5 className="promoh5">
                    <strong>50% de descuento</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mitadSeccion2">
            <h2 className="seccion2H">Productos mejor valorados</h2>
            <div className="tarjetas">
              <TarjetaCompra
                nombre="Air Max"
                precio="300000"
                id="1"
                info="/Item/1"
                imagen="https://static.nike.com/a/images/t_default/8e0d887b-6987-4030-b272-8194514be6a8/sabrina-1-family-bonds-zapatillas-de-baloncesto-KdPT3V.png"
              />
              <TarjetaCompra
                nombre="React Infinity Run"
                precio="400000"
                id="2"
                info="/Item/2"
                imagen="https://static.nike.com/a/images/t_default/4c413473-5aca-4850-9999-83bcaac522c3/calzado-air-max-sc-LR42xg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* tercera seccion  */}
      <section className="contenedorSeccion3">
        <div className="contenidoSeccion3">
          <div className="contenInfo3">
            <div className="contenInf3">
              <div className="info3">
                <a className="aInfo3" href="#">
                  <img
                    src="https://tabbase.myshopify.com/cdn/shop/files/3_1.jpg?v=1649851424"
                    alt="zapatllas nike ordenasas en fila"
                    className=" imgInfo3"
                    width="1890"
                    height="500"
                  />
                </a>
              </div>
              <div className="contentText3">
                <div className="contenText3">
                  <div>
                    <h2 className="hText3">Las mejores colecciones</h2>
                    <h4 className="h4Text3">
                      Las mejores colecciones en todo tipo de zapatillas{" "}
                    </h4>
                    <Link className="aText3" to="/Productos">
                      Descubre mas
                    </Link>
                  </div>
                </div>

                <ul className="contenBanner">
                  <li className="banner">
                    <a href="#0" className="imgContenedor">
                      <img
                        className="banner1"
                        src="https://www.ansonika.com/allaia/img/banner_1.jpg"
                        alt="zapatilla"
                      />

                      <div className="infoBannerContainer">
                        <h3 className="h3Banner">Colección de hombre</h3>
                        <div className="divBanner">
                          <Link to="/Hombre">
                            <button className="botonBanner">
                              comprar ahora
                            </button>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="banner">
                    <a href="#0" className="imgContenedor">
                      <img
                        className="banner1"
                        src="https://www.ansonika.com/allaia/img/banner_2.jpg"
                        alt="zapatilla"
                      />

                      <div className="infoBannerContainer">
                        <h3 className="h3Banner">Colección de Mujer</h3>
                        <div className="divBanner">
                          <Link to="/Mujer">
                            <button className="botonBanner">
                              comprar ahora
                            </button>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="banner">
                    <a href="#0" className="imgContenedor">
                      <img
                        className="banner1"
                        src="https://www.ansonika.com/allaia/img/banner_3.jpg"
                        alt="zapatilla"
                      />

                      <div className="infoBannerContainer">
                        <h3 className="h3Banner">Colección de Niños</h3>
                        <div className="divBanner">
                          <Link to="/Hombre">
                            <button className="botonBanner">
                              comprar ahora
                            </button>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cuarta seccion  */}
      <section>
        <div className="contenedorSeccion4">
          <div className="fondoSeccion4">
            <div className="contenSeccion4">
              <h2 className="h2Seccion4">
                <span style={{display:"flex", justifyContent:"center", fontSize:"1.5rem", color:"red"}}>
                  Colección especial
                  de zapatos
                </span>
              </h2>
              <div className="contenInfo4">
                <TarjetaComprasAmplia
                 nombre="Future Rider"
                 precio="300000"
                 id="4"
                 info="/Item/4"
                 imagen="https://content.stylitics.com/images/items/15039664?size=large"
                />
                <TarjetaComprasAmplia
                 nombre="RS-Fast"
                 precio="500000"
                 id="5"
                 info="/Item/5"
                 imagen="https://acdn.mitiendanube.com/stores/001/374/566/products/tenis-puma-california-original-mujer-color-blanco-negro-tienda-onlineshoppingcenterg-colombia-centro-de-compras-en-linea1-0f94547307b5aca08a16672806569504-640-0.png"
                />
                <TarjetaComprasAmplia 
                 nombre="Suede Classic"
                 precio="600000"
                 id="6"
                 info="/Item/6"
                 imagen="https://balonmanoproshop.com/cdn/shop/files/Zapatillas-de-interior-Accelerate-NITRO-SQD-11.png?v=1697038607"
               />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* quinta seccion  */}
      <section>
        <div className="slideshow-container">
          <div className="images">
            <div className="image">
              <img src="./Imagenes/reebok.png" alt="Imagen 1" />
            </div>
            <div className="image">
              <img src="./Imagenes/adidas.png" alt="Imagen 2" />
            </div>
            <div className="image">
              <img src="./Imagenes/puma.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/jordan.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/converse.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/le.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/balance.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/skech.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/nike.png" />
            </div>
            <div className="image">
              <img src="./Imagenes/lacos.png" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Inicio;
