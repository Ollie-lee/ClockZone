import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock.js';
import * as serviceWorker from './serviceWorker';
import ClockZone from './ClockZone.js';


ReactDOM.render(
  <React.StrictMode>
    <div className='clockWall'>
      <ClockZone className='clockWall-clock' />
      <ClockZone className='clockWall-clock' city='London' />
      <ClockZone className='clockWall-clock' city='Seoul' />
      <ClockZone className='clockWall-clock' city='New_York' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
