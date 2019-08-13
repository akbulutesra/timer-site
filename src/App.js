import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from "react-icons/fa";


function App() {
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <Container>
            <Row>
              <Col className="titleText">
                Break
              </Col>
            </Row>

            <Row>
              <Col className="numberText">
                5
              </Col>
            </Row>

            <Row>
              <Col className="text-right">
                <FaPlus />
              </Col>
              <Col className="text-left">
                <FaMinus />
              </Col>
            </Row>
          </Container>
        </Col>

        <Col>
          <Container>
            <Row>
              <Col className="titleText">
                Time
              </Col>
            </Row>

            <Row>
              <Col className="numberText">
                5
              </Col>
            </Row>

            <Row>
              <Col className="text-right">
                <FaPlus />
              </Col>
              <Col className="text-left">
                <FaMinus />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <div className="circle_container">
            <div className="circle_main">
              <div className="circle_text_container">
                <div className="circle_text">
                  25:00
			          </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
