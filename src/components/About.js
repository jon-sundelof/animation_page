import React, {useState, useEffect} from 'react'
import TextTransition, { presets } from "react-text-transition";
import Hand from '../img/pink-two.png'

const TEXTS = [
    "Website",
    "Dreams",
    "Ideas",
    "Goals",
    "Ambitions",
    "Work"
];

const About = () => {
    const [index, setIndex] = useState(0);
    const [moveHand, setMoveHand] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <div className="aboutWrapper">
            <div className="headerAbout">
                <div className="mainText">
                    <h1>We make your <span><TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.molasses }
                    /></span> come true</h1>
                </div>
                <img id="hand-gesture" className={moveHand ? "moveHand" : ""} src={Hand}/>
            {/* <p className="infoText">
                With an eye for <span>style</span> and a little touch of <span>brainpower</span> we can create anything here at J & J!
            </p> */}
            
            </div>
        </div>
    )
}

export default About
