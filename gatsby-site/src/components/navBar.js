import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#383a56`,
      marginBottom: `1.45rem`,
      display: "flex",

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        marginLeft: '0',
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        alignContent: `middle`,
        alignItems: `middle`
        
      }}
    >
      <h1 style={{ marginRight: '10px', marginLeft: '10px' }}>
        <Link
          to="/"
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
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '40px', }}>
          <Link to="" style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Problem
          </Link>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '40px',}}>
          <Link to="" style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Solution
          </Link>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '40px',}}>
          <Link to="" style={{
            color: '#EDE68A',
            textDecoration: `none`,
          }}>
            Team
          </Link>
        </h3>
        <h3 style={{ marginRight: `10px`, marginLeft: '10px', marginTop: '40px',}}>
          <Link to="" style={{
            color: '#ff7c7c',
            textDecoration: `none`,
          }}>
            Download
          </Link>
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
