import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

function NavBar() {
  return (
    <Router>
      <div>
      <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: '#000000' }} variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Shiv Kant Kumar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* NavDropdown or other Nav items */}
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default NavBar;
