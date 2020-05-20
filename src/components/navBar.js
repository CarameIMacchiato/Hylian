import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Logo from '../images/logosmall.png';

const Navbar = ({ siteTitle }) => (
  <header
    style={{
      background: "rgb(28, 31, 45)",
      display: "flex",
      position: "fixed",
      width: "100%",
      height: "70px",
      verticalAlign: "middle",
      justifyContent: "space-between",
      alignItems: 'center',
      zIndex: 3,
    }}>

    <div style={{marginLeft: "1rem"}}>
        <a href="/Hylian"><img src={Logo} style={{cursor: "pointer", maxWidth: '100%', height: 'auto'}} /></a>
    </div>
    <div style={{display: `flex`, alignItems: 'center'}}>
        <ul>
          <li style={{listStyleType: "none"}}>
            <a href="/Hylian" style={{color: 'white', textDecoration: `none`, cursor: "pointer"}}>
              Home
            </a>
          </li>
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
        </ul>
      </div>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
