import React, { useState } from 'react'
import { InputButton } from './SideBarElements'
import { Search } from 'react-bootstrap-icons';

import './SideBarElements.css'

const SideBar = ({weatherData, curData, curWeatherType,  buttonAction, lastFourLocations, curDetails}) => {
  const [input, setInput] = useState("");

  const buttonFunction = (cityName) => {
    setInput("")
    buttonAction({cityName: cityName})
  }

  return (
    <div className="sidebar">
      <div className="input-section">
        <input placeholder="Location" value={input} onChange={e => setInput(e.target.value)} className="input transparent-font"/>
        <InputButton color={weatherData[curWeatherType].primaryColor} secondaryColor={weatherData[curWeatherType].secondaryColor} onClick={() => buttonFunction(input)}>
          <Search size="30"/>
        </InputButton>
      </div>
      <div className="content-wrapper">
        <div className="info-section non-mobile">
          {lastFourLocations.map((location,index) => {
            if (location) {
              return (
                <span key={index} className="transparent-font info-column" onClick={() => buttonFunction(location)}>
                  {location}
                </span>
              )
            }
            return (
              <span className="transparent-font" key={index}/>
            )
          })}
        </div>
        <div className="info-title">{curData ? "Weather Details" : ""}</div>
        <div className="info-section">
          {curDetails.map((detail,index) => {
              return (
                <div className="info-column" key={index}>
                  <span className="transparent-font">
                    {detail[0]}
                  </span>
                  <span className="regular-font">
                    {detail[1]}
                  </span>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
