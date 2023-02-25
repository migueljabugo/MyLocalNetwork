import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>Header</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
