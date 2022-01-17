import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CartContext } from "../context/cartContext"

const Header = ({ siteTitle }) => {

  const {cartItems}=useContext(CartContext)
  return (
    <header className="main_header">
      <h1 className="--title">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="--subtitle">
        <Link to="/about">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/" className="cart">
          <span>Cart</span>
          <span>
            <small>{cartItems?.length}</small>
          </span>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
