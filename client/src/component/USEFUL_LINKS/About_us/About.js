import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../footer/footer'
import './About.css'

const About = () => {
  return (
    <>
    
    <Navbar1  />

<div className="container">
  <div className="row">
    <div className="col-12 infoslide">
      <h3>CONTACT US</h3>
      <p>The site was created by students of New Cairo University</p>
      <div className="emailphone">
        <div className="phone">
        <i className="fas fa-phone me-3"></i>
            01207465753
        </div>
        <div className="email">
        <i className="fas fa-envelope me-3"></i>
          <a href="/">cis@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="col-12 ourmistion">
      <p>Our mission: To motivate and inspire people to get living the life they deserve. <br />
When you look for a property, it’s not just a better home you seek, it’s a better future. <br />
Unlock Your Potential</p>
    </div>
    <div className=" update">
      <div className="col-lg-6 col-sm-12 left">
        <div className="leftdiv">
        <h4>MORE ACQUISITIONS</h4>
        <p>SpaceKey website has been created
In the year 2023 to facilitate the process of buying and renting on the Internet</p>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 right">
        <div className="date">April 2023</div>
      </div>
    </div>
  </div>
</div>

    <Footer  />  
    </>
  )
}

export default About
