import './Navbar_Intermedio.css'
import { Link } from 'react-router-dom'


const Navbar_Intermedio = () => {
  return (
    <div className='contenedorNavbarIntermedio'>
      <div className='contenidoIntermedio'>
        <div className='contenidoInter'><p style={{color:"white"}}>REBAJAS: 50% EN LA COLECCIÓN DE VERANO &nbsp; <Link to="/Productos"><strong style={{color:"white"}}>Compra&nbsp;ahora&nbsp;&gt;</strong></Link></p></div>
        <div className='contenidoInter'><Link to="/"><img className='icono' src="../Imagenes/logo.png" alt="icono de la marca" /></Link></div>
        <div className='contenidoInter'>
          <form className='contenedorBuscador' >
            <input className='buscador' type="search" placeholder="Buscar" />
            <button type="submit" className='botonBuscar'>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar_Intermedio