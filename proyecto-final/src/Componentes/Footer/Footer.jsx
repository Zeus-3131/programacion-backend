import "./Footer.css";
import FormularioSuscripcion from "./FormularioSuscripcion.jsx";

const Footer = () => {
    return (
        <footer className="pieDePagina">
            <div className="contenPie">
                <div className="contenedorFormulario">
                    <div className="contenFormulario">
                        <div className="formularioConten">
                            <div className="ladosConten col-xl-12 col-md-12 col-12 wbpar">
                                <div className="contenF">
                                    <div className="contenFinal col-12 wbcouns">
                                        <h2 className="tituloFooter1">Suscribase Ahora</h2>
                                        <p className="parrafoFooter1">Si necesita vender sus productos, compartir una gran noticia</p>
                                    </div>
                                    <div className="formularioPie">
                                        <FormularioSuscripcion/>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <div>

                </div>

            </div>
        </footer>
    )
}

export default Footer