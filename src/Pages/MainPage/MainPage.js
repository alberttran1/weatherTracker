import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./MainPageElements.css"
import weatherData from '../../WeatherTypeData'

import SideBar from '../../Components/SideBar/SideBar'

const HeroSection = () => {
  const randomCityNames = ["Toronto", "Waterloo", "New York", "Dubai", "Tokyo", "Paris", "London", "Bangkok", "Hong Kong", "Singapore", "Rome", "Macau", "Istanbul", "Kuala Lumpur"]
  const weatherTypes = ["Clouds", "Clear", "Rain", "Snow", "Thunderstorm", "Drizzle", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"];
  const [loading, setLoading] = useState(true);
  const [curData, setCurData] = useState(null);
  const [curWeatherType, setCurWeatherType] = useState(weatherTypes[Math.floor(Math.random()*weatherTypes.length)]);
  const [curDateTime, setCurDateTime] = useState("");
  const [curKey, setCurKey] = useState(0);
  const [lastFourLocations, setLastFourLocations] = useState(["","","",""])
  const [curDetails, setCurDetails] = useState([["" , ""],
                                                ["", ""],
                                                ["", ""],
                                                ["", ""]])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getInfo({geoCode:[position.coords.latitude,position.coords.longitude]})
      },
      (error) => {
        console.error(error);
        getInfo({cityName: randomCityNames[Math.floor(Math.random()*randomCityNames.length)]})
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const getInfo = async (locationData) => {
    try {
      setLoading(true);
      const geoCode = locationData.geoCode;
      var cityName;
      if (geoCode) {
        const lat = geoCode[0];
        const lon = geoCode[1];
        const limit = 1;
        const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=c3f905ff0a6cf9e4483e3643929c42da`);
        cityName = data[0].name 
      } else {
        cityName = locationData.cityName;
      }
      //change Data
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c3f905ff0a6cf9e4483e3643929c42da`);
      setCurData(data);

      //change Date
      setCurDateTime(Date().toLocaleString());

      //change Details
      var weatherType = ["",""];
      if (data.clouds) {
        weatherType = ["Clouds",`${data.clouds.all}%`]
      } if (data.rain) {
        weatherType = ["Rain", `${data.rain["1h"]} mm/h`]
      } if (data.snow) {
        weatherType = ["Snow", `${data.snow["1h"]} mm/h`]
      }
      setCurDetails([["Feels like", `${parseInt(data.main.feels_like - 273.15)}°`],
                    ["Humidity", `${data.main.humidity}%`],
                    ["Wind", `${data.wind.speed} m/sec`],
                    weatherType])

      //change LastFourLocations
      var lastFour = lastFourLocations;
      if (!lastFour.includes(data.name)){
        lastFour.pop();
        lastFour.unshift(data.name);
        setLastFourLocations(lastFour);
      }

      setCurWeatherType(data.weather[0].main)

      
      setCurKey(curKey + 1)
      setLoading(false);
      
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
  }

  const formatDate = (rawDate) => {
    const days = {"Mon": "Monday",
                  "Tues": "Tuesday",
                  "Wed": "Wednesday",
                  "Thurs": "Thursday",
                  "Fri": "Friday",
                  "Sat": "Saturday",
                  "Sun": "Sunday"}
    if (!rawDate) {
      return ""
    }
    const dateData = rawDate.split(" ")
    var output = `${dateData[4].substring(0,5)} - ${days[dateData[0]]}, ${dateData[1]} ${dateData[2]} '${dateData[3].substring(2,4)}`
    return output;
  }

  return (
    <>
      {loading ? 
        <div className="loading"/>
      :
        null
      }
    <div id="hero-section" key={curKey}>


      <div className="image-holder">
        <img className="image" src={weatherData[curWeatherType].img} alt=""/>
      </div>
      <div className="text-section" key={curWeatherType}>
        <div className="large-text marginL1">
          {curData ? `${parseInt(curData.main.temp - 273.15)}°` : ""}
        </div>
        <span  className="top-margin marginL3">
          <div className="medium-text">
            {curData ? curData.name : ""}
          </div>
          <div className="small-text">
            {formatDate(curDateTime)}
          </div>
        </span>
        <span  className="top-margin">
          <img className="icon" src={weatherData[curWeatherType].icon} alt=""/>
          <div className="small-text">{curData ? curData.weather[0].description : ""}</div>
        </span>
      </div>
      <div/>
      <SideBar weatherData={weatherData} curData={curData} curWeatherType={curWeatherType} buttonAction={getInfo} lastFourLocations={lastFourLocations} curDetails={curDetails}/>
    </div>
    </>
  )
}

export default HeroSection
