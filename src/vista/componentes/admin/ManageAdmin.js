import { BrowserRouter as Router, 
    Route, 
    Routes,
    Navigate}
     from "react-router-dom";

import Header from "./Header";
import Footer from "../Footer";
import Login from "../Login";
import Profesores from "./Profesores";
import NotFoundPage from "../NotFoundPage";
import { useContext } from "react";
import { Context } from "../Store";
import CustomForm from "./forms/CustomForm";
import Botones_Mostrar from "./Botones_Mostrar";
// form components
import BajaProf from "./forms/BajaProf";
import ModificarProf from "./forms/ModificarProf";
import ModificarProfM from "./forms/ModificarProfM";
import AsignarProfM from "./forms/AsignarProfM";
import Alumnos from "./Alumnos";
import AltaAlum from  "./forms/AltaAlum";
import AsignarAlumG from "./forms/AsignarAlumG";
import BajaAlum from "./forms/BajaAlum";
import CambiarAlumG from "./forms/CambiarAlumG";
import ModificarAlum from "./forms/ModificarAlum";



export default function ManageAdmin(){
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
            <Route path="/" element={<Botones_Mostrar />} />
            <Route path="profesores" element={<Profesores />}>
              <Route path="customform" element={ <CustomForm/> }  />
              <Route path="bajaprof" element={<BajaProf />} />
              <Route path="modificarprof" element={<ModificarProf />} />
              <Route path="modificarprofm" element={<ModificarProfM />} />
              <Route path="asignarprofm" element={<AsignarProfM />} />  
            </Route>
            <Route path="alumnos" element={<Alumnos />}>
              <Route path="altalumno" element={ <AltaAlum /> }  />
              <Route path="asignaralumg" element={<AsignarAlumG />} />
              <Route path="bajaalum" element={<BajaAlum />} />
              <Route path="cambiarclumg" element={<CambiarAlumG/>} />
              <Route path="asignarprofm" element={<AsignarProfM />} />  
              <Route path="modificaralum" element={<ModificarAlum />} />
            </Route>
            <Route path="customform" element={<CustomForm/>} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}