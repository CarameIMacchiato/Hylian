import React from "react"
import {BrowserRouter} from 'react-router-dom';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <BrowserRouter>
    <Layout>
      <SEO title="Home" />
    </Layout>
  </BrowserRouter>
)

export default IndexPage
