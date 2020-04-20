import React, { Component } from "react";
import "./Clock.css";

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
      <div>
        <span>{this.state.day} {this.state.year}</span><br/>
        <span>{this.state.hour}</span> : <span>{this.state.min}</span> : <span>{this.state.sec}</span>
      </div>
    );
  }
}

export default Clock;
