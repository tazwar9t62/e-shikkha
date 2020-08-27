import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  let cart = props.cart;
  let total = cart.reduce((total, prd) => total + prd.price, 0);
  let coupon = total / 10;
  let totalBeforeTax = total - coupon;
  let tax = totalBeforeTax / 20;
  let grandTotal = totalBeforeTax + tax;
  //Function to format number
  function numFormat(num) {
    let precision = num.toFixed(2);
    return Number(precision);
  }
  return (
    <div className="shadow text-left">
      <h1 className="bg-primary text-white text-center">
        <FontAwesomeIcon icon={faShoppingCart} />
      </h1>
      <h3>Course enrolled: {cart.length}</h3>
      <h3>Price: ${numFormat(total)}</h3>
      <h5>
        Coupon Applied (10%):{" "}
        <span className="text-success"> -${numFormat(coupon)}</span>
      </h5>
      <h5>
        Tax (5%): <span className="text-danger"> ${numFormat(tax)}</span>
      </h5>

      <button type="button" className="btn btn-primary btn-block">
        Checkout{" "}
        <span className="badge badge-light">$ {numFormat(grandTotal)}</span>
      </button>
    </div>
  );
};

export default Cart;
