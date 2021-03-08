
import React from 'react'


//Components
import CSS from '../images/CSS.png'
import HTML from '../images/HTML.png'
import javascript from '../images/javascript.png'
import ReactIcon from '../images/ReactIcon.png'
import NodeJs from '../images/NodeJs.png'
import Postgress from '../images/Postgress.png'
import MongoDb2 from '../images/MongoDb2.png'
import Python from '../images/Python.png'
import Postman2 from '../images/Postman2.png'
import flaskLogo from '../images/flaskLogo.png'

const Skills = () => {



  return (
    <div id='skills' >
      <h2 className="center-align"> Skills</h2>
      
      <div className="row ">
        <img className="col s4 col-content" alt="CSS" src={CSS} />
        <img className="col s4 col-content" alt="HTML" src={HTML} />
        <img className="col s4 col-content" alt="javascript" src={javascript} />
        <img className="col s4 col-content" alt="ReactIcon" src={ReactIcon} />
        <img className="col s4 col-content" alt="Postgress" src={Postgress} />
        <img className="col s4 col-content" alt="MongoDb2" src={MongoDb2} />
        <img className="col s4 col-content" alt="Python" src={Python} />
        <img className="col s4 col-content" alt="Postman2" src={Postman2} />
        <img className="col s4 col-content" alt="NodeJs" src={NodeJs} />
      </div>
        
      
    </div>
  )
}

export default Skills;
