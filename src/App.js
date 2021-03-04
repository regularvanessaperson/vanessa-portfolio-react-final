import React, {useEffect} from 'react'
//React Router
import {Route} from 'react-router-dom'
// Components imports
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About"
import Layout from "./components/common/Layout"
import Contact from "./components/Contact"
import M from 'materialize-css/dist/js/materialize.min.js'

// CSS imports
import "./css/App.css";

const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <div className="">
    <Layout>
      <Route path='/' component = {Home} />
      <Route path='/skills' component = {Skills} />
      <Route path='/projects' component = {Projects} />
      <Route path='/about' component = {About} />
      <Route path='/contact' component= {Contact} />
    </Layout>
    </div>
  );
};

export default App;


