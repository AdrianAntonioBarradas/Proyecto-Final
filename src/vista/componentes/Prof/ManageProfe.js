import { BrowserRouter as Router, 
    Route, 
    Routes}
     from "react-router-dom";

import Header from "./Header";
import Footer from "../Footer";
import Login from "../Login";
import NotFoundPage from "../NotFoundPage";
import { useContext } from "react";
import { Context } from "../Store";
// form components

import AsignarCali from "./forms/AsignarCali";
import Alumnos from "./Alumnos";
import ModificarCali from  "./forms/ModificarCali";



export default function ManageProfe(){
  const [state, setState]=useContext(Context);

  return(
    <>
      <div className="App">
        <Router>

          <Header />
          {/* <Login />  */}
          {/* {userId == null ? navigate(/login) :navigate(/admin)} */}
          <Routes>
            {/* <Route path="/login" element={<Login />}/>
            <Route path="/admin_:userId" element={<Header/>}/> */}
            <Route path="login" element={<Login />} />
            <Route path="/" element={<h1>Bienvenidx</h1>} />
            
            <Route path="alumnos" element={<Alumnos />}>
              <Route path="asignarcali" element={<AsignarCali />} />
              <Route path="modificarcali" element={<ModificarCali />} />
              
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}