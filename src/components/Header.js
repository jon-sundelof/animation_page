import React, {useState } from 'react'
import Cloud from './svg-components/Cloud'
import Sun from './svg-components/Sun'
import Moon from './svg-components/Moon'
import Star from './svg-components/Star'
import axios from "axios"

import { useSelector } from 'react-redux'

import useSound from 'use-sound';
import Squezze from '../sounds/squezze.wav'

const Header = ({isDay}) => {
    const volume = useSelector(state => state.Soundvolume)
    const [play] = useSound(Squezze, {volume: volume});
    const [bouncePlayed, setBouncePlayed] = useState(false)

    const SquezzeSound = () => {
        if(bouncePlayed) return
        play()
        setBouncePlayed(true)
        setTimeout(() => {
            setBouncePlayed(false)
        }, 1300)
    }

    return (
        <header>

            {isDay ? <div onClick={SquezzeSound}><Sun className="sun-svg" /></div>  : <div onClick={SquezzeSound}><Moon onClick={play} className="moon-svg" /></div>}
            {!isDay ? <Star className="star-one"/> : ''}
            {!isDay ? <Star className="star-two"/> : ''}

            <Cloud className="cloud-svg" />

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