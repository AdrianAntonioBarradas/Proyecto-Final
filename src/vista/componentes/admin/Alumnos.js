import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../Store";
import Option from "./Option";
import "./profesores.css";

export default function Alumnos() {
  const [state, setState]= useContext(Context);
  return ( state.view ? (<div className="container-fluid content">
      <div className="row row-prof">
        <Option name="Alta alumno" url="altalumno" />
        <Option name="Asignar grupo al alumno" url="asignaralumg" />
        <Option name="Baja alumno" url="bajaalum" />
        
      </div>
      <div className="row row-prof">
        <Option name="Cambiar grupo" url="cambiarclumg" />
        <Option name="Modificar alumno" url="modificaralum" />
        <Option name="Asignar materia" url="cambiarclumg" />
        
      </div>
      
      
    </div> ) 
    : <Outlet />
  );
}
