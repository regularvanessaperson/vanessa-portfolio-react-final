import React, { useEffect, useState } from 'react'

//Components
import Spinner from './common/Spinner'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

//CSS import
import "../css/components/Home.css";

const Home = () => {
  // const [data, setData] = useState([])
  //used for handling loader
  const [loading, setLoading] = useState(true)
useEffect(()=>{
  setLoading(false)
}, [])

  const display = () => {

    if(loading){
      return <Spinner/>
    }else{
      return <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    }
  }


  return (
    
    <div id='home'> {display()} </div>
  
  )
};
export default Home;
