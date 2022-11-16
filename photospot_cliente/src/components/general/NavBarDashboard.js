import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../../images/My project.png';

function NavBarDashboard() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="Logo" style={{height: '40px'}}/></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto" >
            <Button variant="danger" href="/">Cerrar Sesion</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavBarDashboard }