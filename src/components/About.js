import React from 'react'
import profile from '../images/profile.jpg'


//Components


const About = () => {

  return (

      <div id='about' className=" row " >
        <div className="col s12 m6 l4">
          <img className="responsive-img z-depth-2 mt-2" src={profile} />
        </div>
        <div className="col s12 m6 l8">
          <h3>Hi, I'm Vanessa</h3>
          <h4> I am a software developer from Austin, Texas that thrives in a collaborative environment. I love to break down problems and follow the code to the best solution.   </h4>
         
        </div>
      </div>
  )
};

export default About;