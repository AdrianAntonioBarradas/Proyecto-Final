import { NavLink } from "react-router-dom";
import "./option.css";

export default function Option(props) {
  function popUp(URL) {
    window.open(
      URL,
      "Nombre de la ventana",
      "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50"
    );
  }

  return (
    <div className="col-md-4 col-prof ">
      <NavLink className="option-container nav " to="prueba">
        {props.name}
      </NavLink>
    </div>
  );
}
