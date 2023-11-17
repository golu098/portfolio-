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
// import Resume from '../pages/Resume';
import Error from '../Error';

function NavBar() {
  return (
    <Router>
      <div>
        <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: '#000000' }} variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" style={{fontStyle:'bold',color:'rgb(191,145,252)',fontWeight:'900'}}>Shiv Kant Kumar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* NavDropdown or other Nav items */}
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                {/* <Nav.Link style={{ textDecoration: 'none', color: 'white' }}> */}
                {/* <a href="https://drive.google.com/file/d/1oB7yEr4T0w7HyEG4ydJuaFEQBJfWpQ0R/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Resume</a> */}
    
{/* </Nav.Link> */}


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/resume" component={Resume} /> */}

        <Route path="/" exact component={Home} />
        
        <Route path="*" element={Error} />
      </div>
    </Router>
  );
}

export default NavBar;
