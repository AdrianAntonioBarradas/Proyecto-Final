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
  const [state] = useContext(Context);
  return (
    <>
      <div>
        <header>
          <p>
            <span className="title-header">Escuela Nacional Preparatoria</span>
          </p>
        </header>
        <div className="container-fluid">
          {state.view ? (
            <>
              {" "}
              <Navbar
                collapseOnSelect
                expand="sm"
                bg="lg"
                variant="light"
                className=" bg-light"
              >
                <Container fluid>
                  <Navbar.Brand href="/">ENP</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <NavLink className="nav-link" to="/profesores">
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
                  <Button className="close-btn">Cerrar sesión</Button>
                </Container>
              </Navbar>{" "}
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
