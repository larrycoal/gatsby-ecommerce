import  React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Product from '../components/product'

const HomePage = () => {

  return(
    <Layout>
    <div className="main-wrapper">
      <div className="left">
        <div className="top">
          <h1>LOREM IPSUM DOLORET</h1>
          <p>
            Sunt nostrud amet aliqua eiusmod mollit. Eu Lorem voluptate laboris
            aliqua adipisicing ea dolore tempor proident enim excepteur dolor.
            Quis reprehenderit mollit nostrud
          </p>
        </div>
        <div className="bottom">
          <span>
            <i class="fab fa-instagram" aria-hidden="true"></i>Instagram
          </span>
          <span>
            <i class="fab fa-twitter" aria-hidden="true"></i>Twitter
          </span>
          <span>
            <i class="fab fa-facebook" aria-hidden="true"></i>Facebook
          </span>
        </div>
      </div>
      <div className="right">
        <StaticImage
          src="../images/shelby-ireland-l0SMAXO6wV0-unsplash.jpg"
          alt="Cannbis image"
        />
      </div>
    </div>
    <div className="product-wrapper">
      <Product/>
    </div>
  </Layout>
  )
  
}

export default HomePage
