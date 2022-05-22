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

function App() {
  // const navigate = useNavigate();
  const userId = 456;

  return (
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
            <Route path="prueba" element={"opcion selectedewrwrwrewr"} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
