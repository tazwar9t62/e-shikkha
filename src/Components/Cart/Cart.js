import React from "react";

const Cart = (props) => {
  let cart = props.cart;
  return (
    <div>
      <h1>Course added: {cart.length}</h1>
    </div>
  );
};

export default Cart;
