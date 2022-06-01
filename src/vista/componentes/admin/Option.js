import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../Store";
import "./option.css";

export default function Option(props) {
  const [state, setState]=useContext(Context);
  function popUp(URL) {
    window.open(
      URL,
      "Nombre de la ventana",
      "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50"
    );
  }

  const view =()=>{
    setState({ id: state.id, role: state.role, view: false })
  };

  return (
    <div className="col-md-4 col-prof ">
      <NavLink className="option-container nav " to={props.url} onClick={view}>
        {props.name}
      </NavLink>
    </div>
  );
}
