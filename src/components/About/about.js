import React from 'react'
import "./about.css"
import image2 from "../Images/home.jpg"

function About() {
  return (
    <section >
        <div className="container2" id='About'>
            <div className="head">
                <h1 id='shift'>About Me</h1>
            </div>
           
           <div className="bottom">

            <div className="left-img">
                <img src={image2} alt="aboutImage"/>
            </div>

            <div className="skills">
              <h1 className='hii' id='cent'>Skills</h1>
            
                   <h2 id='boom'>Frontend</h2>
                   <span className='one'><i class="fa-brands fa-html5"></i>HTML</span>
                   <span className='two'><i class="fa-brands fa-css3"></i>CSS</span>
                   <span className='voilate'><i class="fa-brands fa-bootstrap"></i>Boostrap</span>
                   <span className='three'><i class="fa-brands fa-js"></i>JS</span>
                   <span className='two'><i class="fa-brands fa-react"></i>React</span>
                   
          
              <h2>Backend</h2>
              
                <span className='four'><i class="fa-brands fa-node"></i>NodeJs</span>
              <span className='three'><i class="fa-brands fa-python"></i>Python</span>
              

                <h2>Database</h2>
                
                <span className='four'><i class="fa-solid fa-database"></i>MongoDB</span>
                <span className='one'><i class="fa-solid fa-database"></i>Mysql</span>
                
            
                <h2>Others</h2>
              
                <span><i class="fa-brands fa-github"></i>Github/Git</span>
                <span>VsCode</span>
                <span>Postman</span>
                
                 
            </div>

            </div>
        </div>
    </section>
  )
}

export default About
