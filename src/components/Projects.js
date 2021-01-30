import React, { useEffect, useState } from 'react'

import M from "materialize-css/dist/js/materialize.min.js"


import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'

//Components
import Spinner from './common/Spinner'


const Projects = () => {

    // const [data, setData] = useState([])
    //used for handling loader
    const [loading, setLoading] = useState(true)

    // const initializeCarousel = () =>{
    //   document.addEventListener('DOMContentLoaded', function() {
    //     let elems = document.querySelectorAll('.carousel');
    //     let instances = M.Carousel.init(elems, 1000);
    //   });
    // }

    useEffect(()=>{
    // Init Tabs Materialize JS
      // initializeCarousel()
      setLoading(false)
    }, [])

  
    const display = () => {
  
      if(loading){
        return <Spinner/>
      }else{
        return <div className="row table-wrapper">
          <div className="card col s6 carousel-item">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={project1}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Typing Kareoke<i className="material-icons right">+</i></span>
              <div class="card-action">
                <a href="https://github.com/regularvanessaperson/typing_game_project">Github</a>
                <a href="https://regularvanessaperson.github.io/typing_game_project/">Deployed App</a>
            </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">-</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          <div  className="card col s6 carousel-item">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={project2}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Board Game Library<i className="material-icons right">+</i></span>
              <div class="card-action">
                 <a href="https://github.com/regularvanessaperson/project-2-818">Github</a>
                 <a href="https://board-game-library-app-project.herokuapp.com/">Deployed App</a>
            </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">-</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          <div  className="card col s6 carousel-item">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={project3}/>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">+</i></span>
              <div class="card-action">
                <a href="#">Github</a>
                <a href="#">Deployed App</a>
            </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">-</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        
      }
    }
  
  
    return (
      <div id='projects' className="row">
        <h2>Vanessa's Project Page needs to be updated</h2>
        <div className="row">{display()}</div>
      </div>
    )
  };

export default Projects;