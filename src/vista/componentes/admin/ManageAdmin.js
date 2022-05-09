import { BrowserRouter as Router, 
    Route, 
    Routes,
    Navigate}
     from "react-router-dom";

import Header from "./Header";
import Footer from "../Footer";



export default function ManageAdmin(){


    return(
        <div>
            <Header />

            {/* <Router>
                
                <div className="content">
                    <Routes>
                        <Route path="/profesores" element={"professs"}/>
                        <Route path="/alumnos" element={"alumno"}/>
                    </Routes>
                </div>
                
                <Footer />
            </Router> */}
            
            
            
        </div>
    );
}