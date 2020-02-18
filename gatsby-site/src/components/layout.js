/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./navBar"
import Team from "./team"
import Intro from "./intro"
import "./layout.css"
import Solution from "./solution"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "100%",
          padding: `0`,
        }}
      >
        
        <main>{children}
          <Intro ></Intro >
          <Solution></Solution>
        </main>
        <Team></Team>
        
        <footer class="footer">
          iSchool Capstone 2020, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
