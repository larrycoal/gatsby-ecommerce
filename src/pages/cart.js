import React, { useEffect, useState } from "react"
import Layout from "../components/layout"

const CartPage = () => {
  const [cartItem, setcartItem] = useState([])
  const [price, setPrice] = useState(0)
  var totalPrice = 0
  useEffect(() => {
    const cartItem = JSON.parse(window.localStorage.getItem("product"))
    setcartItem(Object.values((cartItem && cartItem) || []))
  }, [])
  useEffect(() => {
    setPrice(
      cartItem.reduce((acc, item) => (acc += Number.parseInt(item.price)), 0) ||
        0
    )
  }, [cartItem])
  return (
    <Layout>
      <div className="cart_wrapper">
        <div className="container">
          <div className="top">
            <p>Order Summary</p>
          </div>
          <div className="bottom">
            {cartItem.length > 0 ? (
              Object.values(cartItem).map(item => (
                <div className="item_wrapper" key={item.id}>
                  <div className="image">
                    <img src={item.path} alt="cannabis" />
                  </div>
                  <div className="desc">
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div> cart is empty</div>
            )}
          </div>
          <div className="total">
            <span>SubTotal</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
