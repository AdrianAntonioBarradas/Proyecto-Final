import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../Store";
import Option from "./Option";
import "./profesores.css";

export default function Profesores() {
  const [state, setState]= useContext(Context);
  return ( state.view ? (<div className="container-fluid content">
      <div className="row row-prof">
        <Option name="Asignar profesor" url="customform" />
        <Option name="Borrar profesor" url="customform" />
        <Option name="Editar profesor" url="customform" />
      </div>
      {/* <div className="row row-prof">
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
      </div>
      <div className="row row-prof">
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
        <Option name="Editar profesor" />
      </div> */}
      {/* <Outlet /> */}
    </div> ) 
    : <Outlet />
  );
}
