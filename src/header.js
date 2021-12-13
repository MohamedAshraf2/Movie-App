import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

export default function Header (){
  

    return(
        <>
    <Navbar bg="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand className="text-light">Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light">
              <Link className="text-decoration-none ms-5 me-5 text-light" to="/login" >Login</Link>
              <Link className="text-decoration-none me-5 text-light" to="/register" >register</Link>
              <Link className="text-decoration-none me-5 text-light" to="/" > home </Link>
              <Link className="text-decoration-none me-5 text-light" to="/fav" >favorite</Link>
              <Link className="text-decoration-none me-5 text-light" to="/Counter">Language</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}