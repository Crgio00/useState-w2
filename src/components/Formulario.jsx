import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    setEnviado(!enviado);
  }

  return (
    <>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={enviarFormulario}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <div>{enviado && <p>¡Enviado correctamente! </p>}</div>
    </>
  );
}

export default Formulario;
