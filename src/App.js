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
import NotFoundPage from "./vista/componentes/NotFoundPage";

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
    <>
      <div className="App">
        <Router>
          {state.view ? <div> se pudo</div> : <div> no se puedo</div>}
          <Prueba />
          <Prueba2 />

          <Header />
          {/* <Login />  */}
          {/* {userId == null ? navigate(/login) :navigate(/admin)} */}
          <Routes>
            {/* <Route path="/login" element={<Login />}/>
            <Route path="/admin_:userId" element={<Header/>}/> */}
            <Route path="login" element={<Login />} />
            <Route path="/" element={"inicio"} />
            <Route path="profesores" element={<Profesores />}>
              <Route path="prueba" element={<Login />} />
            </Route>
            <Route path="profesores/registro" element={"esto es una prueba"} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
