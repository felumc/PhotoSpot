import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../images/My project.png';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Inicio"><img src={logo} alt="Logo" style={{height: '40px'}}/></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto" >
            <Nav.Link href="#" style={{marginRight: '50px'}}>Spots</Nav.Link>
            <Nav.Link href="/Contacto" style={{marginRight: '50px'}}>Contacto</Nav.Link>
            <Nav.Link href="/" style={{marginRight: '50px'}}>Login</Nav.Link>
            <Button variant="danger" href="/Register">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavBar }