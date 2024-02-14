import './Navbar_Superior.css';
import CartWidget from '../Aditamentos/CartWidget/CartWidget.jsx';





function Navbar_Superior() {
  return (
    <header>
      <div className='contenNavbar'> 
        <div className='NavbarCuenta'>
          <ul>
          <li>MI CUENTA</li>
          <li>FAVORITOS</li>
          </ul>
        </div>
        <div className='NavbarParrafo'>
          <p>ENVÍO GRATUITO  &nbsp;|&nbsp; DEVOLUCIONES GRATIS &nbsp;|&nbsp; MEJOR PRECIO GARANTIZADO</p>
          </div>
        <div className='NavbarCarrito'> 
          <CartWidget/>
        </div>
      </div>
    </header>
  );
}

export default Navbar_Superior