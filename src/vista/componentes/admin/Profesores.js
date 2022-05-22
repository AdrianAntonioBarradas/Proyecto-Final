import Option from "./Option";
import "./profesores.css";

export default function Profesores() {
  return (
    <div className="container-fluid content">
      <div className="row row-prof">
        <Option name="Asignar profesor" />
        <Option name="Borrar profesor" />
        <Option name="Editar profesor" />
      </div>
      <div className="row row-prof">
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
      </div>
    </div>
  );
}
