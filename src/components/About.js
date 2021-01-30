import React from 'react'
import profile from '../images/profile.jpg'


//Components


const About = () => {

  return (

      <div id='about' className="row" >
        <div className="col s6">
          <img width="300" src={profile} />
        </div>
        <div className="col s6">
          <h2>Hi, I'm Vanessa</h2>
          <h4> Fullstack Developer</h4>
        </div>
      </div>
  )
};

export default About;