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
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        marginLeft: '0',
        maxWidth: 960,
        padding: `.5rem .5rem`,
        display: `flex`,
        alignContent: `middle`,
        alignItems: `middle`
      }}
    >
      <h1 style={{ marginRight: '10px', marginLeft: '10px'}}>
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
        }}
      >
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '20px', }}>
          <a href="" style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Problem
          </a>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '20px', cursor: "pointer"}}>
          <a onClick={() => scrollTo('#solutionSection')} style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Solution
          </a>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '20px', cursor: "pointer"}}>
          <a onClick={() => scrollTo('#teamSection')} style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Team
          </a>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '20px',}}>
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
