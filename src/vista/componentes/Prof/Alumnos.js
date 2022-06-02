import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../Store";
import Option from "./Option";
import "./profesores.css";

export default function Alumnos() {
  const [state, setState]= useContext(Context);
  return ( state.view ? (<div className="container-fluid content">
      <div className="row row-prof">
        <Option name="Asignar calificación" url="asignarcali" />
        <Option name="Modificar calificación" url="modificarcali" />
   
      </div>
      
      
      
    </div> ) 
    : <Outlet />
  );
}
