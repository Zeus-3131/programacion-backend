import Navbar from "../../Navbar/Navbar"
import { NavLink } from "react-router-dom"
import "./Mujer.css"
import Footer from "../../Footer/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemListTienda from "../../ItemListTienda/ItemListTienda"
import {collection, getDocs, where, query} from "firebase/firestore"
import { db } from "../../../services/config";



const Mujer = ({mostrarComponentesTienda = true}) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(()=>{
    const misProductos = idCategoria ? query(collection(db, "Inventario"), where("idcat", "==", idCategoria)): collection(db, "Inventario");

    getDocs(misProductos)
     .then(res=>{
      const nuevosProductos = res.docs.map(doc=>{
        const data = doc.data();
        return {id:doc.id, ...data}
      })
      setProductos(nuevosProductos);
     })
     .catch(error=> console.log("Error",error))
  },[idCategoria])
  return (
    <div>
       {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionMujer">
        <nav className="navProductosMujer">
          <div className="col-12Mujer">
            <NavLink className="enlacePMujer" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faMujer fa-angle-right" />
            </span>
            <span>Mujer</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListMujer">
        <div className="contenedorProductosItemListMujer">
          <h2 className="itemh2Mujer">Productos para Mujer</h2>
          <ItemListTienda productos={productos} />
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </div>
  )
}

export default Mujer