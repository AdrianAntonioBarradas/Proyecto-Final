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
// form components



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
              <Route path="customform" element={ <CustomForm/> }  />
                
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