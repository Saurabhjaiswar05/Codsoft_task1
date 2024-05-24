import React from 'react'
import "./projects.css"

import project1 from "../Images/project1.avif"
import project2 from "../Images/project2.avif"
import project3 from "../Images/project3.avif"
const Projects = () => {
  return (
    <section id='Projects'>
      <div className="container3">
        <h1>Projects</h1>
        <div className="pro-main">
          <div className="main1">
            <img src={project1} alt="" />
            <h4>  Project1</h4>
            <p>This is project description you can write here 
              about your project.and the technologies that you used to made this projects.
            </p>
            <div className="btnn">
              <button className='btn1'>Demo</button>
              <button className='btn2'>Code</button>
            </div>
          </div>
          <div className="main2">
            <img src={project2} alt="" />
            <h4>Project2</h4>
            <p>This is project description you can write here 
              about your project.and the technologies that you used to made this projects.
            </p>
            <div className="btnn">
              <button className='btn1'>Demo</button>
              <button className='btn2'>Code</button>
            </div>
          </div>
          <div className="main3">
            <img src={project3} alt="" />
            <h4>Project3</h4>
            <p>This is project description you can write here 
              about your project.and the technologies that you used to made this projects.
            </p>
            <div className="btnn">
              <button className='btn1'>Demo</button>
              <button className='btn2'>Code</button>
            </div>
          </div>
        </div>
      </div>
        
      
    </section>
  )
}

export default Projects
