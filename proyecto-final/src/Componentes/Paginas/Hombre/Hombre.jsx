import Navbar from "../../Navbar/Navbar"
import { NavLink } from "react-router-dom"
import "./Hombre.css"
import Footer from "../../Footer/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemListTienda from "../../ItemListTienda/ItemListTienda"
import {collection, getDocs, where, query} from "firebase/firestore"
import { db } from "../../../services/config"; 




const Hombre = ({mostrarComponentesTienda = true}) => {
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
      <div className="ContenedorNavegacionHombre">
        <nav className="navProductosHombre">
          <div className="col-12Hombre">
            <NavLink className="enlacePHombre" to="/">
              Inicio
            </NavLink>
            <span>
              <i className="faHombre fa-angle-right" />
            </span>
            <span>Hombre</span>
          </div>
        </nav>
      </div>

      <div className="contenedorDivDelListHombre">
        <div className="contenedorProductosItemListHombre">
          <h2 className="itemh2Hombre">Productos para Hombre</h2>
          <ItemListTienda productos={productos} />
        </div>
      </div>
      {mostrarComponentesTienda && <Footer />}
    </div>
  )
}

export default Hombre