import React, {useState, useEffect} from 'react'
import Cloud from './svg-components/Cloud'
import Sun from './svg-components/Sun'
import Moon from './svg-components/Moon'
import axios from "axios"

const Header = ({isDay}) => {

    return (
        <header>
            
            <Cloud className="cloud-svg" />
            {isDay ? <Sun className="sun-svg" /> : <Moon className="moon-svg" />}
            
            <h1 className="bouncing-header">
                <span>J</span>
                <span>O</span>
                <span>N</span>
                <br></br>
                <span>&</span>
                <br></br>
                <span>J</span>
                <span>E</span>
                <span>S</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
            </h1>
        </header >
    )
}



export default Header;