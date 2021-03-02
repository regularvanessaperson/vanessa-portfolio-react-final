import React, { useEffect } from 'react'
import Button from './Button'
import M from 'materialize-css/dist/js/materialize.min.js'


import AnchorLink from 'react-anchor-link-smooth-scroll'

// replace a tag with Link
const Layout = (props) => {

  useEffect(() => {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function () {
      let elems = document.querySelectorAll('.sidenav');
      let instances = M.Sidenav.init(elems, 100);
    });
  }, [])


  let page = props.children.map(child => {
    return child
  }
  )
  console.log(page)
  return (
    <div>
      <div className="navbar-fixed relative ">
        <nav>
          <div className="nav-wrapper cyan darken-4">
            <a href="#home" className="brand-logo left">Vanessa Avila</a>
            {/* <a href="#" data-target="mobile-demo" className="right sidenav-trigger"><i className="right material-icons">menu</i></a> */}

            <ul id="nav-mobile" className="right show-on-large hide-on-med-and-down">
              <li><AnchorLink href="#about">About </AnchorLink></li>
              <li><AnchorLink href="#projects">Projects</AnchorLink></li>
              <li><AnchorLink href="#skills">Skills</AnchorLink></li>
            </ul>
            {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
            <ul id="nav-mobile" className="right hide-on-large-only show-on-medium-and-down">
              <li><AnchorLink href="#about">About </AnchorLink></li>
              <li><AnchorLink href="#projects">Projects</AnchorLink></li>
              <li><AnchorLink href="#skills">Skills</AnchorLink></li>
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

      <footer className="page-footer cyan darken-4">
        <div className="container">
          <div className="row">
            <div className="col ">
              <Button className="waves-effect waves-light btn-large " type="button" label="github" href="https://github.com/regularvanessaperson" />
            </div>
            <div className="col s3 offset-s1">
              <Button className="waves-effect waves-light btn-large " type="button" label="linkedin" href="https://www.linkedin.com/in/vanessa-avila-52abb452/" />
            </div>
            <div className="col s3 offset-s1"> 
              <Button className="waves-effect waves-light btn-large " type="button" label="resume" href="https://docs.google.com/document/d/1agdc6V1LmXXHeiUJp-tYgvwhwhbUgl2z8beXvRbZn5s/edit?usp=sharing" />
            </div>

          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout;