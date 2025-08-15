import React, { useEffect, useState } from 'react'



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
            <span className="card-title activator grey-text text-darken-4 ">Typing Kareoke<i className="material-icons right">+</i></span>
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/typing_game_project">Github</a>
              <a href="https://regularvanessaperson.github.io/typing_game_project/">Deployed App</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Typing Kareoke<i className="material-icons right">-</i></span>
            <p className= "">Typing Kareoke is built using javascript DOM manipulation. The player starts the game to type the lyrics before the progressbar reaches the end. Each keystroke that the player types correctly will make the cursor move forward and the color for the typed characters changes using CSS. At the end of the song the player will get their words per minute time and the option to play again.</p>
          </div>
        </div>
        <div className="card large col s12 m6 l6 hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project2} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Board Game Library<i className="material-icons right">+</i></span>
            {/* <div className="card-text d-flex flex-row flex-wrap" >
              <div className="p-2">Javascript </div>
              <div className="p-2">Express </div> 
              <div className="p-2">Postgresql </div> 
              <div className="p-2">Sequalize </div> 
              <div className="p-2">Node.js </div> 
              <div className="p-2">EJS  Templates</div>         
            </div> */}
            <div className="card-action">
              <a href="https://github.com/regularvanessaperson/project-2-818">Github</a>
              <a href="https://board-game-library-app-project.herokuapp.com/" disabled>Not Deployed</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Board Game Library<i className="material-icons right">-</i></span>
            <p>This application is built using Postgresql with Sequelize on the backend and Express Layouts with Bootstrap for the frontend. The user authentication was done using Passport. The user can login and search for boardgames to add to their library which is done by making an axios call to an external API. This app was made because I love to play boardgames but have a hard time remembering what I've played before from my own collection or at a freind's game night. With this app the user can rate and leave comments on their favorite games as well as see other user's ratings. </p>
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
              <a href="https://chirper-chirp.herokuapp.com/login" disabled>Not Deployed</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Chirper<i className="material-icons right">-</i></span>
            <p>Chirper is created as a group effort where we used Mondodb with Express for the backend and React with Node on the frontend. We wanted to create a social media app similar to Twitter where users can make posts as well as interact with other users by following, liking and replying to their posts.</p>
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
              <a  href="https://tarotjournal-front.herokuapp.com/" disabled>Not Deployed</a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">About Tarot Journal<i className="material-icons right">-</i></span>
            <p>Tarot Journal is made using Mongodb with Express on the backend and React with Node on the frontend. The styling was done with tailwind css. The user can sign up to make private journal entries and pull three card tarot readings for each entry. This app was made out of a personal desire to have a journaling app where I can pull as many readings as I need and make notes. A user can favorite, edit and delete any entry.</p>
          </div>
        </div>
      </div>

    }
  }


  return (
    <div id='projects' className="row">
      <h2 className="center-align">Projects</h2>
      <div className="row">{display()}</div>
    </div>
  )
};

export default Projects;