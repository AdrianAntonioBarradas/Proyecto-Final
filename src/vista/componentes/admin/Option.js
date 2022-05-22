import { NavLink } from "react-router-dom";
import "./option.css";

export default function Option(props) {
  return (
    <div className="col-md-4 col-prof ">
      <NavLink className="option-container nav " to="prueba">
        {props.name}
      </NavLink>
    </div>
  );
}
