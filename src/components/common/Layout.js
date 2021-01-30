import React from 'react'


import AnchorLink from 'react-anchor-link-smooth-scroll'

// replace a tag with Link
const Layout = (props) => {
    let page = props.children.map(child =>{
        return child
    }
    )
    console.log(page)
    return (
        <div>
            <div className="navbar-fixed ">
            <nav>
                <div className="nav-wrapper #7986cb indigo lighten-2">
                <a href="#home" className="brand-logo left-align">Vanessa Avila</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><AnchorLink href="#about">About </AnchorLink></li>
                    <li><AnchorLink href="#projects">Projects</AnchorLink></li>
                    <li><AnchorLink href="#skills">Skills</AnchorLink></li>
                </ul>
                </div>
            </nav>
            </div>
            <main>
                <div>
                {props.children}
                </div>
            </main>
            
            {/* ################# FOOTER STERTS ######################## */}
      
            <footer className="page-footer #7986cb indigo lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Resume</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Layout;