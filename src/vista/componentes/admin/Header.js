import { NavLink } from "react-router-dom";
import "./Header.css";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container
} from "react-bootstrap";

//prueba
import React, { useContext } from "react";
import { Context } from "../Store";

function Header() {
  const [state, setState] = useContext(Context);

  const logout=() =>{
    setState({ id: null, role:null, view: true });
  };

  const setView =()=>{
    setState({ id: state.id , role: state.role, view: true });
  };
  return (
    <>
      <div>
      
        <header>
          <p>
            <span className="title-header">Escuela Nacional Preparatoria</span>
          </p>
        </header>
        <div className="container-fluid">
          {1 ? (
            <>
              {" "}
              <Navbar
                collapseOnSelect
                expand="sm"
                bg="lg"
                variant="light"
                className=" bg-light navbar"
              >
                <Container fluid>
                  <NavLink className="nav-link" to="/">ENP</NavLink>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <NavLink className="nav-link" to="/profesores" onClick={setView}>
                        Profesores
                      </NavLink>
                      <NavLink className="nav-link" to="/alumnos">
                        Alumnos
                      </NavLink>
                      <NavLink className="nav-link" to="/materias">
                        Materias
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                  <Button className="close-btn btn-lg" onClick={logout}>Cerrar sesión</Button>
                </Container>
              </Navbar>
            </>
          ) : (
            false
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
