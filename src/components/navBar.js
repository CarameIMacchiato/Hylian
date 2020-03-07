import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../images/logosmall.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgba(28, 31, 45, .5)",
      display: "flex",
      position: "fixed",
      width: "100%",
      height: "70px",
      verticalAlign: "middle",
      justifyContent: "space-between",
      alignItems: 'center'
    }}>

    <div style={{marginLeft: "1rem"}}>
        <img src={Logo} onClick={() => scrollTo('#home')} style={{cursor: "pointer", maxWidth: '100%', height: 'auto'}} />
    </div>
    <div style={{display: `flex`, alignItems: 'center'}}>
        <ul>
          <li style={{listStyleType: "none"}}>
            <a onClick={() => scrollTo('#problemSection')} style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
              Problem
            </a>
          </li>
          <li style={{listStyleType: "none"}}>
            <a onClick={() => scrollTo('#solutionSection')} style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
              Solution
            </a>
          </li>
          <li style={{listStyleType: "none"}}>
            <a onClick={() => scrollTo('#teamSection')} style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
              Team
            </a>
          </li>
          <li style={{listStyleType: "none"}}>
            <a href="" style={{color: '#EDE68A', textDecoration: `none`, cursor: "pointer"}}>
              Download
            </a>
          </li>
        </ul>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
