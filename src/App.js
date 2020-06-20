import React, { useState, useEffect } from 'react'
import "./styles.css";
import AnalogClock, { Themes } from 'react-analog-clock';
import TimeZone from './TimeZone.js'
import moment from 'moment'

require('moment-timezone');






export default function App() {


  const [timezone, setTimezone] = useState([
    { value: '0.0', label: '(GMT+00:00) London": "Europe/London"', location:'Europe/London' }
  ]);
  


  const handleTimeZone = (e) => {
    setTimezone([...timezone, e])
  }
  
  const handleClick = (zone) => {
    const index = timezone.findIndex(x => x.label===zone.label)
    const copyArray = [...timezone]
    copyArray.splice(index, 1);
    setTimezone(copyArray);
  }


  let m = moment();
  
  return (
    <div className="App">
        
        <TimeZone handleTimeZone={handleTimeZone}/>
       <div className="container">
       {
       
          timezone.map((zone)=> (
            <>
              <div className="item">
                <div className="clock">
                  <AnalogClock 
                  theme={Themes.dark} 
                  gmtOffset={zone.value}
                    /> 
                 </div>
                  <label className="label-location">{m.tz(zone.location).format('YYYY-MM-DD')}</label>
                  <br/>
                  <label className="label-zone">{zone.label}</label>
                  <br/>
                  <button className="button"
                    onClick= {()=> handleClick(zone)}>Delete
                  </button> 
              </div>
            </> 
            ) 
          )
       }
       </div>
    </div>
  );
}

