import './Header.css';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'wouter';

function Header() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>Title</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
            <Navbar.Offcanvas>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link>
                    <Link to='/'>Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/Contact'>Contact</Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
