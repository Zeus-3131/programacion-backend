import Navbar from "../../Navbar/Navbar"
import { NavLink } from "react-router-dom"
import "./Tienda.css"
import Footer from "../../Footer/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemListTienda from "../../ItemListTienda/ItemListTienda"
import {collection, getDocs, where, query} from "firebase/firestore"
import { db } from "../../../services/config";




const Tienda = ({mostrarComponentesTienda = true}) => {
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
    <>
       {mostrarComponentesTienda && <Navbar />}
      <div className="ContenedorNavegacionTienda">
        <nav className="navProductosTienda">
          <div className="col-12Tienda">
            <NavLink className="enlacePTienda" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faTienda fa-angle-right" />
            </span>
            <span>Tienda</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListTienda">
        <div className="contenedorProductosItemListTienda">
          <h2 className="itemh2Tienda">Nuestros Productos</h2>
          <ItemListTienda productos={productos} />
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </>
  )
}

export default Tienda