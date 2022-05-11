import { NavLink } from 'react-router-dom';
import './Header.css';
import {Nav, Navbar,Form,FormControl,Button, NavDropdown, Container} from 'react-bootstrap';


export default function Header() {
  return(
    <div>
    
       <header>
        <p><span className="title-header">Escuela Nacional Preparatoria</span></p>
        
      </header>
      <div className="container-fluid"> 

      <Navbar collapseOnSelect expand="sm" bg="lg" variant="light" className=' bg-light'>
        <Container fluid>
        <Navbar.Brand href="#home">ENP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/profesores">Profesores</NavLink>
            <NavLink className="nav-link" to="/alumnos">Alumnos</NavLink>
            <NavLink className="nav-link" to="/materias">Materias</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button className='close-btn'>Cerrar sesión</Button>
        </Container>
      </Navbar>
      

     
















{/* 
<nav className="navbar navbar-expand-md navbar-light bg-light">
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
                  <NavLink className="nav-link" to="/alumnos">Alumnos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/materias">Materias</NavLink>
                  </li>
              </ul>
            </div>
            <a className="btn btn-outline-primary" href="#">Cerrar sesión</a>
          </nav> */}







        </div>
    </div>
  )
}




  {/* <nav className="navbar navbar-expand-md navbar-light bg-light">
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
                  <NavLink className="nav-link" to="/alumnos">Alumnos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/materias">Materias</NavLink>
                  </li>
              </ul>
            </div>
            <a className="btn btn-outline-primary" href="#">Cerrar sesión</a>
          </nav> */}