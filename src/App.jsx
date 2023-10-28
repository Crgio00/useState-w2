import "./App.css";
import Contador from "./components/Contador";
import Mostrar from "./components/Mostar";
import ListaTareas from "./components/Tareas";
import TablaUsuarios from "./components/Usuarios";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Contador />
      <hr />
      <Mostrar />
      <hr />
      <ListaTareas />
      <hr />
      <TablaUsuarios />
      <hr />
      <Formulario />
    </>
  );
}

export default App;
