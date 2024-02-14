import { useState } from "react";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumaContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
    <div className="urban-feet-buttons">
      <button onClick={restarContador} className="urban-feet-subtract">
        -
      </button>
      <p className="urban-feet-counter">{contador}</p>
      <button onClick={sumaContador} className="urban-feet-add">
        +
      </button>
   
    <button
        className="botonAgregarCarrito"
        onClick={() => funcionAgregar(contador)}
      >
        agregar al carrito
      </button>
      </div>
    </>
  );
};

export default ItemCount;
