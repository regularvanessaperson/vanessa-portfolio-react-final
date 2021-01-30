import { logDOM } from '@testing-library/react';
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
      <h2>Vanessa's Skills</h2>
      
      <div className="row">
        <div className="col s4"><img className="col s4 col-content" alt="CSS" src={CSS} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="HTML" src={HTML} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="javascript" src={javascript} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="ReactIcon" src={ReactIcon} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="NodeJs" src={NodeJs} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="Postgress" src={Postgress} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="MongoDb2" src={MongoDb2} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="Python" src={Python} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="Postman2" src={Postman2} /></div>
        <div className="col s4"><img className="col s4 col-content" alt="flaskLogo" src={flaskLogo} /></div>
      </div>
        
      
    </div>
  )
}

export default Skills;
