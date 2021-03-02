import React, { useEffect, useState } from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'


import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'



//Components
import Spinner from './common/Spinner'


const Projects = () => {

  // const [data, setData] = useState([])
  //used for handling loader
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    // Init Tabs Materialize JS
    // initializeCarousel()
    const M = window.M
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});


    });
    setLoading(false)
  }, [])


  const display = () => {

    if (loading) {
      return <Spinner />
    } else {
      return <div className=" row ">
        <div className="card large col s12 m6 l6 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project1} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Typing Kareoke<i className="material-icons right">+</i></span>
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/typing_game_project">Github</a>
              <a href="https://regularvanessaperson.github.io/typing_game_project/">Deployed App</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Typing Kareoke<i className="material-icons right">-</i></span>
            <p>Typing Kareoke is built using javascript DOM manipulation. The player starts the game to type the lyrics before the progressbar reaches the end. Each keystroke that the player types correctly will make the cursor move forward and the color for the typed characters changes using CSS. At the end of the song the player will get their words per minute time and the option to play again.</p>
          </div>
        </div>
        <div className="card large col s12 m6 l6 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project2} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Board Game Library<i className="material-icons right">+</i></span>
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/project-2-818">Github</a>
              <a href="https://board-game-library-app-project.herokuapp.com/">Deployed App</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Board Game Library<i className="material-icons right">-</i></span>
            <p>This application is built using Postgresql with Sequelize on the backend and Express Layouts. The </p>
          </div>
        </div>
        <div className="card large col s12 m6 l6 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project3} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Chirper<i className="material-icons right">+</i></span>
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/Team-7-frontend">Github</a>
              <a href="https://chirper-chirp.herokuapp.com/login">Deployed App</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Chirper<i className="material-icons right">-</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
        <div className="card large col s12 m6 l6 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project4} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Tarot Journal<i className="material-icons right">+</i></span>
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/frontend-next-tarot">Github</a>
              <a href="https://tarotjournal-front.herokuapp.com/">Deployed App</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Tarot Journal<i className="material-icons right">-</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
      </div>

    }
  }


  return (
    <div id='projects' className="row">
      <h2>Projects</h2>
      <div className="row">{display()}</div>
    </div>
  )
};

export default Projects;