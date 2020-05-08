import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navBar";
import Home from "./Home";
import "./layout.css";
import Cognitive from "./Cognitive.js";
import Motor from "./Motor.js";
import Visual from "./Visual.js";
import Auditory from "./Auditory.js";
import {Switch, NavLink, Route} from 'react-router-dom';


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
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "100%",
          padding: `0`,
        }}
      >
 
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/visual' component={Visual}/>
          <Route exact path='/cognitive' component={Cognitive}/>
          <Route exact path='/auditory' component={Auditory}/>
          <Route exact path='/motor' component={Motor}/>
        </Switch>
        
        <footer class="footer">
          Team Hylian | iSchool Capstone 2020, This project is a part of the <a href="https://ischool.uw.edu/capstone">Capstone Project</a> course at the University of Washington Information School 
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
