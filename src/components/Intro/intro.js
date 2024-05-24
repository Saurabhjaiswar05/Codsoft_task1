import React from 'react'
import "./intro.css"
import home from "../Images/home.jpg"

function Intro() {
  return (
    <section id='Home'>
      <div className="container1">
        <div className="left">
            <span className="hello">Hello</span><br />
            <span className="introText">I'm <span className="introName">Saurabh</span><br></br>Web Developer</span>
            <p className="introPara">
                Im a skilled web designer with experience in creating <br /> visually  appealing  and user-friedly websites
            </p>
            <button className='btn'>Hire Me</button>
        </div>

        <div className="right">
            <img src={home} alt="homeprofile"/>
        </div>
      </div>
    </section>
  )
}

export default Intro
