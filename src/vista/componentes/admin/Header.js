import { NavLink } from 'react-router-dom';
import '../componentes/css-general/style_h_f.css';

export default function Header() {
  return(
    <div>
    
       <header>
        <p><span className="title-header">Escuela Nacional Preparatoria</span></p>
      </header>
      <div className="container-fluid"> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Escuela</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/profesores">profesores</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Alumnos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Materias</a>
                  </li>
              </ul>
            </div>
            <a className="btn btn-outline-primary" href="#">Cerrar sesión</a>
          </nav>
        </div> 
    </div>
  )
}