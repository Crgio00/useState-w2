import React, { useState } from "react";

function TablaUsuarios() {
  const [usuarios, setUsuarios] = useState([
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 28 },
  ]);
  const [filtro, setFiltro] = useState("");
  const [orden, setOrden] = useState("asc");

  function filtrarUsuarios(usuario) {
    return usuario.nombre.toLowerCase().includes(filtro.toLowerCase());
  }

  function ordenarUsuarios(a, b) {
    if (orden === "asc") {
      return a.edad - b.edad;
    } else {
      return b.edad - a.edad;
    }
  }

  return (
    <div>
      <h1>Filtro de Usuarios</h1>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button onClick={() => setOrden(orden === "asc" ? "desc" : "asc")}>
        {orden === "asc" ? "Ascendente" : "Descendente"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios
            .filter(filtrarUsuarios)
            .sort(ordenarUsuarios)
            .map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.nombre}</td>
                <td>{usuario.edad}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;
