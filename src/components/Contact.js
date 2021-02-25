import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1>Contact</h1>
            <form>
                <div className="box">
                    <input type="text" name="" required />
                    <label>Name</label>
                </div>
                <div className="box">
                    <input type="text" name="" required />
                    <label>Email</label>
                </div>
                <div className="box">
                    <textarea type="message" name="" rows="5" maxLength="250" required />
                    <label>Message</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
            </div>
        </div>
    )
}

export default Contact
