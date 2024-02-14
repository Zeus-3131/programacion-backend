import React, { useEffect } from 'react';
import "./Footer.css";

const FormularioSuscripcion = () => {
  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');
    
    labels.forEach(label => {
      label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    });
  }, []);

  return (
    <form>
      <div className="form-control">
        <input type="text" required />
        <label>Email</label>
      </div>
      <button className='botonSuscripcion'
      style={{position: "relative",bottom: "72px", left: "300px", color:"white",  fontSize: "1.1rem" , border: "0",background:"transparent", cursor:"pointer"}}>Suscribase</button>
    </form>
  );
};

export default FormularioSuscripcion;
