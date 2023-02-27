import { Container, Row, Col, Button } from 'react-bootstrap';


export default function NotFound(){


    return (
        <Container className='error-page'>
            <Row className='title'>
                <Col className='text-center'>
                    <h2>Página no encontrada</h2>
                </Col>
            </Row>
            <Row className='description'>
                <Col xs={12} className='text-center'>
                    La p&aacute;gina no existe o ha cambiado de sitio.
                </Col>
                <Col xs={12} className='text-center'>
                    <Button>Ir a inicio</Button>
                </Col>
            </Row>
        </Container>
    )
}