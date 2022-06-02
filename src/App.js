import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import "./App.css";
import Header from "./vista/componentes/admin/Header";
import Profesores from "./vista/componentes/admin/Profesores";
import ManageAdmin from "./vista/componentes/admin/ManageAdmin";
import Login from "./vista/componentes/Login";
import ManageProfe from "./vista/componentes/Prof/ManageProfe";

// store import
// import Store from "./vista/componentes/Store";
import Prueba from "./vista/componentes/admin/Prueba";
import Prueba2 from "./vista/componentes/prueba2";

//prueba
import React, { useContext } from "react";
import { Context } from "./vista/componentes/Store";

function App() {
  const [state, setState] = useContext(Context);
  // const navigate = useNavigate();
  const active = 1;
  const userId = state.id;

  return (
     state.id ? ({
        1: <ManageAdmin />,
        2: <ManageProfe />,
        3: "es dos",
        null: <Login />
      }[state.role])
      
      : (<Login /> ));
}

export default App;
