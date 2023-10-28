import React, { useState } from "react";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function agregarTarea() {
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  }

  function marcarCompletada(index) {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = true;
    setTareas(nuevasTareas);
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className={tarea.completada ? "completada" : ""}
            onClick={() => marcarCompletada(index)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
