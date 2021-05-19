import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <div>
          <FontAwesomeIcon icon={ faFacebook } size="sm"/>
          <FontAwesomeIcon icon={ faTwitter }  size="lg" />
          <FontAwesomeIcon icon={ faAddressBook } size="4x" />
          </div> 

          <br></br>
          <Accordion defaultActiveKey="0" style={{ color: "#000" }}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <br></br>

          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share98 your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>

          <br></br>

          <Card className="text-center" style={{ color: "#000" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="danger">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>

          <br></br>

          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="primary">This is a primary alert—check it out!</Alert>

          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
