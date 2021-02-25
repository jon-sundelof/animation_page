import React, { useState, useEffect } from 'react'
import About from "./About"
import Contact from "./Contact"

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
            <About />

        </main >



    )
}



export default Main
