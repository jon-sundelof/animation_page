import React, {useState} from 'react'
import useSound from 'use-sound';
import Bounce from '../sounds/bounce-nav.wav'
import { useSelector, useDispatch } from 'react-redux'
import { setvolume } from './redux/actions'
import { Link } from 'react-scroll'


const Navbar = ({theme}) => {
    const volume = useSelector(state => state.Soundvolume)
    const dispatch = useDispatch()

    const [soundIcon, setSoundIcon] = useState(false)
    const [bouncePlayed, setBouncePlayed] = useState(false)
    const [play] = useSound(Bounce, {volume: volume});


    const BounceSfx = () =>{
        if(bouncePlayed) return
        play()
        setBouncePlayed(true)
        setTimeout(() => {
            setBouncePlayed(false)
        }, 300)

    }

    const EnableSfx = () => {
        setSoundIcon(!soundIcon)

        if(volume > 0){
            dispatch(setvolume(0))
        } else {
            dispatch(setvolume(0.45))
        }
    }


    return (
        <nav>
            <ul>
                <li onMouseEnter={() => BounceSfx()}>PROJECTS</li>
                <li onMouseEnter={BounceSfx}><Link to="aboutWrapper" smooth={true} spy={true} duration={500} >J & J</Link></li>
                <li onMouseEnter={BounceSfx}><Link spy={true} to="contact-container" smooth={true}>CONTACT</Link></li>
                <li onClick={EnableSfx} onMouseEnter={BounceSfx}>
                    {soundIcon ? <i className="fas fa-volume-up"></i> : <i className="fas fa-volume-mute"></i>}
                    </li>
            </ul>
        </nav>
    )
}
export default Navbar
