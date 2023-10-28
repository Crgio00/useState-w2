import React, { useState } from "react";

function Mostrar() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  function toggleMostrarContenido() {
    setMostrarContenido(!mostrarContenido);
  }

  return (
    <div>
      <h1>Mostrar y Ocultar contenido</h1>
      <button onClick={toggleMostrarContenido}>
        {mostrarContenido ? "Ocultar" : "Mostrar"} Contenido
      </button>
      {mostrarContenido && (
        <div>
          <p>Este es el contenido que se mostrará u ocultará</p>
        </div>
      )}
    </div>
  );
}

export default Mostrar;
