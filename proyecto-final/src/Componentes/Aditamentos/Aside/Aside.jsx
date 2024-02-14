import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
  useEffect(() => {
    const handleSectionClick = (event) => {
      const parent = event.currentTarget.closest(".filtro-seccion");
      if (parent) {
        parent.classList.toggle("active");
      }
    };

    const handleClearClick = (event) => {
      const target = event.currentTarget.dataset.target;
      const checkboxes = document.querySelectorAll(
        `.filtro-seccion[data-target="${target}"] input[type="checkbox"]`
      );
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    };

    document.querySelectorAll(".seccion-titulo").forEach((element) => {
      element.addEventListener("click", handleSectionClick);
    });

    document.querySelectorAll(".limpiar-seccion").forEach((element) => {
      element.addEventListener("click", handleClearClick);
    });

    return () => {
      document.querySelectorAll(".seccion-titulo").forEach((element) => {
        element.removeEventListener("click", handleSectionClick);
      });

      document.querySelectorAll(".limpiar-seccion").forEach((element) => {
        element.removeEventListener("click", handleClearClick);
      });
    };
  }, []);

  return (
    <aside className="contenedorAside">
      <div className="filtro-seccion" data-target="en_stock">
        <h3 className="seccion-titulo">
          Disponibilidad{" "}
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="en_stock">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="en_stock" /> 
              <label>Stock</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="agotado" /> 
              <label>Agotado</label>
          </li>
        </ul>
      </div>

      <div className="filtro-seccion" data-target="precio">
        <h3 className="seccion-titulo">
          Marca{" "}
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="precio">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/1">
              <input type="checkbox" value="Nike" />
            </NavLink>
            <label>Nike</label>
          </li>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/2">
              <input type="checkbox" value="Puma" />
            </NavLink>
            <label>Puma</label>
          </li>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/3">
              <input type="checkbox" value="Conver" />
            </NavLink> 
            <label>Conver</label>
          </li>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/4">
              <input type="checkbox" value="Lacose" />
            </NavLink>
            <label>Lacose</label>
          </li>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/5">
              <input type="checkbox" value="Adidas" />
            </NavLink>
            <label>Adidas</label>
          </li>
          <li className="ubicarLidelAside">
            <NavLink style={{ textDecoration: "none" }} to="/categoria/6">
              <input type="checkbox" value="Rebook" />
            </NavLink>
            <label>Rebook</label>
          </li>
        </ul>
      </div>

      <div className="filtro-seccion" data-target="precio">
        <h3 className="seccion-titulo">
          Precio
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="precio">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="menos_50" /> 
              <label>Menos de $50</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="50_100" /> 
              <label>$50 - $100</label>
          </li>
        </ul>
      </div>

      <div className="filtro-seccion" data-target="tipo_producto">
        <h3 className="seccion-titulo">
          Tipo de Producto{" "}
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="tipo_producto">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="zapatillas" /> 
              <label>Zapatillas </label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="tenis" /> 
              <label>Tenis</label>
          </li>
        </ul>
      </div>

      <div className="filtro-seccion" data-target="color">
        <h3 className="seccion-titulo">
          Color
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="color">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="rojo" /> 
              <label>Rojo</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="azul" /> 
              <label>Azul</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="negro" />
              <label> Negro</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="blanco" /> 
              <label>Blanco</label>
          </li>
        </ul>
      </div>

      <div className="filtro-seccion" data-target="tamaño">
        <h3 className="seccion-titulo">
          Tamaño
          <span className="flecha">
            <i className="fa fa-angle-right" />
          </span>
        </h3>
        <ul className="estilos-filtro">
          <span className="limpiar-seccion" data-target="tamaño">
            Limpiar
          </span>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="35" /> 
              <label>35</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="36" /> 
              <label>36</label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="37" /> 
              <label>37 </label>
          </li>
          <li className="ubicarLidelAside">
              <input type="checkbox" value="38" /> 
              <label>38</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
