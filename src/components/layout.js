/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import { Container } from "react-bootstrap"

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
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Container fluid as="footer">
        <p className="text-center small my-3">
          Copyright © {new Date().getFullYear()} Nicola D'Aniello
        </p>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
