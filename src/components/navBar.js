import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgba(28, 31, 45, .5)",
      display: "flex",
      position: "fixed",
      width: "100%",
      height: "70px",
      verticalAlign: "middle",
      justifyContent: "space-between"
    }}>

    <div style={{marginTop: ".75rem", marginLeft: "1rem"}}>
      <h1 style={{cursor: "pointer"}}>
        <a onClick={() => scrollTo('#home')} style={{color: 'white', textDecoration: `none`}}>
          {siteTitle}
        </a>
        </h1>
    </div>
    <div style={{display: `flex`, float: "right", justifyContent: "space-around", marginTop: "1rem"}}>
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
