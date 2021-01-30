import React from 'react'
//React Router
import {Route} from 'react-router-dom'
// Components imports
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About"
import Layout from "./components/common/Layout"


// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
    <Layout>
      <Route exact path='/' component = {Home} />
      <Route path='/skills' component = {Skills} />
      <Route exact path='/projects' component = {Projects} />
      <Route exact path='/about' component = {About} />
    </Layout>
    </div>
  );
};

export default App;


