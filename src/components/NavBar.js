import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom' 


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" >
          <Nav.Link as={Link} to="/products">Productos</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto </Nav.Link>
          </Nav>
          <Nav>
            <CartWidget /> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
      
      
  );
}

export default NavBar;