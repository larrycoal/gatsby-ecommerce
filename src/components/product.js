import { useStaticQuery, graphql } from "gatsby"
import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../context/cartContext"

const Product = () => {
  const { addToCart } = useContext(CartContext)
  const [showFilter, setShowFilter] = useState(false)
  const [allProduct, setAllproduct] = useState(null)
  const productQuery = useStaticQuery(graphql`
    query ProductQueryIndex {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              name
              description
              price
              composition
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    const newProduct = productQuery.allMarkdownRemark.edges
    setAllproduct(() => [...newProduct])
  }, [])

  const handleAddToCart = prdct => {
    const newPrdct = {
      id: prdct.id,
      name: prdct.frontmatter.name,
      price: prdct.frontmatter.price,
      description: prdct.frontmatter.description,
      path:prdct.frontmatter.path,
    }
    addToCart(newPrdct)
  }
  const ProductCard = () => {
    return (
      allProduct &&
      allProduct.map(prdct => (
        <div className="product_card" key={prdct.id}>
          <div className="top">
            <img src={prdct.node?.frontmatter?.path} alt="cannabis image" />
          </div>
          <div className="bottom">
            <p className="potency">{prdct.node?.frontmatter?.composition}</p>
            <h1>{prdct.node?.frontmatter?.name}</h1>
            <p className="desc">{prdct.node?.frontmatter?.description}</p>
            <p className="price">${prdct.node?.frontmatter?.price}/g</p>
            <button onClick={() => handleAddToCart(prdct?.node)}>
              <i class="fa fa-plus" aria-hidden="true"></i> Add to Cart
            </button>
          </div>
        </div>
      ))
    )
  }

  return (
    <>
      <div className="product_header">
        <div className="filter">
          <div className="active" onClick={() => setShowFilter(!showFilter)}>
            <span>All Product</span>
            <span>
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
          <ul className={showFilter ? "product_list" : "product_list hidden"}>
            <li>THC product</li>
            <li>CBD product</li>
            <li>Edibles</li>
            <li>Accessories</li>
          </ul>
        </div>
      </div>
      <div className="product_body">
        <ProductCard />
      </div>
    </>
  )
}

export default Product
