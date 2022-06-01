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