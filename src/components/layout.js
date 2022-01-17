/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./main.scss"
import Footer from "./footer"
import { CartContextProvider } from "../context/cartContext"

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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <CartContextProvider>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </CartContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
