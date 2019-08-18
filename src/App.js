import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from "react-icons/fa";
import Countdown, { CountdownApi } from 'react-countdown-now';
import UIfx from 'uifx';
import tickAudio from './assets/alarm.mp3';

const tick = new UIfx({ asset: tickAudio });

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClickBreakPlus = this.handleClickBreakPlus.bind(this);
    this.handleClickBreakMinus = this.handleClickBreakMinus.bind(this);
    this.handleClickTimePlus = this.handleClickTimePlus.bind(this);
    this.handleClickTimeMinus = this.handleClickTimeMinus.bind(this);
    this.timeCompleted = this.timeCompleted.bind(this);
    this.startPauseTimerHandler = this.startPauseTimerHandler.bind(this);

    this.state = {
      breakValue: 5,
      sessionValue: 1,
      isRunning: false,
      // false break, true session
      whichOneRunning: 1,
      time: 0,
    }
  }

  startPauseTimerHandler() {
    console.log(this.state);

    if (this.state.isRunning) {
      this.child.pause();
    } else {
      this.child.start();
    }

    this.setState({
      isRunning: !this.state.isRunning,
    })
  }

  handleUpdate = () => {
    this.forceUpdate();
  }

  handleClickBreakPlus() {
    console.log('break + clicked');
    if (!this.state.isRunning) {
      const newBreak = this.state.breakValue + 1;

      this.setState({
        breakValue: newBreak,
      })
    }
  }

  handleClickBreakMinus() {
    console.log('break - clicked');

    if (!this.state.isRunning) {
      const newBreak = this.state.breakValue - 1;

      this.setState({
        breakValue: newBreak,
      })
    }
  }

  handleClickTimePlus() {
    console.log('time + clicked');
    if (!this.state.isRunning) {
      const newTime = this.state.sessionValue + 1;

      this.setState({
        sessionValue: newTime,
      })
    }
  }

  handleClickTimeMinus() {
    console.log('time - clicked');
    if (!this.state.isRunning) {
      const newTime = this.state.sessionValue - 1;

      this.setState({
        sessionValue: newTime,
      })
    }
  }

  timeCompleted() {
    console.log('time completed');
    
    this.setState({
      whichOneRunning: !this.state.whichOneRunning,
    })

    tick.play();
    this.child.start();
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
                  Break Length
              </Col>
              </Row>

              <Row>
                <Col className="numberText">
                  {this.state.breakValue}
                </Col>
              </Row>

              <Row className="cursorPoint">
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
                  Session Length
              </Col>
              </Row>

              <Row>
                <Col className="numberText">
                  {this.state.sessionValue}
                </Col>
              </Row>

              <Row className="cursorPoint">
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
          <Col className="cursorPoint" onClick={this.startPauseTimerHandler}>
            <div className="circle_container">
              <div className="circle_main">
                <div className="circle_text_container">
                  <div className="circle_text">
                    <div>
                      {this.state.whichOneRunning == 0 ? (
                        'Break'
                      ) : (
                          'Session'
                        )}
                    </div>
                    <Countdown date={Date.now() + this.state.time}
                      renderer={props => <div>{props.minutes}:{props.seconds}</div>}
                      onComplete={this.timeCompleted}
                      autoStart={false}
                      ref={ref => (this.child = ref)}
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
