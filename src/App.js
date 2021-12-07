import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <>
      <Container fluid>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Row>
                <Col>
                  <Navbar.Brand href="#home">VNK-Learnings</Navbar.Brand>
                </Col>

                <Col>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#nodejs">Node Js</Nav.Link>
                    <Nav.Link href="#reactjs">React JS</Nav.Link>
                    <Nav.Link href="#aws">AWS</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                  </Nav>
                </Col>         
              </Row>
            </Container>
          </Navbar>      
      </Container>
      
      
      <h3 className="center">Website Coming up soon...</h3>
      <br />      
  </>
  );
}

export default App;
