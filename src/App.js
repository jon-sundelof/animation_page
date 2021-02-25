// import './App.css';
import React, {useState, useEffect} from 'react'
import "./styles.scss"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import axios from "axios"


let today = new Date()
let time;

function App() {

  const [isDay, setIsDay] = useState(undefined)
  const [temp, setTemp] = useState(undefined)
  const [lat, setLat] = useState(undefined)
  const [lon, setLon] = useState(undefined)
  const [key, setKey] = useState(undefined)
  // const [theme, setTheme] = useState("dark")

  time = today.getHours();

  useEffect(() => {
    if(time > 17){
      setIsDay(false)
    } else {
      setIsDay(true)
    }
  }, [time])

  const options = {method: 'GET'};
  // const getGeoLoc = () =>{
  //   window.navigator.geolocation.getCurrentPosition((position) =>  {
  //     setLat(position.coords.latitude)
  //     setLon(position.coords.longitude)

  //   })
  // }

  // useEffect(() => {

  //  getGeoLoc()

  // }, [])

  // useEffect(() => {
  //   //*Vädret || dag eller kväll
  //   axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${key}?apikey=PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr&metric=true`, options)
  //   .then(response => {
  //       console.log(response.data)
  //       setIsDay(response.data[0].IsDaylight)
  //       setTemp(response.data[0].Temperature.Value)

  //   })
  //   .catch(err => console.error(err));
  // }, [key])

  // useEffect(() => {
  //   if(lat == undefined || lon == undefined) {
  //     axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr&q=59.33258%2C18.0649`)
  //       .then((res) => setKey(res.data.Key))
  //       .catch((err) => console.log(err))
  //   } else {
  //     axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr&q=${lat}%2C${lon}`)
  //       .then((res) => setKey(res.data.Key))
  //       .catch((err) => console.log(err))
  //   }
  // }, [lat, lon])




  return (
    <>

    <div className={time > 17 ? "content-wrapper dark-theme" : "content-wrapper"}>
      <Navbar />
      <Header isDay={isDay}/>
      <Main />
      {/* <Projects /> */}
      <Contact />
    </div>
    </>
  )

}

export default App;
