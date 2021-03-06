import React, { useEffect } from 'react'
import Button from './Button'



import AnchorLink from 'react-anchor-link-smooth-scroll'

//CSS import
import "../../css/components/Home.css";

// replace a tag with Link
const Layout = (props) => {


  let page = props.children.map(child => {
    return child
  }
  )
  // console.log(page)
  return (
    <div>
      <div className="navbar-fixed relative ">
        <nav>
          <div className="nav-wrapper cyan darken-4">
          <a href="#home" className="brand-logo left hide-on-small-only nav-name">Vanessa Avila</a>
          <a href="#home" className="brand-logo left show-on-small hide-on-med-and-up nav-name">VA </a>
            {/* <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="right material-icons">menu</i></a> */}

            <ul id="nav-mobile" className="right show-on-large hide-on-med-and-down">
              <li><AnchorLink href="#about">About </AnchorLink></li>
              <li><AnchorLink href="#projects">Projects</AnchorLink></li>
              <li><AnchorLink href="#skills">Skills</AnchorLink></li>
              <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
            {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
            <ul id="nav-mobile" className="right hide-on-large-only show-on-medium-and-down">
              <li><AnchorLink href="#about">About </AnchorLink></li>
              <li><AnchorLink href="#projects">Projects</AnchorLink></li>
              <li><AnchorLink href="#skills">Skills</AnchorLink></li>
              <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
          </div>


        </nav>



      </div>
      <main>
        <div className="container">
          {props.children}
        </div>
      </main>

      {/* ################# FOOTER STERTS ######################## */}
    <div >
      <footer className="page-footer cyan darken-4 ">
        <div className="container ">
          <div className="row space-between">
            <div className="col s4 ">
              <Button className="waves-effect waves-light btn btn-flat flow-text hide-on-med-and-up show-on-small" type="button" label="github" href="https://github.com/regularvanessaperson" />
              <Button className="waves-effect waves-light btn btn-large hide-on-small-only show-on-medium-and-up" type="button" label="github" href="https://github.com/regularvanessaperson" />
            </div>
            <div className="col s4  ">
              <Button className="waves-effect waves-light btn btn-flat flow-text hide-on-med-and-up show-on-small" type="button" label="linkedin" href="https://www.linkedin.com/in/vanessa-avila-52abb452/" />
              <Button className="waves-effect waves-light btn btn-large hide-on-small-only show-on-medium-and-up" type="button" label="linkedin" href="https://www.linkedin.com/in/vanessa-avila-52abb452/" />
            </div>
            <div className="col s4  "> 
              <Button className="waves-effect waves-light btn btn-flat flow-text  hide-on-med-and-up show-on-small" type="button" label="resume" href="https://docs.google.com/document/d/1agdc6V1LmXXHeiUJp-tYgvwhwhbUgl2z8beXvRbZn5s/edit?usp=sharing" />
              <Button className="waves-effect waves-light btn btn-large hide-on-small-only show-on-medium-and-up" type="button" label="resume" href="https://docs.google.com/document/d/1agdc6V1LmXXHeiUJp-tYgvwhwhbUgl2z8beXvRbZn5s/edit?usp=sharing" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">

          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Layout;