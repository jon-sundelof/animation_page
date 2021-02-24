import React, {useState} from 'react'
import useSound from 'use-sound';

import Bounce from '../sounds/bounce-nav.wav'

const Navbar = ({theme}) => {
    const [soundIcon, setSoundIcon] = useState(false)
    const [sfxVolume, setSfxVolume] = useState(0)
    const [play] = useSound(Bounce, {volume: sfxVolume});

    const BounceSfx = () => play()

    const EnableSfx = () => {
        setSoundIcon(!soundIcon)
        
        if(sfxVolume > 0){
            setSfxVolume(0)
        } else {
            setSfxVolume(0.45)
        }    
    }

    console.log(theme)

    return (
        <nav className={theme = 'dark' ? 'theme--dark' : 'theme--light'}>
            <ul>
                <li onMouseEnter={() => BounceSfx()}>PROJECTS</li>
                <li onMouseEnter={BounceSfx}>J & J</li>
                <li onMouseEnter={BounceSfx}>CONTACT</li>
                <li onClick={EnableSfx} onMouseEnter={BounceSfx}>
                    {soundIcon ? <i class="fas fa-volume-up"></i> : <i class="fas fa-volume-mute"></i>}
                    </li>
            </ul>
        </nav>
    )
}
export default Navbar
