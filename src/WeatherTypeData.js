import Cloud from "./Images/Cloud.jpg"
import Clear from "./Images/Clear.jpg"
import Rain from "./Images/Rain.jpg"
import Snow from "./Images/Snow.jpg"
import Thunder from "./Images/Thunder.jpg"
import Drizzle from "./Images/Drizzle.jpg"
import Haze from "./Images/Haze.jpg"
import Mist from "./Images/Mist.jpg"
import Squall from "./Images/Squall.jpg"
import Tornado from "./Images/Tornado.jpg"

import CloudIcon from "./Images/cloudIcon.png"
import ClearIcon from "./Images/clearIcon.png"
import RainIcon from "./Images/rainIcon.png"
import SnowIcon from "./Images/snowIcon.png"
import ThunderIcon from "./Images/thunderIcon.png"
import DrizzleIcon from "./Images/drizzleIcon.png"
import AtmosphereIcon from "./Images/atmosphereIcon.png"
import SquallIcon from "./Images/squallIcon.png"
import TornadoIcon from "./Images/tornadoIcon.png"

 const data = { "Clouds":   {img: Cloud,
                            primaryColor: "#D87607",
                            secondaryColor: "#EA9751",
                            icon: CloudIcon},
                "Clear":    {img: Clear,
                            primaryColor: "#3461A5",
                            secondaryColor: "#C4D3E8",
                            icon: ClearIcon},
                "Rain":     {img: Rain,
                            primaryColor: "#5C807C",
                            secondaryColor: "#9BBFBD",
                            icon: RainIcon},
                "Snow":     {img: Snow,
                            primaryColor: "#1F2F3E",
                            secondaryColor: "#C3E5F0",
                            icon: SnowIcon},
                "Thunderstorm":  {img: Thunder,
                            primaryColor: "#22489D",
                            secondaryColor: "#BBC2EE",
                            icon: ThunderIcon},
                "Drizzle":  {img: Drizzle,
                            primaryColor: "#446783",
                            secondaryColor: "#ACC1D2",
                            icon: DrizzleIcon},
                "Mist":     {img: Mist,
                            primaryColor: "#25302A",
                            secondaryColor: "#99A1A4",
                            icon: AtmosphereIcon},
                "Smoke":     {img: Haze,
                            primaryColor: "#958B68",
                            secondaryColor: "#FEFFED",
                            icon: AtmosphereIcon},
                "Haze":     {img: Haze,
                            primaryColor: "#958B68",
                            secondaryColor: "#FEFFED",
                            icon: AtmosphereIcon},
                "Dust":     {img: Haze,
                            primaryColor: "#958B68",
                            secondaryColor: "#FEFFED",
                            icon: AtmosphereIcon},
                "Fog":     {img: Mist,
                            primaryColor: "#25302A",
                            secondaryColor: "#99A1A4",
                            icon: AtmosphereIcon},
                "Sand":     {img: Haze,
                            primaryColor: "#958B68",
                            secondaryColor: "#FEFFED",
                            icon: AtmosphereIcon},
                "Ash":     {img: Haze,
                            primaryColor: "#958B68",
                            secondaryColor: "#FEFFED",
                            icon: AtmosphereIcon},                
                "Squall":   {img: Squall,
                            primaryColor: "#4974A7",
                            secondaryColor: "#A7A8BD",
                            icon: SquallIcon},                
                "Tornado":  {img: Tornado,
                            primaryColor: "#4D5339",
                            secondaryColor: "#9BAD97",
                            icon: TornadoIcon}}

export default data;