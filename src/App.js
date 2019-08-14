import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from "react-icons/fa";
import Countdown from 'react-countdown-now';
import UIfx from 'uifx';
import tickAudio from './assets/alarm.mp3';

const tick = new UIfx({asset: tickAudio});

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClickBreakPlus = this.handleClickBreakPlus.bind(this);
    this.handleClickBreakMinus = this.handleClickBreakMinus.bind(this);
    this.handleClickTimePlus = this.handleClickTimePlus.bind(this);
    this.handleClickTimeMinus = this.handleClickTimeMinus.bind(this);
    this.timeCompleted = this.timeCompleted.bind(this);

    this.state = {
      breakValue: 5,
      timeValue: 1,
    }

  }
  handleClickBreakPlus() {
    console.log('break + clicked');

    const newBreak = this.state.breakValue + 1;

    this.setState({
      breakValue: newBreak,
    })
  }

  handleClickBreakMinus() {
    console.log('break - clicked');

    const newBreak = this.state.breakValue - 1;

    this.setState({
      breakValue: newBreak,
    })
  }

  handleClickTimePlus() {
    console.log('time + clicked');

    const newTime = this.state.timeValue + 1;

    this.setState({
      timeValue: newTime,
    })
  }

  handleClickTimeMinus() {
    console.log('time - clicked');

    const newTime = this.state.timeValue - 1;

    this.setState({
      timeValue: newTime,
    })
  }

  timeCompleted() {
    console.log('time completed');
    tick.play();
  }

  render() {
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
                  {this.state.breakValue}
                </Col>
              </Row>

              <Row>
                <Col className="text-right" onClick={this.handleClickBreakPlus}>
                  <FaPlus />
                </Col>
                <Col className="text-left" onClick={this.handleClickBreakMinus}>
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
                  {this.state.timeValue}
                </Col>
              </Row>

              <Row>
                <Col className="text-right" onClick={this.handleClickTimePlus}>
                  <FaPlus />
                </Col>
                <Col className="text-left" onClick={this.handleClickTimeMinus}>
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
                    <Countdown date={Date.now() + this.state.timeValue * 60 * 1000}
                      renderer={props => <div>{props.minutes}:{props.seconds}</div>}
                      onComplete={this.timeCompleted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
