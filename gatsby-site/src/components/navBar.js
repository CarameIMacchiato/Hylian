import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgba(56, 58, 86, .9)",
      display: "flex",
      position: "fixed",
      width: "100%",
      height: "10vh",
      // opacity: "50%"
      verticalAlign: "middle",
      justifyContent: "space-between"
    }}
  >
    <div
      style={{
       
      }}
    >
      <h1 style={{}}>
        <Link
          to="#home"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h1>
    </div>
    <div
        style={{
          display: `flex`,
          float: "right",
          justifyContent: "space-around"
        }}
      >
        <h3 style={{verticalAlign: "middle"}}>
          <a href="" style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Problem
          </a>
        </h3>
        <h3 style={{cursor: "pointer"}}>
          <a onClick={() => scrollTo('#solutionSection')} style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Solution
          </a>
        </h3>
        <h3 style={{cursor: "pointer"}}>
          <a onClick={() => scrollTo('#teamSection')} style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Team
          </a>
        </h3>
        <h3 style={{}}>
          <a href="" style={{
            color: '#ff7c7c',
            textDecoration: `none`,
          }}>
            Download
          </a>
        </h3>
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
