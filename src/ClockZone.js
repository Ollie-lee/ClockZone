import React, { Component } from "react";
import './clock.css';
import moment from 'moment-timezone';

function fuzzyQuery(list, keyWord) {
    let resCity;
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(keyWord) >= 0) {
            resCity = list[i];
        }
    }
    return resCity;
}

const cities = moment.tz.names();



class ClockZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLocation: this.props.city,
            hour: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getHours(),
            min: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getMinutes(),
            sec: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getSeconds(),
            day: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.toLocaleString(),
            location: moment.tz.guess(),
        };


    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                hour: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getHours(),
                min: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getMinutes(),
                sec: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.getSeconds(),
                day: moment().tz(this.props.city ? fuzzyQuery(cities, fuzzyQuery(cities, this.props.city)) : moment.tz.guess())._d.toDateString(),
                location: moment.tz.guess(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className='clock'>
                <div className='clock-location'>{this.props.city ? fuzzyQuery(cities, this.state.inputLocation) : this.state.location}</div>
                <div className='clock-date'><span>{this.state.day}</span></div>
                <div className='clock-time'><span className='clock-time-hour'>{this.state.hour}</span> : <span className='clock-time-min'>{this.state.min}</span> : <span className='clock-time-sec'>{this.state.sec}</span></div>
            </div>
        );
    }

}

export default ClockZone;
