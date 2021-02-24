// import './App.css';
import React, {useState, useEffect} from 'react'
import "./styles.scss"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Header from "./components/Header"
import Projects from "./components/Projects"
import axios from "axios"

function App() {

  const [isDay, setIsDay] = useState(undefined)
  const [temp, setTemp] = useState(undefined)
  // const [theme, setTheme] = useState("dark")
  let theme = 'light'


  const options = {method: 'GET'};
  useEffect(() => {

    axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/314929?apikey=PcZCCWwhI5TTwiCJGkTC81CwfxvATQgr&metric=true`)
    .then(response => {
        console.log(response.data)
        setIsDay(response.data[0].IsDaylight)
        setTemp(response.data[0].Temperature.Value)
        
    })
    .catch(err => console.error(err));
    
  }, [])


  return (
    <>
      <Navbar theme={theme}/>
      <Header isDay={isDay}/>
      <Main />
      <Projects />
    </>
  )

}

export default App;
