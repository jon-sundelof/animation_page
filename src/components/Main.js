import React, { useState, useEffect } from 'react'
import About from "./About"
import Hand from '../img/pink.png'

const Main = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 350)
        })
    }, [])
    return (
        <main>
            {/* <div className="main-wrapper">
                <div className={scroll ? "title" : ""}>J & J WEBBDESIGN</div>
                <p className="subtitle">hardworking | enthusiasts | masterminds</p>
                <p className="quote">“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” <br /> – Rob Siltanen</p>
            </div> */}
            <img className="hand-gesture" src={Hand} />
            <About />
        </main >
    )
}



export default Main
