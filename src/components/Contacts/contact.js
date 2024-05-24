import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id='Contact'>
        <div className="container4">
        <div className="contact-left">
            <h1>Contact <span className='me'> Me</span></h1>
            <h3>Feel free to reach out!</h3>
        </div>
        
        <div className="contact-right">
                    <p> <i class="fa-solid fa-paper-plane"></i>sjsaurabh082@gmail.com</p>
                    <p><i class="fa-solid fa-square-phone"></i>9967672613</p>
                    <div class="social-icons">
                        <a href="https://wa.me/9967672613" target="_blank" className='what'><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className='insta'><i class="fa-brands fa-instagram" ></i></a>
                        <a href="https://www.linkedin.com/in/saurabh-jaiswar-591053247/" target="_blank" className='link'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Saurabhjaiswar05" target="_blank" className='git'><i class="fa-brands fa-github" ></i></a>
                    </div>
                </div>
        </div>
                <p className='copy'>Developed with ❤️ by Saurabh ©️ 2024</p>
    </section>
  )
}

export default Contact
