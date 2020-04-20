import React, { Component } from "react";
import './clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
      day: new Date().toLocaleString(),


    };


  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
        day: new Date().toDateString(),


      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='clock'>
        <div className='clock-date'><span>{this.state.day} {this.state.year}</span></div>
        <div className='clock-time'><span className='clock-time-hour'>{this.state.hour}</span> : <span className='clock-time-min'>{this.state.min}</span> : <span className='clock-time-sec'>{this.state.sec}</span></div>
      </div>
    );
  }
}

export default Clock;
